import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <form className="frame-form">
        <div className="frame-wrapper2">
          <div className="log-in-to-your-company-system-parent">
            <b className="log-in-to">Log in to your Company system</b>
            <b className="enter-your-credentials">
              Enter your credentials to log in to your account
            </b>
          </div>
        </div>
        <form className="log-in-to-your-company-system-parent" method="post">
          <Form.Group className="your-email-parent">
            <Form.Label>Your email</Form.Label>
            <Form.Control type="text" placeholder="Input placeholder" />
          </Form.Group>
          <div className="frame-parent5">
            <Form.Group className="your-email-parent">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" placeholder="Input placeholder" />
            </Form.Group>
            <div className="i-have-trouble-with-my-login-wrapper">
              <div className="i-have-trouble">I have trouble with my login</div>
            </div>
          </div>
          <Button className="frame-item" variant="primary">
            Log in
          </Button>
        </form>
        <div className="remix-iconslinelogosproduct-parent">
          <img
            className="remix-iconslinelogosproduct"
            alt=""
            src="/remixiconslinelogosproducthuntline.svg"
          />
          <div className="you-are-acompany-register-now-wrapper">
            <Link className="you-are-acompany-container" to="/">
              <span className="you-are-acompany">{`You are acompany! `}</span>
              <b className="b">{` `}</b>
              <b className="b">
                <span className="register-now1">Register Now</span>
              </b>
            </Link>
          </div>
        </div>
      </form>
      <div className="component-41">
        <div className="component-4-child7" />
        <img className="component-4-child8" alt="" src="/group-117.svg" />
        <div className="logo-select1" />
        <img
          className="logo-full-colour-icon1"
          alt=""
          src="/logofullcolour1.svg"
        />
        <img className="profile-icon1" alt="" src="/profile@2x.png" />
        <div className="component-4-child9" />
        <div className="component-4-child10" />
        <div className="component-4-child11" />
        <div className="component-4-child12" />
        <div className="component-4-child13" />
        <div className="component-4-child14" />
        <img className="d-box-icon1" alt="" src="/3d-box.svg" />
        <img className="vector-icon3" alt="" src="/vector3.svg" />
        <img className="component-4-child15" alt="" src="/group-7.svg" />
        <img className="vector-icon4" alt="" src="/vector1.svg" />
        <img className="group-icon5" alt="" src="/group.svg" />
        <img className="group-icon6" alt="" src="/group1.svg" />
        <div className="component-4-child16" />
        <b className="search1">Search</b>
        <b className="privacy-mode1">Privacy Mode</b>
        <b className="von-payumo1">Von Payumo</b>
        <img className="group-icon7" alt="" src="/group2.svg" />
        <img className="component-4-child17" alt="" src="/group-8.svg" />
        <img className="group-icon8" alt="" src="/group3.svg" />
        <img className="track-icon1" alt="" src="/track.svg" />
        <img className="knob-icon1" alt="" src="/knob.svg" />
        <img className="vector-icon5" alt="" src="/vector2.svg" />
      </div>
      <img className="mask-group-icon1" alt="" src="/mask-group1@2x.png" />
      <div className="macbook-pro-17-parent">
        <div className="macbook-pro-17">
          <img
            className="macbook-pro-16-icon"
            alt=""
            src="/macbookpro16@2x.png"
          />
          <input className="mockup" type="file" />
        </div>
        <div
          className="frame-parent6"
          id="addedToday"
          appraisalAdded="appraisalAdded"
        >
          <div className="parent">
            <b className="go-to-appraisals">32</b>
            <div className="appraisal-added-today">Appraisal added today</div>
            <div className="check-the-appraisal-container">
              <p className="check-the-appraisal">{`Check the appraisal and `}</p>
              <p className="check-the-appraisal">{`give it your offers `}</p>
            </div>
          </div>
          <div className="frame-wrapper3">
            <div className="go-to-appraisals-wrapper">
              <b className="go-to-appraisals">Go to Appraisals</b>
            </div>
          </div>
        </div>
        <div className="widget">
          <div className="frame-parent7">
            <div className="remix-iconslinebusinessawar-wrapper">
              <img
                className="remix-iconslinebusinessawar"
                alt=""
                src="/remixiconslinebusinessawardline.svg"
              />
            </div>
            <div className="group">
              <div className="div">450</div>
              <div className="total-service-writer">Total Won</div>
              <div className="progresse-bar">
                <div className="progresse-bar-child" />
              </div>
            </div>
          </div>
          <img className="remix-iconsfillsystemmore-f" alt="" />
        </div>
        <div className="widget1">
          <div className="frame-parent8">
            <div className="remix-iconslinebusinessawar-wrapper">
              <img
                className="remix-iconslinebusinessawar"
                alt=""
                src="/remixiconslinemapcarline.svg"
              />
            </div>
            <div className="container">
              <div className="div">123</div>
              <div className="total-service-writer">Total Appraisals</div>
              <div className="progresse-bar1">
                <div className="progresse-bar-item" />
              </div>
            </div>
          </div>
          <img className="remix-iconsfillsystemmore-f" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
