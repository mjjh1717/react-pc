import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.scss";
// 导入antd样式文件
import 'antd/dist/antd.min.css'
// 导入路由
import Router from "./router/index.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*  声明路由 */}
    <Router></Router>
  </React.StrictMode>
);

