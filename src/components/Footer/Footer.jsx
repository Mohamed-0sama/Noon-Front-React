import React, {useState, useEffect} from "react";
import FooterApps from "./Footer components/FooterApps";
import FooterCategories from "./Footer components/FooterCategories";
import FooterOne from "./Footer components/FooterOne";
import FooterSocialMedia from "./Footer components/FooterSocialMedia";
import FooterThree from "./Footer components/FooterThree";
import "./footer.scss";
import  axios  from 'axios';

export const categoriesContext = React.createContext();

const Footer = () => {
  const [categories, setCategories] = useState(() =>[])
  useEffect(() => {
    axios.get("http://localhost:3000/categories") // why only accepets json server
  .then(function (response) {
    // handle success
    setCategories(response.data.slice(0, 6))
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  // console
    return () => {
      // cleanup
    }
  }, []);
  // const [categories, setCategories] = useState([
  //   {
  //     id: "1",
  //     mainCat: "Electronics",
  //     subCat: ["TV", "computer", "mobiles", "tablet"],
  //     brands: ["TV", "computer", "mobiles", "tablet"],
  //     link: "https://ant.design/components/dropdown",
  //   },
  //   {
  //     id: "2",
  //     mainCat: "clothes",
  //     subCat: ["TV2", "computer2", "mobiles2", "tablet2"],
  //     brands: ["TV3", "computer3", "mobiles3", "tablet3"],  
  //     link: "https://ant.design/components/dropdown",
  //   },
  //   {
  //     id: "3",
  //     mainCat: "Toys",
  //     subCat: ["boy", "girl", "small toys", "big toys", "adult toys"],
  //     brands: ["toys", "toys", "toys", "toys"],
  //     link: "https://ant.design/components/dropdown",
  //   },
  // ]);
  return (
    <div>
      <FooterOne />

      <footer class="py-0 py-md-4">
        <div class="container-fluid">
          {/* <!-- <footer class="py-5"> --> */}
          <categoriesContext.Provider value={categories}>
        <FooterCategories /> 
        </categoriesContext.Provider>
          <div class="row mt-3">
            <div
              class="
              col-md-6
              d-flex
              flex-column
              
              align-items-center
              p-2
            "
            >
              <h6 style={{ fontSize: "14px" }}>SHOP ON THE GO</h6>
              <FooterApps />
            </div>
            <div
              class="
              col-md-6
              d-flex
              flex-column
              justify-content-center
              align-items-center
              p-2
            "
            >
              <h6 style={{ height: "14px" }}>CONNECT WITH US</h6>
             <FooterSocialMedia />
            </div>
          </div>
        </div>
      </footer>

      <FooterThree />
    </div>
  );
};

export default Footer;
