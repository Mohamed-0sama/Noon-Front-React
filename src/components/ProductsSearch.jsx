import React from 'react';
import { useNavigate } from 'react-router-dom';
const ProductsSearch = ({ products, loading }) => {
  let navigate = useNavigate()
  const goToProductDetails = (productId) => {
      //console.log("gowaaaaaaa");
      navigate(`/productDetails/${productId}`)
      
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }


  return (
    <>
    {products.map((product) => {
        return (
            <>
                <div className="col-md-3 mb-4">
                    <div class="card h-100 text-center p-4" key={product._id} >
                        <img src={`${process.env.REACT_APP_API_URL}/images/${product.imageSrc}`} class="card-img-top" alt={product.title} height="250px" />
                        <div class="card-body">
                            <h5 class="card-title mb-0">{product.title.substring(0, 20)}...</h5>
                            <p class="card-text lead ">${product.price}</p>
                            <button className='btn btn-primary' onClick={() => goToProductDetails(product._id)}>view product</button>
                        </div>
                    </div>
                </div>
            </>
        )
    })}
  </>
  );
};

export default ProductsSearch;






