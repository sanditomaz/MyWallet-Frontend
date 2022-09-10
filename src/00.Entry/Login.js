import StyledLogin from "../Styles/StyledLogin";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../04.Shared/UserContext";
import { SendLogin } from "../04.Shared/API";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function sendForm(e) {
    setDisable(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };
    const promise = SendLogin(body);
    promise.then((res) => {
      setUser(res.data);
      navigate("/home");
    });
    promise.catch((err) => {
      alert(
        "Login failed! 😢 Please check your email and password before trying again..."
      );
      setDisable(false);
    });
  }

  return (
    <StyledLogin>
      <form onSubmit={sendForm}>
        <nav>
          <div>
            <h2>MyWallet</h2>
          </div>
          <section>
            <input
              type="email"
              required
              placeholder="E-mail"
              disabled={disable}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              required
              placeholder="Password"
              disabled={disable}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <div>
              <button>
                {!disable ? (
                  "Login"
                ) : (
                  <ThreeDots
                    height="80"
                    width="70"
                    radius="9"
                    color="#FFFFFF"
                    ariaLabel="three-dots-loading"
                    wrapperStyle
                    wrapperClass
                  />
                )}
              </button>
            </div>

            <Link to={`/register`}>
              <nobr>
                <h1>Don't have an account? Sign up!</h1>
              </nobr>
            </Link>
          </section>
        </nav>
      </form>
    </StyledLogin>
  );
}
