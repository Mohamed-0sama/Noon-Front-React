import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import Ads from './Ads'
function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    // let componentMounted = true;
    const [componentMounted,setComp]=useState(true)
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://noon-ecommerce.herokuapp.com/api/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return () => {
                // componentMounted = false;
                setComp(false);
            }
        }
        getProducts();
    }, [])

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

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons justify-content-center d-flex mb-5 pb-5">

                    <input onClick={() => filterProduct("men's clothing")}
                        type="image" src="https://k.nooncdn.com/cms/pages/20211130/76d18741396e9239cdab40c73845efb5/en_mb-circle-24.png"
                        alt="Men's" />

                    <input onClick={() => filterProduct("men's clothing")}
                        type="image" src="https://k.nooncdn.com/cms/pages/20211130/76d18741396e9239cdab40c73845efb5/en_mb-circle-01.png"
                        alt="Men's" />

                    <input onClick={() => filterProduct("women's clothing")}
                        type="image" src="https://k.nooncdn.com/cms/pages/20211130/76d18741396e9239cdab40c73845efb5/en_mb-circle-02.png"
                        alt="Women's" />

                    <input onClick={() => filterProduct("electronics")}
                        type="image" src="https://k.nooncdn.com/cms/pages/20211130/76d18741396e9239cdab40c73845efb5/en_mb-circle-14.png"
                        alt="Electronics" />

                    <input onClick={() => filterProduct("jewelery")}
                        type="image" src="https://k.nooncdn.com/cms/pages/20211130/76d18741396e9239cdab40c73845efb5/en_mb-circle-25.png"
                        alt="jewelery" />
                </div>

                    <Ads  className="p-1" AdLink="https://k.nooncdn.com/cms/pages/20211107/a58fba95ad31a79fdd281a67d483dcb0/en_dk-toggle-01.png  "  />

                    <br/>
                    <br/>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4" key={product.id} >
                                    <img src={`https://noon-ecommerce.herokuapp.com/images/${product.imageSrc}`} class="card-img-top" alt={product.title} height="250px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                        <p class="card-text lead ">${product.price}</p>
                                        <a href="#" class="btn btn-primary">View Product</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>)
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder ">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>

                <div className="row">

                </div>
            </div>

        </div>
    )
}

export default Products
