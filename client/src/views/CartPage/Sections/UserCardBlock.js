import React from 'react'
import { Icon, Button } from 'antd';

function UserCardBlock(props) {
    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `https://textbook-exchange-uf.herokuapp.com/${image}`
        }
    }

    const renderItems = () => (
        props.products && props.products.map(product => (
            <tr key={product._id}>
                <td>{product.username}:<br/> <Icon type="mail"/> {product.useremail} ,<br/> <Icon type="phone"/> {product.userphone}</td>
                <td>
                    <img style={{ width: '70px' }} alt="product" 
                    src={renderCartImage(product.images)} />
                </td> 
                <td>{product.title} </td>
                <td>{product.author} </td>
                <td>{product.quantity} EA</td>
                <td>$ {product.price} </td>
                <td><Button type="danger"
                onClick={()=> props.removeItem(product._id)}
                ><Icon type="delete" /> </Button> </td>
            </tr>
        ))
    )

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Seller</th>
                        <th>Textbook Image</th>
                        <th>Textbook Title</th>
                        <th>Textbook Author</th>
                        <th>Textbook Quantity</th>
                        <th>Textbook Price</th>
                        <th>Remove from Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock