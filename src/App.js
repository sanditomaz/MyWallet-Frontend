import {
  GlobalStyle,
  Login,
  Registration,
  Home,
  AddMoney,
  Withdraw,
} from "./04.Shared/exports";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./04.Shared/UserContext";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addmoney" element={<AddMoney />} />
          <Route path="/withdraw" element={<Withdraw />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
