import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Row, Col, Card, Typography } from 'antd';
import ImageSlider from '../../../components/ImageSlider';

const { Meta } = Card;
const { Title } = Typography;


function Relates(props) {
  const [Products, setProducts] = useState([])

  const renderCards = Products.map((product, index) => {

    return <Col lg={6} md={8} xs={24}>
        <Card
            hoverable={true}
            cover={<a href={`/product/${product._id}`} > <ImageSlider images={product.images} /></a>}
        >
            <Meta
                title={product.title}
                description={`$${product.price}`}
            />
        </Card>
    </Col>
  })
    return (
        <div>
           <Title level={3}>More textbooks with course code {props.detail.code}</Title>
                {Products.length==0 ?
                    <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                        <h2>No related textbooks yet...</h2>
                    </div>:
                    <div>
                      <Row gutter={[16, 16]}>
                        {renderCards}
                      </Row>
                    </div>
}
        </div>
    )
}

export default Relates