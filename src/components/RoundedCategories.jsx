import React ,{ useState, useEffect }from 'react'
import { Container,Row } from 'react-bootstrap';
export default function RoundedCategories() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data)
    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("https://noon-ecommerce.herokuapp.com/api/products");
            console.log()
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                console.log(filter)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }
return (

    <Container fluid>
    <Row className=" p-5 bg-white">
<div className="buttons justify-content-center d-flex m-1 -3" >

                    <input onClick={() => filterProduct("men's clothing")}
                        type="image" src="https://k.nooncdn.com/cms/pages/20211130/76d18741396e9239cdab40c73845efb5/en_mb-circle-24.png"
                        alt="Men's"
                    width="150px" height="150px"/>

                    <input onClick={() => filterProduct("men's clothing")}
                        type="image" src="https://k.nooncdn.com/cms/pages/20211130/76d18741396e9239cdab40c73845efb5/en_mb-circle-01.png"
                        alt="Men's" 
                        width="150px" height="150px"/>

                    <input onClick={() => filterProduct("women's clothing")}
                        type="image" src="https://k.nooncdn.com/cms/pages/20211130/76d18741396e9239cdab40c73845efb5/en_mb-circle-02.png"
                        alt="Women's" 
                        width="150px" height="150px"/>

                    <input onClick={() => filterProduct("electronics")}
                        type="image" src="https://k.nooncdn.com/cms/pages/20211130/76d18741396e9239cdab40c73845efb5/en_mb-circle-14.png"
                        alt="Electronics" 
                        width="150px" height="150px"/>

                    <input onClick={() => filterProduct("jewelery")}
                        type="image" src="https://k.nooncdn.com/cms/pages/20211130/76d18741396e9239cdab40c73845efb5/en_mb-circle-25.png"
                        alt="jewelery"
                        width="150px" height="150px" />
                </div>
            </Row>
                </Container>

                );
};