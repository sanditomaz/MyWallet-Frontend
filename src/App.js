import {
  GlobalStyle,
  Login,
  Registration,
  Home,
  AddMoney,
  Withdraw,
} from "./04.Shared/exports";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
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
  );
}
