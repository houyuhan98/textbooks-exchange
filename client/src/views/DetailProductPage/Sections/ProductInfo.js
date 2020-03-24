import React, { useEffect, useState } from 'react'
import { Button, Descriptions, Icon } from 'antd';
import { useSelector } from 'react-redux';

function ProductInfo(props) {
    const user = useSelector(state => state.user)
    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        if (user.userData && !user.userData.isAuth) {
            return alert('Please Log in first');
        }
        props.addToCart(props.detail._id)
    }
    const addToFavoritehandler = () => {
        if (user.userData && !user.userData.isAuth) {
            return alert('Please Log in first');
        }
        props.addToFavorite(props.detail._id)
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button size="large" shape="round" type="danger"
                    onClick={addToFavoritehandler}
                >
                    <Icon type="heart" />
                    </Button>
            </div>
            <Descriptions title="Details:">
                <Descriptions.Item label="Price">${Product.price}</Descriptions.Item>
                <Descriptions.Item label="Sold">{Product.sold}</Descriptions.Item>
                <Descriptions.Item label="Author"> {Product.author}</Descriptions.Item>
                <Descriptions.Item label="Course Code"> {Product.code}</Descriptions.Item>
                <Descriptions.Item label="Professor"> {Product.professor}</Descriptions.Item>
                <Descriptions.Item label="Version"> {Product.version}</Descriptions.Item>
                <Descriptions.Item label="ISBN"> {Product.ISBN}</Descriptions.Item>
            </Descriptions>
            <br/>
            <div>
                <label><strong>Description:</strong></label><p>{Product.description}</p>
            </div>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="primary"
                    onClick={addToCarthandler}
                >
                    <Icon type="shopping-cart" />Add to Cart
                    </Button>
            </div>
        </div>
    )
}

export default ProductInfo