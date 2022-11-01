import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.css';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <header className="layout-header">header</header>
      <div className="layout-content">
        <aside className="layout-aside">个人信息</aside>
        <article className="layout-article">
          <Outlet></Outlet>
        </article>
      </div>
    </div>
  );
};

export default Layout;
