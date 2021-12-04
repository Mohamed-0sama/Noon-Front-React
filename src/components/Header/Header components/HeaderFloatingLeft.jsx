// floating left categories which contain the div of All CATEGORIES button when mouseOver
// 1- the div of All CATEGORIES button => all categories + top brands + most popular

import React, {useContext} from 'react'
import { categoriesContext, subCatChangedContext, xContext } from '../Header';
const HeaderFloatingLeft = () => {
    const categories = useContext(categoriesContext)
    const subCatChanged = useContext(subCatChangedContext)
    const x = useContext(xContext)
    return (
        <>
           <div className="dropdown d-none d-lg-block">
            <a
              className="btn dropdown-toggle a_cat"
              id="dropdownMenuLink"
              href="https://ant.design/components/dropdown"
            >
              ALL CATEGORIES
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              {categories.map((cat) => {
                return (
                  <>
                    <li
                      className="nav-item text-start"
                      onMouseOver={() => subCatChanged(cat.id)}
                    >
                      <a className="nav-link" href={cat.link}>
                        {cat.mainCat}
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
            <div className="dropdownDiv">
              <div className="dropdownDivOne"></div>
              <div className="dropdownDivTwo">
                {/* <h4>{ categories[x - 1].mainCat}</h4> */}
                <hr className="m-2" />
                <div className="d-flex">
                  <div className="w-50">
                    <h6 className="text-start ms-3">Most Popular</h6>
                    {/* All Catogories => subCategories */}
                    <ul className="nav flex-column align-items-start">
                      {categories.map((cat) => {
                        // console.log(cat.id);
                        return (
                          <>
                            {cat.id === x &&
                              cat.subCat.map((subCategory) => {
                                return (
                                  <>
                                    <li
                                      className="nav-item"
                                    //   ref={elemRef_subCat}
                                    >
                                      <a className="nav-link" href={cat.link}>
                                        {subCategory}
                                      </a>
                                    </li>
                                  </>
                                );
                              })}
                          </>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="w-50">
                    <h6 className="text-start ms-3">Top Brands</h6>
                    <ul className="nav flex-column align-items-start">
                      {categories.map((cat) => {
                        // console.log(cat.id);
                        return (
                          <>
                            {cat.id === x &&
                              cat.brands.map((brand) => {
                                return (
                                  <>
                                    <li
                                      className="nav-item"
                                    //   ref={elemRef_subCat}
                                    >
                                      <a className="nav-link" href={cat.link}>
                                        {brand}
                                      </a>
                                    </li>
                                  </>
                                );
                              })}
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </>
    )
}

export default HeaderFloatingLeft
