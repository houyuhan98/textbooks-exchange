import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';
import { Button, Form, Input, Icon } from 'antd';
import { useDispatch } from 'react-redux';
import {
    fetchProfile,
    updateProfile
} from '../../actions/user_actions';

const { TextArea } = Input;
const sex = [
    { key: 1, value: "" },
    { key: 2, value: "Male" },
    { key: 3, value: "Female" },
    { key: 4, value: "I don't want to provide" }
]

function ProfilePage() {
    const dispatch = useDispatch();
    const [emailValue, setemailValue] = useState("")
    const [fullnameValue, setfullnameValue] = useState("")
    const [birthdayValue, setbirthdayValue] = useState("")
    const [sexValue, setsexValue] = useState(1)
    const [phoneValue, setphoneValue] = useState("")
    const [descriptionValue, setdescriptionValue] = useState("")
    const [addressValue, setaddressValue] = useState("")
    const [History, setHistory] = useState([])

    useEffect(() => {
        Axios.get('/api/users/getHistory')
            .then(response => {
                if (response.data.success) {
                    setHistory(response.data.history)
                } else {
                    alert('Failed to get History')
                }
            })

    }, [])
   
    useEffect(() => {
        dispatch(fetchProfile()).then(response => {
            setemailValue(response.payload.email)
            setfullnameValue(response.payload.fullname)
            setbirthdayValue(response.payload.birthday)
            setsexValue(response.payload.sex)
            setphoneValue(response.payload.phone)
            setdescriptionValue(response.payload.description)
            setaddressValue(response.payload.address)
        })
    }, [])

    const onfullnameChange = (event) => {
        setfullnameValue(event.currentTarget.value)
    }
    const onbirthdayChange = (event) => {
        setbirthdayValue(event.currentTarget.value)
    }
    const onsexChange = (event) => {
        setsexValue(event.currentTarget.value)
    }
    const onphoneChange = (event) => {
        setphoneValue(event.currentTarget.value)
    }
    const ondescriptionChange = (event) => {
        setdescriptionValue(event.currentTarget.value)
    }
    const onaddressChange = (event) => {
        setaddressValue(event.currentTarget.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (!fullnameValue){
            return alert('fullname is required')
        }
        let dataToSubmit = {
            fullname: fullnameValue,
            birthday: birthdayValue,
            sex: sexValue,
            phone: phoneValue,
            address: addressValue,
            description: descriptionValue
          };
        dispatch(updateProfile(dataToSubmit)).then(response => {
            alert('profile successfully updated')
          })
    }

    return (
        <div style={{ width: '80%', margin: '3rem auto ' }}>
           <div style={{ textAlign: 'left' }}>
                <h1>My Profile <Link className="btn btn-light" to="/settings"><Icon type="setting" style={{color:'grey'}}/></Link></h1>
            </div>
            <br/>
            <Form onSubmit={onSubmit}>
                <label>Email</label><Input value={emailValue} disabled/>
                <br/>
                <br/>
                <label>Full Name</label><Input  onChange={onfullnameChange} value={fullnameValue}/>
                <br/>
                <br/>
                <label>Birthday</label><Input type="date"  onChange={onbirthdayChange} value={birthdayValue}/>
                <br/>
                <br/>
                <label>Sex</label><br/>
                <select style={{width:200, height:30, borderRadius:5}} onChange={onsexChange} value={sexValue}>
                    {sex.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <br/>
                <br/>
                <label>Phone</label><Input onChange={onphoneChange} value={phoneValue}/>
                <br/>
                <br/>
                <label>Address</label><Input onChange={onaddressChange} value={addressValue}/>
                <br/>
                <br/>
                <label>Description</label><TextArea onChange={ondescriptionChange} value={descriptionValue}/>
                <br/>
                <br/>
                <Button type="dashed" size="large"  onClick={onSubmit}>Update Profile</Button>
            </Form>
            <br/>
            <br/>
            
            <div style={{ textAlign: 'left' }}>
                <h1>My Purchase History <Icon type="shopping"/></h1>
            </div>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Payment Id</th>
                        <th>Textbook</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Date of Purchase</th>

                    </tr>
                </thead>
                <tbody>
                    {History.map(item => (
                        <tr key={item._id}>
                            <td>{item.paymentId}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.dateOfPurchase}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <br/>

            <div style={{ textAlign: 'left' }}>
                <h1>My Post History <Icon type="schedule"/></h1>
            </div>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Textbook Image</th>
                        <th>Textbook Title</th>
                        <th>Textbook Author</th>
                        <th>Textbook Price</th>
                        <th>Date of Post</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    )
}

export default ProfilePage