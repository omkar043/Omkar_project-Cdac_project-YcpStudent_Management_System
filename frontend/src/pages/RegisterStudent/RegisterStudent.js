import React from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminNavBar from "../../components/AdminNavBar/AdminNavBar";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const RegisterStudent = () => {
  const navigate = useNavigate();
  const handleUpload = (e) => {
    e.preventDefault();
  };

  const handleAdd = (e) => {
    e.preventDefault();
    navigate("/student-login");
  };

  return (
    <>
      <section className="vh-100 login">
        <h1 className="heading text-center">YCP DATABASE MANAGEMENT</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="mt-5">Register Student</h1>
          <form
            className="w-75 mx-auto form register-student-form my-5"
            onSubmit={handleAdd}
          >
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter PRN"
                required
              />
            </div>
            <div className="row form-group">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label for="exampleInputDOB">Enter DOB</label>
              <input
                type="date"
                className="form-control"
                id="exampleInputDOB"
                placeholder="Enter DOB"
                required
              />
            </div>
            <div className="form-group">
              <select class="form-control" required>
                <option>Enter Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Phone number"
                required
              />
            </div>
            <div className="form-group">
              <label for="exampleInputMonth">
                Enter Joining Month and Year
              </label>
              <input
                type="month"
                className="form-control"
                id="exampleInputMonth"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter City"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter 10th Percentage or CGPA"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter 12th Percentage or CGPA"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Diploma Percentage or CGPA"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Graduation Percentage or CGPA"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Post Graduation Percentage or CGPA"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Work Experience (In years)"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Password"
              />
            </div>
            <button type="submit" className="btn btn-primary d-block w-100">
              Add
            </button>
          </form>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default RegisterStudent;
