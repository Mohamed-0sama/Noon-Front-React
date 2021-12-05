import React, {useContext} from 'react'
import { categoriesContext, subCatChangedContext, xContext, mouseOverContext, mouseOutContext, elemRef_show__categoriesContext } from '../Header';

    
const HeaderFloatingShowCategories = () => {
  const imagesUrl = "https://noon-ecommerce.herokuapp.com/images/"
    const categories = useContext(categoriesContext)
    const subCatChanged = useContext(subCatChangedContext)
    const x = useContext(xContext)
    const mouseOver = useContext(mouseOverContext)
    const mouseOut = useContext(mouseOutContext)
    const elemRef_show__categories = useContext(elemRef_show__categoriesContext)
    return (
        <>
             <div
            ref={elemRef_show__categories}
            className="show__categories container-fluid "
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          >
            <div className="row" style={{ flex: 1 }}>
              <div className="col-2">
                <h6>CATEGORIES</h6>
                <ul className="nav flex-column align-items-start">
                  {categories.map((cat) => {
                    // console.log(cat.id);
                    return (
                      <>
                        {cat.id === x &&
                          cat.subCat.map((subCategory) => {
                            // console.log(subCategory);
                            return (
                              <>
                                <li className="nav-item text-start">
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
              <div className="col-4">
                <h6>TOP BRANDS</h6>
                <div>
                  <ul className="photos">
                    {/* showCategories brand Images */}
                    {categories.map((cat) => {
                      return (
                        <>
                          {cat.id === x &&
                            cat.brandsImg.map((brandImg) => {
                              // console.log(brandImg);
                              return (
                                <>
                                  <li className="nav-item">
                                    <a className="nav-link" href={cat.link}>
                                      <img
                                        src={imagesUrl+brandImg} // works fine
                                        // src={imagesUrl+'2.jpg'}
                                        className="img-fluid"
                                        alt="brand img"
                                      />
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
              <div className="col-6">
                <div className="last2__photos" style={{maxHeight:"350px"}}>
                  {/* <div> */}
                  {/* <ul> */}
                  {/* showCategories brand Images */}
                  {categories.map((cat) => {
                    // console.log(cat.id);
                    return (
                      <>
                        {cat.id === x &&
                          cat.catImg.map((catImg) => {
                            // console.log(catImg);
                            return (
                              <>
                                {/* <li
                                      className="nav-item"
                                      
                                    > */}
                                <div>
                                  <a className="nav-link h-100" href={cat.link}>
                                    <img
                                       src={imagesUrl+catImg}
                                      className="img-fluid h-100"
                                      alt="cat img"
                                    />
                                  </a>
                                </div>
                                {/* </li> */}
                              </>
                            );
                          })}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default HeaderFloatingShowCategories
