import StyledAddMoney from "../Styles/StyledAddMoney";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../04.Shared/UserContext";
import { AddWithdraw } from "../04.Shared/API";

export default function Withdraw() {
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const config = { headers: { Authorization: `Bearer ${user.token}` } };

  function sendForm(e) {
    setDisable(true);
    e.preventDefault();
    const body = {
      number,
      description,
    };

    const promise = AddWithdraw(body, config);
    promise.then((res) => {
      navigate("/home");
    });
    promise.catch((err) => {
      alert("Oops! Something went wrong 😢 Please try again...");
      setDisable(false);
    });
  }

  return (
    <StyledAddMoney>
      <header>
        <aside>
          <Link to={`/home`}>
            <h1>Add a new withdrawal</h1>
          </Link>
        </aside>
      </header>

      <div>
        <form onSubmit={sendForm}>
          <input
            type="number"
            required
            placeholder="Value"
            disabled={disable}
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          ></input>
          <input
            type="text"
            required
            placeholder="Description"
            disabled={disable}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></input>
          <button type="submit">
            {!disable ? (
              "Save"
            ) : (
              <ThreeDots
                height="40"
                width="70"
                radius="9"
                color="#FFFFFF"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
              />
            )}
          </button>
        </form>
      </div>
    </StyledAddMoney>
  );
}
