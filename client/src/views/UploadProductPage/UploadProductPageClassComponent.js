import React, { Component } from 'react'
import { Typography, Button, Form, Input } from 'antd';
import axios from 'axios';
import FileUpload from '../../components/FileUpload';

const { Title } = Typography;
const { TextArea } = Input;

const condition = [
    { key: 1, value: "Brand new" },
    { key: 2, value: "New" },
    { key: 3, value: "Used" },
    { key: 4, value: "Good" },
    { key: 5, value: "Old" }
]
const level = [
    { key: 1, value: "Undergraduate" },
    { key: 2, value: "Graduate" },
    { key: 3, value: "PHD" }
]
const department = [
    { key: 1, value: "Herbert Wertheim College of Engineering" },
    { key: 2, value: "College of the Arts" },
    { key: 3, value: "Warrington College of Business" },
    { key: 4, value: "College of Education" },
    { key: 5, value: "College of Medicine" },
    { key: 6, value: "Levin College of Law" },
    { key: 7, value: "Fisher School of Accounting" }
]
const category = [
    { key: 1, value: "Finance" },
    { key: 2, value: "Physics" },
    { key: 3, value: "Math" },
    { key: 4, value: "Arts" },
    { key: 5, value: "Music" }
]

export class UploadProductPage extends Component {

    state = {
        title: '',
        author: '',
        code: '',
        ISBN: '',
        professor: '',
        description: '',
        condition: 1,
        category: 1,
        level: 1,
        department: 1,
        images: [],
        price: 0,
        version: 0
    }

    handleChangeTitle = (event) => {
        this.setState({ title: event.currentTarget.value })
    }

    handleChangeauthor = (event) => {
        this.setState({ author: event.currentTarget.value })
    }

    handleChangecode = (event) => {
        this.setState({ code: event.currentTarget.value })
    }

    handleChangeisbn = (event) => {
        this.setState({ ISBN: event.currentTarget.value })
    }

    handleChangeprofessor = (event) => {
        this.setState({ professor: event.currentTarget.value })
    }

    handleChangePrice = (event) => {
        this.setState({ price: parseInt(event.currentTarget.value, 10) })
    }

    handleChangeversion = (event) => {
        this.setState({ version: parseInt(event.currentTarget.value, 10) })
    }


    handleChangeDecsription = (event) => {
        this.setState({ description: event.currentTarget.value })
    }

    handleChangecondition = (event) => {
        this.setState({ condition: event.currentTarget.value })
    }

    handleChangelevel = (event) => {
        this.setState({ level: event.currentTarget.value })
    }

    handleChangecategory = (event) => {
        this.setState({ category: event.currentTarget.value })
    }

    handleChangedepartment = (event) => {
        this.setState({ department: event.currentTarget.value })
    }

    onSubmit = (event) => {
        event.preventDefault();

        if (this.props.user.userData && !this.props.user.userData.isAuth) {
            return alert('Please Log in First')
        }

        if (!this.state.title || !this.state.description ||
            !this.state.condition || !this.state.images
            || !this.state.price || !this.state.author || !this.state.code || !this.state.ISBN || !this.state.professor || !this.state.version || !this.state.level || !this.state.category || !this.state.department) {
            return alert('Please first fill all the fields')
        }

        const variables = {
            writer: this.props.user.userData._id,
            title: this.state.title,
            author: this.state.author,
            code: this.state.code,
            ISBN: this.state.ISBN,
            professor: this.state.professor,
            description: this.state.description,
            images: this.state.images,
            condition: this.state.condition,
            level: this.state.level,
            category: this.state.category,
            department: this.state.department,
            version: this.state.version,
            price: this.state.price
        }

        axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('video Uploaded Successfully')
                    setTimeout(() => {
                        this.props.history.push('/')
                    }, 1000);
                } else {
                    alert('Failed to upload video')
                }
            })
    }

    updateFiles = (newImages) => {
        this.setState({ images: newImages })
    }


    render() {
        return (
            <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2} > Upload Travel Product</Title>
            </div>

            <Form onSubmit={this.onSubmit}>
               
               <FileUpload refreshFunction={this.updateFiles} />

                <br /><br />
                <label>Title</label>
                <Input
                    onChange={this.handleChangeTitle}
                    value={this.state.title}
                />
                <br /><br />
                <label>Author</label>
                <Input
                    onChange={this.handleChangeauthor}
                    value={this.state.author}
                />
                <br /><br />
                <label>Version</label>
                <Input
                    type="number"
                    onChange={this.handleChangeversion}
                    value={this.state.version}
                />
                <br /><br />
                <label>ISBN</label>
                <Input
                    onChange={this.handleChangeisbn}
                    value={this.state.ISBN}
                />
                <br /><br />
                <select onChange={this.handleChangecondition}>
                    {condition.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <br /><br />
                <label>Course Code</label>
                <Input
                    onChange={this.handleChangecode}
                    value={this.state.code}
                />
                <br /><br />
                <label>Professor</label>
                <Input
                    onChange={this.handleChangeprofessor}
                    value={this.state.professor}
                />
                <br /><br />
                <select onChange={this.handleChangelevel}>
                    {level.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <br /><br />
                <select onChange={this.handleChangedepartment}>
                    {department.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <br /><br />
                <select onChange={this.handleChangecategory}>
                    {category.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <br /><br />
                <label>Description</label>
                <TextArea
                    onChange={this.handleChangeDecsription}
                    value={this.state.description}
                />
                <br /><br />
                <label>Price($)</label>
                <Input
                    type="number"
                    onChange={this.handleChangePrice}
                    value={this.state.price}
                />
                <br /><br />
                <Button type="primary" size="large" onClick={this.onSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
        )
    }
}

export default UploadProductPage