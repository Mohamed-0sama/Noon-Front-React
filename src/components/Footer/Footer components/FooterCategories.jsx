import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { categoriesContext } from '../Footer'
const FooterCategories = () => {
    const categories = useContext(categoriesContext)
    return (
        <>
              <div
            className="row m-auto"
            style={{ padding: "20px", textAlign: "start" }}
          >
            <div className="row d-flex">
              {categories.map(category =>{
                return (
                <>
                <div className="col-lg-2 col-md-4 col-sm-6">
                <Link to={`/Home/category/${category.mainCat}`}>
                <h6 className="mt-3">{category.mainCat}</h6>
                </Link>
                <ul className="nav flex-column" style={{ fontSize: "13px" }}>
                  {category.subCat.map((subCategory)=>{
                    return(
                      <>
                      <li className="nav-item mb-2">
                  <Link to={`/Home/search?category=${category.mainCat}&subCat=${subCategory}`} className="nav-link p-0 text-muted">
                    {subCategory}
                  </Link>
                  </li>
                      </>
                    )
                  })}
                </ul>
                </div>
                </>)
              })}             
            </div>

            
          </div>
        </>
    )
}

export default FooterCategories
