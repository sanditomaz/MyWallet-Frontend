import {
  Empty,
  History,
  StyledBoxes,
  StyledHome,
  LoadingImg,
} from "../04.Shared/exports";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../04.Shared/UserContext";
import { ListData, SignOut } from "../04.Shared/API";

export default function Home() {
  const { user } = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const config = { headers: { Authorization: `Bearer ${user.token}` } };

  useEffect(() => {
    const promise = ListData(config);
    promise.then((res) => {
      setUserData(res.data);
    });
  }, []);

  if (userData === null || userData > 0) {
    return (
      <LoadingImg>
        <img src="https://bit.ly/3zAxhsA" alt="Loading" />
      </LoadingImg>
    );
  }

  function logOut() {
    const body = {};
    const promise = SignOut(body, config);
    promise.then((res) => {
      console.log(res.data);
    });
  }

  return (
    <StyledHome>
      <header>
        <aside>
          <h1>Hello, {user.name}</h1>
          <Link to={`/`}>
            <div onClick={logOut}>
              <ion-icon name="exit-outline"></ion-icon>
            </div>
          </Link>
        </aside>
      </header>
      {userData.length === 0 ? <Empty /> : <History userData={userData} />}

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
