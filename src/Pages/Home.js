import TresureHunt from "../assets/Tresure hunt.png";
import code from "../assets/code.png";
import eventX from "../assets/event x.png";
import gaming from "../assets/gaming.png";
import itmanager from "../assets/it manager.png";
import photography from "../assets/lens a moment.png";
import marithon from "../assets/mariothon web.png";
import uiux from "../assets/ui ux.png";
import vlog from "../assets/vlog.png";

import HomeNavbar from "../Components/HomeNavbar";
export const Home = () => {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <HomeNavbar />
      <div class="container-fluid hero" style={{ backgroundColor: "#18181F" }}>
        <div class="row">
          <div class="col-12">
            <p>
              <h1 class="title">
                Gateways
                <br></br>
                2022
              </h1>
              <div class="content">
                <p>A catchy title</p>
                <div class="btn btn-lg" style={{ backgroundColor: "#CCFF28" }}>
                  Register Now
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <img
                class="card-img-top"
                src="https://schoolofeducationchristuniversity.files.wordpress.com/2014/07/cropped-dsc_0029-1.jpg"
                alt="Card image cap"
              ></img>
              <div class="card-body">
                <h4 class="card-title">CHRIST (Deemed to be University)</h4>
                <p class="card-text">
                  CHRIST (Deemed to be University) was born out of the
                  educational vision of St Kuriakose Elias Chavara, an
                  educationalist and social reformer of the nineteenth century
                  in South India. He founded the first Catholic indigenous
                  congregation, Carmelites of Mary Immaculate (CMI), in 1831
                  which administers CHRIST (Deemed to be University).
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img
                class="card-img-top"
                src="https://christuniversity.in/uploads/userfiles/overviewcomputer.jpg"
                alt="Card image cap"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Department of Computer Science</h5>
                <p class="card-text">
                  The department was established in the year 1990, with a
                  curriculum in line with industry expectations and research.
                  The department also provides opportunities to work on
                  collaborative projects with industry and international
                  universities, faculty expertise in recent technologies and
                  Alumni support are some of the department highlights.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img
                class="card-img-top"
                src="https://christuniversity.in/uploads/userfiles/2(37)(1).png"
                alt="Card image cap"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Gateways 2022</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid" style={{backgroundColor: "#18181F"}}>
          <div class="row">
            <div class="col-12">
              <p>
                <h1
                  class="content-event-new"
                  style={{color: "#fff"}}
                >
                  Events
                </h1>
                <div
                  class="content-event-new"
                  style={{color: "#fff"}}
                >
                  Technical Events
                </div>
              </p>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-2 p-3">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={marithon}
                    alt="Card image cap"
                  ></img>
                  <div class="card-body">
                    <h4 class="card-title">Mariothon</h4>
                    <p class="card-text">content</p>
                    <a href="#" class="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-2 p-3">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={itmanager}
                    alt="Card image cap"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">Geek O Fiesta</h5>
                    <p class="card-text">content</p>
                    <a href="#" class="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-2 p-3">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={code}
                    alt="Card image cap"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">Code Shastra</h5>
                    <p class="card-text">content</p>
                    <a href="#" class="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-2 p-3">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={uiux}
                    alt="Card image cap"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">UI picasso</h5>
                    <p class="card-text">content</p>
                    <a href="#" class="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <p>
                  <div
                    class="content-event-new"
                    style={{color: "#fff"}}
                  >
                    Non Technical Events
                  </div>
                </p>
              </div>
              <div class=" justify-content-center row p-3">
                <div class="col-md-2 p-3">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={TresureHunt}
                      alt="Card image cap"
                    ></img>
                    <div class="card-body">
                      <h4 class="card-title">Lost In Ages</h4>
                      <p class="card-text">content</p>
                      <a href="#" class="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-2 p-3">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={photography}
                      alt="Card image cap"
                    ></img>
                    <div class="card-body">
                      <h5 class="card-title">Lens O Moment</h5>
                      <p class="card-text">content</p>
                      <a href="#" class="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-2 p-3">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={vlog}
                      alt="Card image cap"
                    ></img>
                    <div class="card-body">
                      <h5 class="card-title">Vlogumentary</h5>
                      <p class="card-text">content</p>
                      <a href="#" class="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-2 p-3">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={gaming}
                      alt="Card image cap"
                    ></img>
                    <div class="card-body">
                      <h5 class="card-title">Battle Stars</h5>
                      <p class="card-text">content</p>
                      <a href="#" class="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-2 p-3">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={eventX}
                      alt="Card image cap"
                    ></img>
                    <div class="card-body">
                      <h5 class="card-title">Event X</h5>
                      <p class="card-text">content</p>
                      <a href="#" class="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid" style= {{backgroundColor: "#18181F"}}>
              <div class="row">
                <div class="col-12">
                  <p>
                    <h2 className="content-event-new" style={{color: "#fff"}}>Contact</h2>
                    <div class=" justify-content-center row p-3">
                      <div class="col-md-2 p-3">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title" style={{fontSize: "1.2rem"}}>
                              Dr SHONEY SEBASTIAN
                            </h4>
                            <h5 style={{fontSize: "1rem"}}>
                              MCA Program Coordinator
                            </h5>
                            <a href="tel:+919972372499">
                              <p class="card-text">9972372499</p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-2 p-3">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title" style={{fontSize: "1.2rem"}}>
                              Dr SAGAYA AURELIA P
                            </h4>
                            <h5 style={{fontSize: "1rem"}}>
                              MCA Program Coordinator
                            </h5>
                            <a href="tel:+9113264461">
                              <p class="card-text">9113264461</p>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-2 p-3">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title" style={{fontSize: "1.2rem"}}>
                              Dr NIZAR BANU
                            </h4>
                            <h5 style={{fontSize: "1rem"}}>
                              MCA Program Coordinator
                            </h5>
                            <a href="tel:+919942073476">
                              <p class="card-text">9942073476</p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-2 p-3">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title" style={{fontSize: "1.2rem"}}>
                              Dr KAVITHA R{" "}
                            </h4>
                            <h5 style={{fontSize: "1rem"}}>
                              Gateways Coordinator
                            </h5>
                            <a href="tel:+919980621465">
                              <p class="card-text">9980621465</p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-2 p-3">
                        <div class="card">
                          <div class="card-body">
                            <h4 class="card-title" style={{fontSize: "1.2rem"}}>
                              Dr SENTHILNATHAN T
                            </h4>
                            <h5 style={{fontSize: "1rem"}}>
                              MCA Program Coordinator
                            </h5>
                            <a href="tel:+919865555222">
                              <p class="card-text">9865555222</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
