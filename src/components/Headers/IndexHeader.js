/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Container, Button } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter">
        <div
          className="section section-signup page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            minHeight: "700px",
          }}
          
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/udg.png")}
            ></img>
            <h1 className="h1-seo">Programación para Internet</h1>
            <h3>Proyecto 1: Landing Page.</h3>
            <h6>Luis Angel Zacarias Magaña</h6>
            <Button
              className="btn-round"
              color="default"
              to="/profile-page"
              tag={Link}
            >
              Ve mi Perfil completo
            </Button>
          </div>
          <h6 className="category category-absolute">
            Sitio presentado con propositos academicos. 
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
