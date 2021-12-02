import React from 'react'

const FooterApps = () => {
    return (
        <>
            <div class="d-flex flex-column flex-sm-row">
                <a href="#home" class="me-0 me-sm-2">
                  <img
                    src="images/footer/app-store.svg"
                    style={{ height: "36px" }}
                    alt="Home"
                  />
                </a>
                <a href="#home" class="mt-2 mt-sm-0">
                  <img
                    src="images/footer/google-play.svg"
                    style={{ height: "36px" }}
                    alt="Home"
                  />
                </a>
              </div>
        </>
    )
}

export default FooterApps
