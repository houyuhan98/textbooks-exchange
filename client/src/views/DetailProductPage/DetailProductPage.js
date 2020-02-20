import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Row, Col } from 'antd';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import Comments from './Sections/Comments'
import LikeDislikes from './Sections/LikeDislikes';
import { addToCart,addToFavorite } from '../../actions/user_actions';
import { useDispatch } from 'react-redux';

function DetailProductPage(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.productId
    const [Product, setProduct] = useState([])
    const [CommentLists, setCommentLists] = useState([])
    const productVariable = {
        productId: productId
    }
    useEffect(() => {
        Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })

    }, [])

    useEffect(() => {

        Axios.post('/api/comment/getComments', productVariable)
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    console.log('response.data.comments', response.data.comments)
                    setCommentLists(response.data.comments)
                } else {
                    alert('Failed to get comments Info')
                }
            })

    }, [])


    const addToCartHandler = (productId) => {
        dispatch(addToCart(productId))
    }
    const addToFavoriteHandler = (productId) => {
        dispatch(addToFavorite(productId))
    }
    const updateComment = (newComment) => {
        setCommentLists(CommentLists.concat(newComment))
    }

    return (
        <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>{Product.title}</h1>
            </div>

            <br />

            <Row gutter={[16, 16]} >
                <Col lg={12} xs={24}>
                    <ProductImage detail={Product} />
                </Col>
                <Col lg={12} xs={24}>
                    <ProductInfo
                        addToCart={addToCartHandler}
                        addToFavorite={addToFavoriteHandler}
                        detail={Product} />
                </Col>
            </Row>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <LikeDislikes video videoId={productId} userId={localStorage.getItem('userId')} />
            </div>
            <Comments productTitle={Product.title} CommentLists={CommentLists} postId={productId} refreshFunction={updateComment} />
        </div>
    )
}

export default DetailProductPage