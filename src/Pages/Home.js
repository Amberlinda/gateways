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
                <p>From pagers to iPhones, when did we all grow up?</p>
                <div class="btn btn-lg" style={{ backgroundColor: "#CCFF28" }}>
                  REGISTER NOW
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>

      <div class="col-12" id="about">
            <p>
              <h1 class="content-event-new" style={{ color: "#000000", marginTop:"4rem" }}>
                About US
              </h1>
              {/* <div class="content-event-new" style={{ color: "#fff" }}>
                Technical Events
              </div> */}
            </p>
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
                CHRIST (Deemed to be University), born out of the vision of St Kuriakose Elias Chavara, and established in 1969, is a multi-disciplinary university offering Bachelor, Master, and Doctoral programmes in humanities, social sciences, science, commerce, management, engineering, education, and law to over 27,000 students.
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
                The Department of Computer Science of CHRIST (Deemed to be University) strives to shape outstanding computer professionals with ethical and human values to reshape the nation's destiny. The training imparted aims to prepare young minds for challenging opportunities in the IT industry.
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
                Gateways is the annual national technical fest held for over 25 years by the Department of Computer Science of CHRIST (Deemed to be University), Bangalore. Helmed by students of the MCA course, it aims to be at the forefront of innovation and collaboration.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid" id="events" style={{ backgroundColor: "#18181F", marginTop: "2rem" }}>
        <div class="row">
          <div class="col-12">
            <p>
              <h1 class="content-event-new" style={{ color: "#fff" }}>
                Events
              </h1>
              <div class="content-event-new" style={{ color: "#fff" }}>
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
                  <p class="card-text">Hackathon? Check. IoT? Check. Crazy idea? Bring yours forward</p>
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
                  <p class="card-text">A race to success against all odds</p>
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-2 p-3">
              <div class="card">
                <img class="card-img-top" src={code} alt="Card image cap"></img>
                <div class="card-body">
                  <h5 class="card-title">Code Shastra</h5>
                  <p class="card-text">Wield your weapons against bugs, go forth with your tools!</p>
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-2 p-3">
              <div class="card">
                <img class="card-img-top" src={uiux} alt="Card image cap"></img>
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
                <div class="content-event-new" style={{ color: "#fff" }}>
                  Non Technical Events
                </div>
              </p>
            </div>
            <div class=" justify-content-center row">
              <div class="col-md-2 p-4">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={TresureHunt}
                    alt="Card image cap"
                  ></img>
                  <div class="card-body">
                    <h4 class="card-title">Lost In Ages</h4>
                    <p class="card-text">Enter, trepid adventurer, to seek your fortune</p>
                    <a href="#" class="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-2 p-4">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={photography}
                    alt="Card image cap"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">Lens O Moment</h5>
                    <p class="card-text">Stay in the moment, by capturing the moment</p>
                    <a href="#" class="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-2 p-4">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={vlog}
                    alt="Card image cap"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">Vlogumentary</h5>
                    <p class="card-text">Vlog your heart out, with a twist from the mind</p>
                    <a href="#" class="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-2 p-4">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={gaming}
                    alt="Card image cap"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">Battle Stars</h5>
                    <p class="card-text">Teams, present your gamers!</p>
                    <a href="#" class="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-2 p-4">
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

          {/* shoney - 9972372499 - mca coordinator
          sagaya - 9113264461 - gateways incharge
          Nizar Banu - 9942073476 - event and cultural incharge
          kavitha - 9980621465 - website and design incharge
          sentilnathan - 9865555222 - finance and sponsor incharge
          Deepa V Jose - 9980076947 - hospitality and magazine incharge

          Gauri Kanodia - 8318085429 - Core committee
          Nikit Khakolia - 9864945505 - Core committee
          Ayushree Chakrabartty - 8102501954 - Core committee
          Arunabha Dutt - 9874317740 - Core committee */}

          <div class="container-fluid" id="contact" style={{ backgroundColor: "#18181F" }}>
            <div class="row justify-content-center">
              <div class="col-12">
                <p>
                  <div class="content-event-new" style={{ color: "#fff" }}>
                    Contact
                  </div>
                </p>
              </div>
              <div class="col-9">
                <p>
                  <div class=" justify-content-center row">
                    <div class="col-md-3 p-5">
                      <div class="card">
                        <div class="card-body">
                          <h4 class="card-title" style={{ fontSize: "1.2rem" }}>
                            Dr SHONEY SEBASTIAN
                          </h4>
                          <h5 style={{ fontSize: "1rem" }}>
                            MCA Program Coordinator
                          </h5>
                          <a href="tel:+919972372499">
                            <p class="card-text">9972372499</p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 p-5">
                      <div class="card">
                        <div class="card-body">
                          <h4 class="card-title" style={{ fontSize: "1.2rem" }}>
                            Dr SAGAYA AURELIA P
                          </h4>
                          <h5 style={{ fontSize: "1rem" }}>
                            Gateways Incharge
                          </h5>
                          <a href="tel:+919113264461">
                            <p class="card-text">9113264461</p>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-3 p-5">
                      <div class="card">
                        <div class="card-body">
                          <h4 class="card-title" style={{ fontSize: "1.2rem" }}>
                            Dr NIZAR BANU
                          </h4>
                          <h5 style={{ fontSize: "1rem" }}>
                            Event And Cultural Incharge
                          </h5>
                          <a href="tel:+919942073476">
                            <p class="card-text">9942073476</p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 p-5">
                      <div class="card">
                        <div class="card-body">
                          <h4 class="card-title" style={{ fontSize: "1.2rem" }}>
                            Dr KAVITHA R
                          </h4>
                          <h5 style={{ fontSize: "1rem" }}>
                            Website And Design Incharge
                          </h5>
                          <a href="tel:+919980621465">
                            <p class="card-text">9980621465</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
              <div class="col-9">
                <p>
                  <div class=" justify-content-center row">
                    <div class="col-md-3 p-5">
                      <div class="card">
                        <div class="card-body">
                          <h4 class="card-title" style={{ fontSize: "1.2rem" }}>
                            Dr SENTILNATHAN
                          </h4>
                          <h5 style={{ fontSize: "1rem" }}>
                            Finance And Sponsor Incharge
                          </h5>
                          <a href="tel:+919865555222">
                            <p class="card-text">9865555222</p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 p-5">
                      <div class="card">
                        <div class="card-body">
                          <h4 class="card-title" style={{ fontSize: "1.2rem" }}>
                            Dr DEEPA V JOSE
                          </h4>
                          <h5 style={{ fontSize: "1rem" }}>
                            hospitality and magazine incharge
                          </h5>
                          <a href="tel:+919980076947">
                            <p class="card-text">9980076947</p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 p-5">
                      <div class="card">
                        <div class="card-body">
                          <h4 class="card-title" style={{ fontSize: "1.2rem" }}>
                            GAURI KANDIA
                          </h4>
                          <h5 style={{ fontSize: "1rem" }}>Core committee</h5>
                          <a href="tel:+918318085429">
                            <p class="card-text">8318085429</p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 p-5">
                      <div class="card">
                        <div class="card-body">
                          <h4 class="card-title" style={{ fontSize: "1.2rem" }}>
                            NIKITH KHAkOLIA
                          </h4>
                          <h5 style={{ fontSize: "1rem" }}>Core committee</h5>
                          <a href="tel:+919864945505">
                            <p class="card-text">9864945505</p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 p-5">
                      <div class="card">
                        <div class="card-body">
                          <h4 class="card-title" style={{ fontSize: "1.2rem" }}>
                            AYUSHREE CHAKRABARTTY
                          </h4>
                          <h5 style={{ fontSize: "1rem" }}>Core committee</h5>
                          <a href="tel:+918102501954">
                            <p class="card-text">8102501954</p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 p-5">
                      <div class="card">
                        <div class="card-body">
                          <h4 class="card-title" style={{ fontSize: "1.2rem" }}>
                            ARUNABHA DUTT
                          </h4>
                          <h5 style={{ fontSize: "1rem" }}>Core committee</h5>
                          <a href="tel:+919874317740">
                            <p class="card-text">9874317740</p>
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
