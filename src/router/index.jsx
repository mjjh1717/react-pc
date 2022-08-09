import App from "../App.jsx";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import Notfound from "@/pages/Notfound";

import { AuthRoute } from "@/components/AuthRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//定义一个路由
const BaseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <AuthRoute>
            <Layout />
          </AuthRoute>
        }
      ></Route>
      <Route path="/layout" element={<Layout />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/*" element={<Notfound />}></Route>
    </Routes>
  </BrowserRouter>
);

export default BaseRouter;
