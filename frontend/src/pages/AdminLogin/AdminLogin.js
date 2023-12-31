import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

const AdminLogin = () => {
  const [captchaText, setCaptchaText] = useState("");
  const [adminId, setAdminId] = useContext(AuthContext);
  const [adminPassword, setAdminPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(adminId);
    console.log(adminPassword);
    try {
      const response = await axios.post("http://localhost:8080/admin-login", {
        id: adminId,
        password: adminPassword,
      });
      console.log(response);
      localStorage.setItem("adminId", adminId);
    } catch (error) {
      alert(error.response.data);
      return;
    }

    if (validateCaptcha(captchaText) === false) {
      alert("Captcha Does Not Match");
      return;
    }
    navigate("/admin-dashboard");
  };

  return (
    <>
      <section className="vh-100 login">
        <h1 className="heading text-center">YCP DATABASE MANAGEMENT</h1>
        <div className="container-fluid h-custom mb-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form className="form " onSubmit={handleLogin}>
                <img src="./images/ycp-logo.jpeg" className="logo mb-5" />
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter Admin Id"
                    value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                    required
                  />
                </div>
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-outline mb-3">
                  <LoadCanvasTemplate />
                  <input
                    type="text"
                    id="user_captcha_input"
                    className="form-control form-control-lg"
                    placeholder="Enter above captcha"
                    value={captchaText}
                    onChange={(e) => setCaptchaText(e.target.value)}
                    required
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default AdminLogin;
