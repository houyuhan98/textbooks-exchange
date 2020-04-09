const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require("cookie-parser"),
    cors = require('cors');
    sgMail = require('@sendgrid/mail');

    const connect = mongoose.connect(process.env.DB_URI || require('./config/config').db.uri, {
        useNewUrlParser: true
    });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    // initialize app
    const app = express();
    const server = require("http").createServer(app);
    const io = require("socket.io")(server);

    // enable request logging for development debugging
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(cors())
    app.use(cookieParser());

    app.use('/api/users', require('./routes/users'));
    app.use('/api/product', require('./routes/product'));
    app.use('/api/comment', require('./routes/comment'));
    app.use('/api/like', require('./routes/like'));
    app.use('/api/chat', require('./routes/chat'));
    app.use('/uploads', express.static('uploads'));

    sgMail.setApiKey(process.env.sgmail || require('./config/config').sgmail);

    const { Chat } = require("./models/Chat");
    io.on("connection", socket => {
        socket.on("Input Chat Message", msg => {
          connect.then(db => {
            try {
                let chat = new Chat({ message: msg.chatMessage, sender:msg.userId, type: msg.type })
      
                chat.save((err, doc) => {
                  console.log(doc)
                  if(err) return res.json({ success: false, err })
      
                  Chat.find({ "_id": doc._id })
                  .populate("sender")
                  .exec((err, doc)=> {
                      return io.emit("Output Chat Message", doc);
                  })
                })
            } catch (error) {
              console.error(error);
            }
          })
         })
      })

      if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static("client/build"));

        // index.html for all page routes
        app.get("*", (req, res) => {
          res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
        });
    }

    const port = process.env.PORT || 5000
    server.listen(port, () => {
      console.log(`Server Running at ${port}`)
    });