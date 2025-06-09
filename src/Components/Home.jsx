import React from "react";
import "./css/responsive.css";
import "./css/style.css";
import "./css/bootstrap.css";

export default function Home() {
  return (
    <div>
      <div className="hero_area">
        <section className=" slider_section position-relative">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="box">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="detail-box">
                          <div>
                            <h1>Agricultural Data</h1>
                            <h4>
                              Agricultural data related to Sabaragamuwa
                              Province.
                            </h4>
                            <div className="">
                              <a href="">View</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="img-box">
                          <img src="./Assets/homePage/plant.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="box">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="detail-box">
                          <div>
                            <h1>Animal Data</h1>
                            <h4>
                              Animal data related to Sabaragamuwa Province.
                            </h4>
                            <div className="">
                              <a href="">View</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="img-box">
                          <img src="./Assets/homePage/cow.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="how_section layout_padding">
        <div className="heading_container">
          <h2>Articles</h2>
        </div>
        <div className="how_container">
          <a href="#">
            <div className="box">
              <div className="img-box">
                <img
                  src="../Assets/homePage/harvest.png"
                  style={{ height: "512", width: "512" }}
                />
              </div>
              <div className="detail-box">
                <h5>Agricultural Articles</h5>
                <p>
                  Read the latest articles published on agriculture and farming
                  in Sabaragamuwa Province.
                </p>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="box">
              <div className="img-box">
                <img src="../Assets/homePage/livestock.png" />
              </div>
              <div className="detail-box">
                <h5>Animal and Farm Articles</h5>
                <p>
                  Read the latest articles published on animal production and
                  health in Sabaragamuwa Province.
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>

      <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
      <script type="text/javascript" src="js/bootstrap.js"></script>
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
      ></script>
      {/* 
 <script type="text/javascript">
   $(".owl-carousel").owlCarousel({
     loop: true,
     margin: 0,
     navText: [],
     center: true,
     autoplay: true,
     autoplayHoverPause: true,
     responsive: {
       0: {
         items: 1
       },
       1000: {
         items: 3
       }
     }
   });
 </script> */}
    </div>
  );
}
