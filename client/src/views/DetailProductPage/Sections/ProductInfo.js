import React, { useEffect, useState } from 'react'
import { Button, Descriptions, Icon } from 'antd';

function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }
    const addToFavoritehandler = () => {
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
            <Descriptions title={"Seller: "}>
                <Descriptions.Item label="Price">${Product.price}</Descriptions.Item>
                <Descriptions.Item label="Sold">{Product.sold}</Descriptions.Item>
                <Descriptions.Item label="View"> {Product.views}</Descriptions.Item>
                <Descriptions.Item label="Author"> {Product.author}</Descriptions.Item>
                <Descriptions.Item label="Course Code"> {Product.code}</Descriptions.Item>
                <Descriptions.Item label="Professor"> {Product.professor}</Descriptions.Item>
                <Descriptions.Item label="Version"> {Product.version}</Descriptions.Item>
                <Descriptions.Item label="ISBN"> {Product.ISBN}</Descriptions.Item>
                <Descriptions.Item label="Condition"> {Product.condition}</Descriptions.Item>
                <Descriptions.Item label="Level"> {Product.level}</Descriptions.Item>
                <Descriptions.Item label="Department"> {Product.department}</Descriptions.Item>
                <Descriptions.Item label="Category"> {Product.category}</Descriptions.Item>
                <Descriptions.Item label="Description"> {Product.description}</Descriptions.Item>
            </Descriptions>

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