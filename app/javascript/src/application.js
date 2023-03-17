import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
import { Button, Layout } from 'antd';
import { CaretLeftOutlined } from '@ant-design/icons';;

import 'antd/dist/reset.css';

import App from './App';
import Jokes from './Jokes';

const container = document.getElementById('root');
const root = createRoot(container);
const { Header, Content } = Layout;

const AppRouter = () => {
  const navigate = useNavigate(-1);
 return (
    <>
      <Header style={{ color: 'white', textAlign: 'center' }}>
        <>
          <span
            style={{ float: 'left' }}
          >
            <Button
              icon={<CaretLeftOutlined />}
              onClick={
                () => {
                  navigate(-1);
                }
              }
            />
          </span>
          <span>Pundora's Box</span>
        </>
      </Header>
      <Content>
        <Routes>
          <Route element={<App />} path='/' exact />
          <Route element={<Jokes />} path='users/:id/jokes' exact />
        </Routes>
      </Content>
    </>
  );
 }

document.addEventListener('DOMContentLoaded', () => {
  root.render(<BrowserRouter><AppRouter /></BrowserRouter>);
});