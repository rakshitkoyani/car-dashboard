import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Dropdown,
  DropdownButton,
  SplitButton,
  Button,
} from "react-bootstrap";
import "./Appraisals.css";

const Appraisals = () => {
  return (
    <div className="appraisals">
      <div className="component-42">
        <div className="component-4-child18" />
        <img className="component-4-child19" alt="" src="/group-1171.svg" />
        <div className="logo-select2" />
        <img
          className="logo-full-colour-icon2"
          alt=""
          src="/logofullcolour2.svg"
        />
        <img className="profile-icon2" alt="" src="/profile@2x.png" />
        <div className="component-4-child20" />
        <div className="component-4-child21" />
        <div className="component-4-child22" />
        <div className="component-4-child23" />
        <div className="component-4-child24" />
        <div className="component-4-child25" />
        <img className="d-box-icon2" alt="" src="/3d-box.svg" />
        <img className="vector-icon6" alt="" src="/vector4.svg" />
        <img className="component-4-child26" alt="" src="/group-71.svg" />
        <img className="vector-icon7" alt="" src="/vector1.svg" />
        <img className="group-icon9" alt="" src="/group4.svg" />
        <img className="group-icon10" alt="" src="/group1.svg" />
        <div className="component-4-child27" />
        <b className="search2">Search</b>
        <b className="privacy-mode2">Privacy Mode</b>
        <b className="von-payumo2">Von Payumo</b>
        <img className="group-icon11" alt="" src="/group2.svg" />
        <img className="component-4-child28" alt="" src="/group-81.svg" />
        <img className="group-icon12" alt="" src="/group5.svg" />
        <img className="track-icon2" alt="" src="/track1.svg" />
        <img className="knob-icon2" alt="" src="/knob1.svg" />
        <img className="vector-icon8" alt="" src="/vector5.svg" />
      </div>
      <main className="frame-main" id="appraisals">
        <div className="frame-parent9">
          <div className="appraisals-parent">
            <h3 className="date-filter" id="appraisals">
              Appraisals
            </h3>
            <p
              className="in-total-there-is-344-active-u-wrapper"
              id="totalActiveUsers"
            >
              <div className="in-total-there-container">
                <span>{`In total there is `}</span>
                <span className="span1">{`344 `}</span>
                <span>active user</span>
              </div>
            </p>
          </div>
          <div className="this-month-parent">
            <div className="this-month">This month</div>
            <img className="remix-iconslinesystemarrow-" alt="" />
          </div>
        </div>
        <div className="frame-parent10">
          <div className="frame-parent11">
            <Form.Group className="search-parent">
              <Form.Label>{`Search `}</Form.Label>
              <Form.Control type="search" placeholder="Input placeholder" />
            </Form.Group>
            <div className="date-filter-parent">
              <h5 className="date-filter">Date filter</h5>
              <img
                className="remix-iconslinebusinesscale"
                alt=""
                src="/remixiconslinebusinesscalendar2line.svg"
              />
            </div>
          </div>
          <section className="table-content-wrapper" id="vehicles">
            <div className="table-content">
              <div className="column-header">
                <DropdownButton
                  className="table-token"
                  title="Vehicle"
                  variant="primary"
                  align="start"
                  drop="down"
                >{` `}</DropdownButton>
                <div className="table-token1">
                  <p className="name">VIN Number</p>
                  <img
                    className="remix-iconslinesystemarrow-"
                    alt=""
                    src="/remixiconsfillsystemarrowdownsfill.svg"
                  />
                </div>
                <div className="table-token1">
                  <p className="name">Subnited Date</p>
                  <img
                    className="remix-iconslinesystemarrow-"
                    alt=""
                    src="/remixiconsfillsystemarrowdownsfill1.svg"
                  />
                </div>
                <div className="table-token1">
                  <p className="name">Status</p>
                  <div className="remix-iconslinesystemarrow-">
                    <img className="group-icon13" alt="" src="/group6.svg" />
                  </div>
                </div>
                <div className="table-token1">
                  <p className="name">Offer Amount</p>
                  <img
                    className="remix-iconslinesystemarrow-"
                    alt=""
                    src="/remixiconsfillsystemarrowdownsfill2.svg"
                  />
                </div>
                <div className="table-token5">
                  <div className="in-total-there-container">Added by</div>
                  <img
                    className="remix-iconslinesystemarrow-"
                    alt=""
                    src="/remixiconsfillsystemarrowdownsfill3.svg"
                  />
                </div>
                <div className="table-token6">
                  <p className="name">Action</p>
                  <img
                    className="remix-iconsfillsystemarrow-5"
                    alt=""
                    src="/remixiconsfillsystemarrowdownsfill4.svg"
                  />
                </div>
              </div>
              <div className="column">
                <div className="table-token7">
                  <img
                    className="table-token-child"
                    alt=""
                    src="/rectangle-52@2x.png"
                  />
                  <div className="car-name">Lamborghini Urus 22</div>
                </div>
                <div className="table-token8">
                  <div className="this-month">012921097</div>
                </div>
                <div className="table-token8">
                  <p className="user-name1">October 25, 2019</p>
                </div>
                <div className="table-token10">
                  <label className="tag" id="won">
                    <div className="offer-won">Offer Won</div>
                  </label>
                </div>
                <div className="table-token8">
                  <p className="user-name1">$ 1,677.42</p>
                </div>
                <div className="table-token12">
                  <img
                    className="table-token-item"
                    alt=""
                    src="/ellipse-26@2x.png"
                  />
                  <div className="user-name3">Theresa Webb</div>
                </div>
                <div className="table-token13">
                  <img
                    className="remix-iconslinesystemarrow-"
                    alt=""
                    src="/remixiconslinesystemdeletebinline.svg"
                  />
                  <img
                    className="remix-iconsfillsystemmore-2"
                    alt=""
                    src="/remixiconsfillsystemmore2fill.svg"
                  />
                </div>
              </div>
              <div className="column1">
                <div className="table-token7">
                  <img
                    className="table-token-child"
                    alt=""
                    src="/rectangle-521@2x.png"
                  />
                  <div className="this-month">
                    Lancia Delta Integrale ex Works, Unique
                  </div>
                </div>
                <div className="table-token8">
                  <div className="this-month">BA9212320</div>
                </div>
                <div className="table-token8">
                  <div className="this-month">August 24, 2013</div>
                </div>
                <div className="table-token17">
                  <label className="tag1" htmlFor="rejected">
                    <div className="offer-won">Rejected</div>
                  </label>
                </div>
                <div className="table-token8">
                  <p className="user-name1">$ 1,754.46</p>
                </div>
                <div className="table-token12">
                  <img
                    className="table-token-item"
                    alt=""
                    src="/ellipse-261@2x.png"
                  />
                  <div className="user-name3">Eleanor Pena</div>
                </div>
                <div className="table-token13">
                  <img
                    className="remix-iconslinesystemarrow-"
                    alt=""
                    src="/remixiconslinesystemdeletebinline1.svg"
                  />
                  <img
                    className="remix-iconsfillsystemmore-2"
                    alt=""
                    src="/remixiconsfillsystemmore2fill1.svg"
                  />
                </div>
              </div>
              <div className="column2">
                <div className="table-token7">
                  <img
                    className="table-token-child"
                    alt=""
                    src="/rectangle-522@2x.png"
                  />
                  <div className="this-month">
                    1957 Hillman Minx Touring Saloon
                  </div>
                </div>
                <div className="table-token8">
                  <div className="this-month">SD9212969</div>
                </div>
                <div className="table-token8">
                  <div className="this-month">April 28, 2016</div>
                </div>
                <div className="table-token17">
                  <label className="tag2" htmlFor="new">
                    <div className="offer-won">New</div>
                  </label>
                </div>
                <div className="table-token8">
                  <p className="user-name1">$ 6,223.07</p>
                </div>
                <div className="table-token12">
                  <img
                    className="table-token-item"
                    alt=""
                    src="/ellipse-262@2x.png"
                  />
                  <div className="user-name3">Cameron Williamson</div>
                </div>
                <div className="table-token13">
                  <img
                    className="remix-iconslinesystemarrow-"
                    alt=""
                    src="/remixiconslinesystemdeletebinline2.svg"
                  />
                  <Form.Select className="remix-iconsfillsystemmore-2-formselect" />
                </div>
              </div>
              <div className="column3">
                <div className="table-token7">
                  <img
                    className="table-token-child"
                    alt=""
                    src="/rectangle-523@2x.png"
                  />
                  <div className="this-month">
                    Mitsubishi Lancer Evo Berg Monster
                  </div>
                </div>
                <div className="table-token8">
                  <div className="this-month">BA9212320</div>
                </div>
                <div className="table-token8">
                  <div className="this-month">November 28, 2015</div>
                </div>
                <div className="table-token17">
                  <label className="tag3" htmlFor="pending">
                    <label className="pending">Pending</label>
                  </label>
                </div>
                <div className="table-token8">
                  <p className="user-name1">$ 2,903.92</p>
                </div>
                <div className="table-token12">
                  <img
                    className="table-token-item"
                    alt=""
                    src="/ellipse-263@2x.png"
                  />
                  <div className="user-name3">Wade Warren</div>
                </div>
                <div className="table-token13">
                  <img
                    className="remix-iconslinesystemarrow-"
                    alt=""
                    src="/remixiconslinesystemdeletebinline3.svg"
                  />
                  <img
                    className="remix-iconsfillsystemmore-2"
                    alt=""
                    src="/remixiconsfillsystemmore2fill2.svg"
                  />
                </div>
              </div>
              <div className="column4">
                <div className="table-token7">
                  <img
                    className="table-token-child"
                    alt=""
                    src="/rectangle-524@2x.png"
                  />
                  <div className="this-month">Lotus 51 FF1600</div>
                </div>
                <div className="table-token8">
                  <div className="this-month">KH9212924</div>
                </div>
                <div className="table-token8">
                  <div className="this-month">May 12, 2019</div>
                </div>
                <div className="table-token10">
                  <label className="tag4" htmlFor="won">
                    <div className="offer-won">Offer Won</div>
                  </label>
                </div>
                <div className="table-token8">
                  <div className="this-month">$ 3,077.74</div>
                </div>
                <div className="table-token12">
                  <img
                    className="table-token-item"
                    alt=""
                    src="/ellipse-264@2x.png"
                  />
                  <div className="user-name3">Guy Hawkins</div>
                </div>
                <div className="table-token13">
                  <img
                    className="remix-iconslinesystemarrow-"
                    alt=""
                    src="/remixiconslinesystemdeletebinline4.svg"
                  />
                  <img
                    className="remix-iconsfillsystemmore-2"
                    alt=""
                    src="/remixiconsfillsystemmore2fill3.svg"
                  />
                </div>
              </div>
              <img
                className="remix-iconslinesystemzoom-i"
                alt=""
                src="/remixiconslinesystemzoominline.svg"
              />
            </div>
          </section>
        </div>
      </main>
      <nav className="nav" id="sideNavbar">
        <div className="dash-token">
          <div className="remix-iconslinesystemdashbo">
            <img className="group-icon13" alt="" src="/group7.svg" />
          </div>
          <p className="dashboard">Dashboard</p>
        </div>
        <Button className="dash-token1" variant="outline-secondary">
          Appraisals
        </Button>
        <div className="dash-tokenvariant3">
          <img
            className="remix-iconslinedocumentfile"
            alt=""
            src="/remixiconslinedocumentfilechartline.svg"
          />
          <div className="dash-tokenvariant3-child" />
          <div className="dashboard1">Reports</div>
        </div>
        <Button className="nav-child" variant="outline-secondary">
          Logout
        </Button>
      </nav>
      <header className="frame-header" id="topHeader">
        <img className="frame-inner" alt="" src="/frame-3123@2x.png" />
        <Form.Group className="search-for-a-car-or-a-model-parent">
          <Form.Label>Search for a car or a model</Form.Label>
          <Form.Control type="search" placeholder="Input placeholder" />
        </Form.Group>
        <section className="frame-section" id="headerRight">
          <Button variant="danger">New Appraisal</Button>
          <img className="frame-icon" alt="" src="/frame-3084@2x.png" />
          <aside className="ellipse-parent">
            <img className="frame-child1" alt="" src="/ellipse-23@2x.png" />
            <div className="meddour-m-lamine-parent">
              <h5 className="date-filter" id="loginUserName">
                Meddour M. Lamine
              </h5>
              <img
                className="remix-iconslinesystemarrow-"
                alt=""
                src="/remixiconslinesystemarrowdropdownline.svg"
              />
            </div>
          </aside>
        </section>
      </header>
    </div>
  );
};

export default Appraisals;
