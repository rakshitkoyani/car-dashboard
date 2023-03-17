<<<<<<< HEAD
import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../Styles/globalStyles";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  mobile_no:"",
  state:"",
};

const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">
                  To the thapa technical website for programmers.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="name" className="input-label">
                      Name
                    </label>
                    <input
                      type="name"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="confirm_password" className="input-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="Confirm Password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error">{errors.confirm_password}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="mobile_no" className="input-label">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="mobile_no"
                      id="mobile_no"
                      placeholder="Confirm Password"
                      value={values.mobile_no}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.mobile_no && touched.mobile_no ? (
                      <p className="form-error">{errors.mobile_no}</p>
                    ) : null}
                  </div>
                  <div className="modal-buttons">
                    <button className="input-button" type="submit">
                      Create account
                    </button>
                  </div>
                </form>
                <p className="sign-up">
                  You have an account already? <a href="#">Sign in now</a>
                </p>
              </div>
              {/* <div className="modal-right">
                <img
                  src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
              </div> */}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 100%;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    display: flex;
    max-width: 60vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;

    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }

  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }

  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    background: #EF5166;
border-radius: 50px;
    transition: 0.3s;
    cursor: pointer;
    font-family: 'Inter';
    font-style: normal;
  }
  .input-button:hover {
    background: #55311c;
  }

  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }

  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }
`;

export default Registration;
=======
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
>>>>>>> origin
