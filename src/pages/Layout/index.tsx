import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './index.css';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <header className="layout-header">header</header>
      <div className="layout-content">
        <aside className="layout-aside">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            首页
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            关于
          </NavLink>
        </aside>
        <article className="layout-article">
          <Outlet></Outlet>
        </article>
      </div>
    </div>
  );
};

export default Layout;
