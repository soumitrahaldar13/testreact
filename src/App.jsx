import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@awesome.me/kit-KIT_CODE/icons/classic/solid";
import { faCat } from "@awesome.me/kit-KIT_CODE/icons/sharp/solid";
import { faDog } from "@awesome.me/kit-KIT_CODE/icons/duotone/solid";
import { faDragon } from "@awesome.me/kit-KIT_CODE/icons/sharp-duotone/solid";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>hello world</h1>
      <form>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br></br>
        <button type="button" className="btn btn-secondary btn-block">
          LOGIN
        </button>
      </form>
      <div className="container">
        <div>
          <FontAwesomeIcon icon={faHouse} />
          <FontAwesomeIcon icon={faCat} />
          <FontAwesomeIcon icon={faDog} />
          <FontAwesomeIcon icon={faDragon} />
        </div>
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center">
              <i
                className="fa fa-user-circle"
                style={{ fontSize: "110px" }}
              ></i>
            </h4>
            <div className="image"></div>
          </div>
          <div className="body-form">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa-regular fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  style={{ padding: "10px" }}
                />
              </div>
              <div className="input-group mb-3 margin">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  style={{ padding: "10px" }}
                />
              </div>
              <button type="button" className="btn btn-secondary btn-block">
                LOGIN
              </button>
              <div className="message">
                <div>
                  <input type="checkbox" /> Remember ME
                </div>
                <div>
                  <a href="#">Forgot your password</a>
                </div>
              </div>
            </form>
            <div className="social">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
