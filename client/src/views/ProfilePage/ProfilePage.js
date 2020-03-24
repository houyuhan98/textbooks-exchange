import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';
import { Button, Form, Input, Icon } from 'antd';

const { TextArea } = Input;
const sex = [
    { key: 1, value: "Male" },
    { key: 2, value: "Female" }
]

function ProfilePage() {

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
   
    return (
        <div style={{ width: '80%', margin: '3rem auto ' }}>
           <div style={{ textAlign: 'left' }}>
                <h1>My Profile <Link className="btn btn-light" to="/settings"><Icon type="setting" style={{color:'grey', fontSize:25}}/></Link></h1>
            </div>
            <br/>
            <Form>
                <label>Email</label><Input/>
                <br/>
                <br/>
                <label>Full Name</label><Input/>
                <br/>
                <br/>
                <label>Birthday</label><Input type="date"/>
                <br/>
                <br/>
                <label>Sex</label><br/>
                <select style={{width:200, height:30, borderRadius:5}}>
                    {sex.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <br/>
                <br/>
                <label>Phone</label><Input/>
                <br/>
                <br/>
                <label>Address</label><Input/>
                <br/>
                <br/>
                <label>Description</label><TextArea/>
                <br/>
                <br/>
                <Button type="dashed" size="large">Update Profile</Button>
            </Form>
            <br/>
            <br/>
            
            <div style={{ textAlign: 'left' }}>
                <h1>My Purchase History</h1>
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
                <h1>My Post History</h1>
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