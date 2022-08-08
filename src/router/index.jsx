import App from "../App";
import Layout from "../pages/Layout";
import Login from "../page/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//定义一个路由
const BaseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/layout" element={<Layout />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  </BrowserRouter>
);

export default BaseRouter;
