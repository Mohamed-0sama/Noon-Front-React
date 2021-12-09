import React from 'react'

const FooterApps = () => {
  const imagesUrl = "https://noon-ecommerce.herokuapp.com/images/"

    return (
        <>
            <div className="d-flex flex-column flex-sm-row">
                <a href="#home" className="me-0 me-sm-2">
                  <img
                  src={imagesUrl+'app-store.svg'}
                    // src="images/footer/app-store.svg"
                    style={{ height: "36px" }}
                    alt="Home"
                  />
                </a>
                <a href="#home" className="mt-2 mt-sm-0">
                  <img
                   src={imagesUrl+'google-play.svg'}
                    // src="images/footer/google-play.svg"
                    style={{ height: "36px" }}
                    alt="Home"
                  />
                </a>
              </div>
        </>
    )
}

export default FooterApps
