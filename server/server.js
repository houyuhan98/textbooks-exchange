const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require("cookie-parser"),
    cors = require('cors');
    sgMail = require('@sendgrid/mail');

    mongoose.connect(process.env.DB_URI || require('./config/config').db.uri, {
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

    // body parsing middleware
    app.use(bodyParser.json());
    app.use(cors())
    app.use(cookieParser());

    app.use('/api/users', require('./routes/users'));
    app.use('/api/product', require('./routes/product'));
    app.use('/api/comment', require('./routes/comment'));
    app.use('/api/like', require('./routes/like'));
    app.use('/uploads', express.static('uploads'));

    sgMail.setApiKey('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');

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }

    const port = process.env.PORT || 5000

    server.listen(port, () => {
      console.log(`Server Running at ${port}`)
    });


