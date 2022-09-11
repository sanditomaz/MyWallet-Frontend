import StyledLogin from "../Styles/StyledLogin";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SignUp } from "../04.Shared/API";

export default function Registration() {
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  function handleForm({ name, value }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function sendForm(e) {
    setDisable(true);
    e.preventDefault();
    const promise = SignUp(form);

    promise.then((res) => navigate("/"));
    promise.catch((err) => {
      alert(
        "Registration failed! 😢 Please check your email and password before trying again..."
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
              type="name"
              required
              placeholder="Name"
              name="name"
              disabled={disable}
              onChange={(e) =>
                handleForm({ name: e.target.name, value: e.target.value })
              }
            />
            <input
              type="email"
              required
              placeholder="E-mail"
              name="email"
              disabled={disable}
              onChange={(e) =>
                handleForm({ name: e.target.name, value: e.target.value })
              }
            />

            <input
              type="password"
              required
              placeholder="Password"
              name="password"
              disabled={disable}
              onChange={(e) =>
                handleForm({ name: e.target.name, value: e.target.value })
              }
            />

            <input
              type="password"
              required
              placeholder="Confirm password"
              name="confirm_password"
              disabled={disable}
              onChange={(e) =>
                handleForm({ name: e.target.name, value: e.target.value })
              }
            />

            <div>
              <button>
                {!disable ? (
                  "Sign up"
                ) : (
                  <ThreeDots
                    height="80"
                    width="70"
                    radius="9"
                    color="#FFFFFF"
                    ariaLabel="three-dots-loading"
                    top="20"
                    wrapperStyle
                    wrapperClass
                  />
                )}
              </button>
            </div>

            <Link to={`/`}>
              <nobr>
                <h1>Already have an account? Sign in!</h1>
              </nobr>
            </Link>
          </section>
        </nav>
      </form>
    </StyledLogin>
  );
}
