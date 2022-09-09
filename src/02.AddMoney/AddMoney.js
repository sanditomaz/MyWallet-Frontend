import StyledAddMoney from "../Styles/StyledAddMoney";
import { Link, useNavigate } from "react-router-dom";

export default function AddMoney() {
  return (
    <StyledAddMoney>
      <header>
        <aside>
          <h1>Add a new entry</h1>
        </aside>
      </header>

      <div>
        <span>
          <input type="text" placeholder="Value"></input>
          <input type="text" placeholder="Description"></input>
          <Link to={`/home`}>
            <button type="submit">Save</button>
          </Link>
        </span>
      </div>
    </StyledAddMoney>
  );
}
