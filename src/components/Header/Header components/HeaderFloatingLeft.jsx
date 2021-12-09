// floating left categories which contain the div of All CATEGORIES button when mouseOver
// 1- the div of All CATEGORIES button => all categories + top brands + most popular

import React, {useContext/*, useState*/} from 'react'
import { Link } from 'react-router-dom';
import { categoriesContext, subCatChangedContext, xContext } from '../Header';
import { /*myBrandContext,*/ myMainCatContext, setMyBrandContext, setMyMainCatContext, setMySubCatContext/*, mySubCatContext*/ }from './../../../pages/Home';
// import { mySubCatContext } from './../../../pages/Home';
import { myQueryContext, SetMyQueryContext } from './../../../pages/Home';
const HeaderFloatingLeft = () => {
  
    const categories = useContext(categoriesContext)
    const subCatChanged = useContext(subCatChangedContext)
    const x = useContext(xContext)
    const myMainCat = useContext(myMainCatContext)
    const setMyMainCat = useContext(setMyMainCatContext)
    //const mySubCat = useContext(mySubCatContext)
    const setMySubCat = useContext(setMySubCatContext)
    //const myBrand = useContext(myBrandContext)
    const setMyBrand = useContext(setMyBrandContext)
    const myQuery = useContext(myQueryContext)
    const setMyQuery = useContext(SetMyQueryContext)

    // const [myQuery, setMyQuery] = useState("")
    const query = (id)=>{
       setMyQuery(id)
        console.log(myQuery)
    }
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
                      <Link className="nav-link" to={`/Home/category/${cat.mainCat}`} onClick={() => {setMyMainCat(cat.mainCat);
                      query("category")
                      }}>
                        {cat.mainCat}
                        {console.log(myMainCat)}
                      </Link>
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
                                      <Link className="nav-link" to={`/Home/search?category=${cat.mainCat}&subCat=${subCategory}`} onClick={() => {setMySubCat(subCategory);
                                      query("subCat")
                                      }}>
                                        {subCategory}
                                      </Link>
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
                                console.log(cat)
                                return (
                                  <>
                                    <li
                                      className="nav-item"
                                    //   ref={elemRef_subCat}
                                    >
                                      <Link className="nav-link" to={`/Home/search?category=${cat.mainCat}&brand=${brand}`} onClick={() => {setMyBrand(brand);
                                      query("brands")
                                      }}>
                                        {brand}
                                      </Link>
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
