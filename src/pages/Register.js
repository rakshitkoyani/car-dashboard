import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <img className="register-child" alt="" src="/vector-21.svg" />
      <img className="register-item" alt="" src="/vector-22.svg" />
      <img className="register-inner" alt="" src="/vector-23.svg" />
      <div className="component-4">
        <div className="component-4-child" />
        <img className="component-4-item" alt="" src="/group-117.svg" />
        <div className="logo-select" />
        <img
          className="logo-full-colour-icon"
          alt=""
          src="/logofullcolour.svg"
        />
        <img className="profile-icon" alt="" src="/profile@2x.png" />
        <div className="component-4-inner" />
        <div className="rectangle-div" />
        <div className="component-4-child1" />
        <div className="component-4-child2" />
        <div className="component-4-child3" />
        <div className="component-4-child4" />
        <img className="d-box-icon" alt="" src="/3d-box.svg" />
        <img className="vector-icon" alt="" src="/vector.svg" />
        <img className="group-icon" alt="" src="/group-7.svg" />
        <img className="vector-icon1" alt="" src="/vector1.svg" />
        <img className="group-icon1" alt="" src="/group.svg" />
        <img className="group-icon2" alt="" src="/group1.svg" />
        <div className="component-4-child5" />
        <b className="search">Search</b>
        <b className="privacy-mode">Privacy Mode</b>
        <b className="von-payumo">Von Payumo</b>
        <img className="group-icon3" alt="" src="/group2.svg" />
        <img className="component-4-child6" alt="" src="/group-8.svg" />
        <img className="group-icon4" alt="" src="/group3.svg" />
        <img className="track-icon" alt="" src="/track.svg" />
        <img className="knob-icon" alt="" src="/knob.svg" />
        <img className="vector-icon2" alt="" src="/vector2.svg" />
      </div>
      <div className="frame-parent" id="register" register="register">
        <h2 className="frame-wrapper">
          <div className="create-an-account-in-company-s-wrapper">
            <b className="create-an-account">{`Create an account in Company System `}</b>
          </div>
        </h2>
        <div className="frame-group">
          <h5 className="please-make-sure-to-fill-in-al-wrapper">
            <b className="please-make-sure">
              Please make sure to fill in all the required fields to complete
              your registration.
            </b>
          </h5>
          <div className="frame-container">
            <label className="your-workspace-wrapper" htmlFor="workspace" form>
              <div className="your-workspace">{`Your workspace `}</div>
            </label>
            <div className="ilusso-group-nc-parent">
              <Form.Group className="ilusso-group-nc-container">
                <Form.Label>Ilusso Group NC</Form.Label>
                <Form.Control type="text" placeholder="Input placeholder" />
              </Form.Group>
              <img
                className="mask-group-icon"
                alt=""
                src="/mask-group@2x.png"
              />
            </div>
            <b className="you-are-invited-by-manager-to-wrapper">
              <div className="you-are-invited-container">
                <span className="you-are-invited">
                  You are invited by manager to join this space
                </span>
                <b className="know-more"> know more</b>
              </div>
            </b>
          </div>
          <div className="frame-container">
            <label className="your-workspace-wrapper" htmlFor="Position" form>
              <div className="your-workspace">Position</div>
            </label>
            <Form.Group className="salesman-parent">
              <Form.Label>Salesman</Form.Label>
              <Form.Control type="text" placeholder="Input placeholder" />
            </Form.Group>
          </div>
          <div className="frame-container">
            <label className="your-workspace-wrapper" htmlFor="fullName">
              <div className="your-workspace">Full Name</div>
            </label>
            <Form.Group className="salesman-parent">
              <Form.Label>Mohamed L. Meddour</Form.Label>
              <Form.Control type="text" placeholder="Input placeholder" />
            </Form.Group>
          </div>
          <div className="frame-container">
            <label className="your-workspace-wrapper" htmlFor="email">
              <div className="your-workspace">Email</div>
            </label>
            <Form.Group className="salesman-parent">
              <Form.Label>Exemple@email.com</Form.Label>
              <Form.Control type="email" placeholder="Input placeholder" />
            </Form.Group>
          </div>
          <div className="frame-container">
            <label className="your-workspace-wrapper" htmlFor="password">
              <div className="your-workspace">
                <span>{`Create your own Password `}</span>
                <span className="span">*</span>
              </div>
            </label>
            <Form.Group className="salesman-parent">
              <Form.Label>|Ex: Exemole@email.com</Form.Label>
              <Form.Control type="password" placeholder="Input placeholder" />
            </Form.Group>
          </div>
          <Button className="frame-child" variant="danger">
            Create account
          </Button>
        </div>
        <div className="frame-wrapper1">
          <div className="you-have-an-account-already-si-wrapper">
            <h4 className="you-have-an-container">
              <span className="you-have-an">{`You have an  account already `}</span>
              <b>{` `}</b>
              <b>
                <span className="know-more">Singin in now</span>
              </b>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
