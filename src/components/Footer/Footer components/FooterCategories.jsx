import React, {useContext} from 'react'
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
                <h6 class="mt-3">{category.mainCat}</h6>
                <ul class="nav flex-column" style={{ fontSize: "13px" }}>
                  {category.subCat.map((subCategory)=>{
                    return(
                      <>
                      <li class="nav-item mb-2">
                  <a href="#home" class="nav-link p-0 text-muted">
                    {subCategory}
                  </a>
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
