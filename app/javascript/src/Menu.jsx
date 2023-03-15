import React from "react";
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';

const menuItems = ['leaderboard', 'jokes', 'admin'];

const toSentenceCase = str => {
  const spaced = str.replace(/([A-Z])/g,' $1');
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
};

const Nav = () => {
  const navigate = useNavigate();
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
      {menuItems.map((item, index) => (
        <Menu.Item
          key={index}
          title={item}
          onClick={() => {
            navigate(`/${item === 'leaderboard' ? '' : item}`);
          }}
        >
          {toSentenceCase(item)}
        </Menu.Item>
      ))}
    </Menu>
  );
}

export default Nav;



