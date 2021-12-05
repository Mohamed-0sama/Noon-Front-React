import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { categoriesContext } from '../Footer'
const FooterCategories = () => {
    const categories = useContext(categoriesContext)
    return (
        <>
              <div
            class="row m-auto"
            style={{ padding: "20px", textAlign: "start" }}
          >
            <div class="row d-flex">
              {categories.map(category =>{
                return (
                <>
                <div class="col-lg-2 col-md-4 col-sm-6">
                <Link to={`/Home/category/${category.mainCat}`}>
                <h6 class="mt-3">{category.mainCat}</h6>
                </Link>
                <ul class="nav flex-column" style={{ fontSize: "13px" }}>
                  {category.subCat.map((subCategory)=>{
                    return(
                      <>
                      <li class="nav-item mb-2">
                  <Link to={`/Home/search?category=${category.mainCat}&subCat=${subCategory}`} class="nav-link p-0 text-muted">
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
