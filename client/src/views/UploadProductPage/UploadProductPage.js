import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../components/FileUpload'
import Axios from 'axios';

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
    { key: 1, value: "Engineering" },
    { key: 2, value: "Arts" },
    { key: 3, value: "Liberal Arts" },
    { key: 4, value: "Accounting" },
    { key: 5, value: "Bussiness" }
]
const category = [
    { key: 1, value: "Computer" },
    { key: 2, value: "Physics" },
    { key: 3, value: "Chemistry" },
    { key: 4, value: "Arts" },
    { key: 5, value: "Music" }
]

function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [authorValue, setauthorValue] = useState("")
    const [professorValue, setprofessorValue] = useState("")
    const [codeValue, setcodeValue] = useState("")
    const [isbnValue, setisbnValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [versionValue, setversionValue] = useState(0)
    const [conditionValue, setconditionValue] = useState(1)
    const [levelValue, setlevelValue] = useState(1)
    const [departmentValue, setdepartmentValue] = useState(1)
    const [categoryValue, setcategoryValue] = useState(1)


    const [Images, setImages] = useState([])


    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onauthorChange = (event) => {
        setauthorValue(event.currentTarget.value)
    }

    const onprofessorChange = (event) => {
        setprofessorValue(event.currentTarget.value)
    }

    const oncodeChange = (event) => {
        setcodeValue(event.currentTarget.value)
    }

    const onisbnChange = (event) => {
        setisbnValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onversionChange = (event) => {
        setversionValue(event.currentTarget.value)
    }

    const onconditionSelectChange = (event) => {
        setconditionValue(event.currentTarget.value)
    }

    const onlevelSelectChange = (event) => {
        setlevelValue(event.currentTarget.value)
    }

    const ondepartmentSelectChange = (event) => {
        setdepartmentValue(event.currentTarget.value)
    }

    const oncategorySelectChange = (event) => {
        setcategoryValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();


        if (!TitleValue || !DescriptionValue || !categoryValue || !departmentValue || !levelValue || !authorValue || !isbnValue || !professorValue || !codeValue || !PriceValue || !conditionValue || !versionValue || !Images) {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            author: authorValue,
            code: codeValue,
            professor: professorValue,
            ISBN: isbnValue,
            description: DescriptionValue,
            price: PriceValue,
            version: versionValue,
            images: Images,
            condition: conditionValue,
            level: levelValue,
            department: departmentValue,
            category: categoryValue,
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    props.history.push('/textbook')
                } else {
                    alert('Failed to upload Product')
                }
            })

    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Upload My Textbooks</Title>
            </div>


            <Form onSubmit={onSubmit} >

                {/* DropZone */}
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>Title</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label>Author</label>
                <Input
                    onChange={onauthorChange}
                    value={authorValue}
                />
                <br />
                <br />
                <label>Version</label>
                <Input
                    onChange={onversionChange}
                    value={versionValue}
                    type="number"
                />
                <br />
                <br />
                <label>ISBN</label>
                <Input
                    onChange={onisbnChange}
                    value={isbnValue}
                />
                <br />
                <br />
                <select onChange={onconditionSelectChange}>
                    {condition.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br />
                <label>Course Code</label>
                <Input
                    onChange={oncodeChange}
                    value={codeValue}
                />
                <br />
                <br />
                <label>Professor</label>
                <Input
                    onChange={onprofessorChange}
                    value={professorValue}
                />
                <br />
                <br />
                <select onChange={onlevelSelectChange}>
                    {level.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br />
                <select onChange={ondepartmentSelectChange}>
                    {department.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br />
                <select onChange={oncategorySelectChange}>
                    {category.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br />
                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <label>Price($)</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <br /><br />
                

                <Button
                    onClick={onSubmit} type="primary" size="large"
                >
                    Submit
                </Button>

            </Form>

        </div>
    )
}

export default UploadProductPage