import { Empty, History, StyledBoxes, StyledHome } from "../04.Shared/exports";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  return (
    <StyledHome>
      <header>
        <aside>
          <h1>Hello, Fulano</h1>
          <Link to={`/`}>
            <div>
              <ion-icon name="exit-outline"></ion-icon>
            </div>
          </Link>
        </aside>
      </header>

      <History />

      <StyledBoxes>
        <span>
          <section>
            <Link to={`/addmoney`}>
              <div>
                <ion-icon name="add-circle-outline"></ion-icon>
              </div>
            </Link>
            <Link to={`/addmoney`}>
              <h2>Add Money</h2>
            </Link>
          </section>

          <section>
            <Link to={`/withdraw`}>
              <div>
                <ion-icon name="remove-circle-outline"></ion-icon>
              </div>
            </Link>
            <Link to={`/withdraw`}>
              <h2>Withdraw</h2>
            </Link>
          </section>
        </span>
      </StyledBoxes>
    </StyledHome>
  );
}
