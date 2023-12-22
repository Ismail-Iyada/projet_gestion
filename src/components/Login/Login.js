import "./login.css";
import { Link } from "react-router-dom";

const Login = (props) => {
  const setLogedState = props.setLogedState;

  return (
    <div className="Login">
      <section className="leftSide">
        <article className="hero">
          <h2 className="heTitle">
            Plateforme<br></br> Gestion des Recettes
          </h2>

          <p className="heDescription">
            Non ut cupidatat cupidatat aliqua. Esse consequat magna voluptate
            minim. Id adipisicing anim esse dolore eu incididunt. Non ea nostrud
            consectetur nisi. Eiusmod anim sit non laborum eiusmod. Aliqua est
            esse laboris excepteur laborum id.
          </p>
        </article>
      </section>
      <section className="rightSide">
        <article className="loginSection">
          <section style={{ width: "100%", marginBottom: "40px" }}>
            <h1
              style={{
                color: "#497174",
                fontSize: "40px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
                marginBottom: "2.5px",
              }}
            >
              Login
            </h1>
            <p style={{ fontSize: "large" }}>
              Welcome back! Please enter your details.
            </p>
          </section>

          <form className="loginForm">
            <input
              className="loginEmail loginFormElement"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />

            <input
              className="loginPsw loginFormElement"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />

            <a className="forgotPsw" href="#">
              Forgot Password
            </a>

            <Link
              to="/home"
              className="loginSubmit"
              type="submit"
              onClick={() => {
                setLogedState((prevState) => !prevState);
              }}
            >
              Login
            </Link>
          </form>
          <span className="forgotPsw">
            &copy; Copyrights 2023 UI Design by{" "}
            <a
              className="forgotPsw"
              href="https://www.linkedin.com/in/rafik-jakok-39a666281/"
              target="_blank"
            >
              Rafik JAKOK
            </a>
            , UI code by{" "}
            <a
              className="forgotPsw"
              href="https://www.linkedin.com/in/ismail-iyada/"
              target="_blank"
            >
              Ismail IYADA
            </a>
            .
          </span>
        </article>
      </section>
    </div>
  );
};

export default Login;
