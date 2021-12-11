import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Col,Container} from 'react-bootstrap'
const NewCategorySlider = ({catName}) => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    const [componentMounted, setcomponentMounted] = useState(true)
    // let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products`);
            console.log("Category props",catName)
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return () => {
                setcomponentMounted(false);
            }
        }

       
        getProducts();
    },[])

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        );
    };

    const ShowProducts = () => {
        return (
                
                <Carousel className="bg-white container" 
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={false}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    itemClass="carousel-item-padding-40-px "
                 >
                    {filter.slice().map((product) => {
                        return (
                            <div className="m-2">
                            <Card className="w-100 " key={product.id} style={{ width: '18rem',  marginLeft: '.5rem' }}>
                            <div className="border border-primary text-truncate">
                    <span class="badge bg-white text-primary " >CODE:HY5242DD23 GET-10% OFF </span>
                  </div>
                                <Card.Img variant="top" width="200px" height="200px" src={product.image} alt={product.title} />
                                <Card.Body>
                                    <Card.Title>{product.title.substring(0, 12)}</Card.Title>
                                    <Card.Text>
                                        ${product.price} 
                                    </Card.Text>
                                    
                                    <Col className="text-center">  
                                    <Button  variant="primary">view product</Button></Col>
                                
                                    <Card.Text>
                                       <h5 style={{color:"orange"}} className="p-2"> {product.rating.rate} <i className="fa fa-star"></i></h5>

                                    </Card.Text>
                                </Card.Body>
                            </Card> </div> 

                        )
                    })}
                </Carousel>
                    
            )
    }

   
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7,
          slidesToSlide: 1// optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <div >
            <div className="container my-5 py-5 bg-white justify-content-center">
                <div className="row">
                    <div className="col-6 mb-5">
                        <h5 className="display-6 fw-bolder"> {catName.toUpperCase()}</h5>
                        
                    </div>
                    <div className="col-6 mb-5 ">
                        <button className="display-6 fw-bolder btn btn-outline-dark float-end "> <h5>Shop Now</h5></button>
                       
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}

                </div>
                <div className="row">

                </div>
            </div>

        </div>
    );
}

export default NewCategorySlider;