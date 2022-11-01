import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes, { IRoute } from './routes';

// todo...配置
const renderRoute = (route: IRoute): React.ReactNode => {
  const { path, element, children } = route;

  return (
    <Route path={path} key={path} element={element}>
      {Array.isArray(children) ? children.map(renderRoute) : null}
    </Route>
  );
};

const router = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map(renderRoute)}
          <Route element={<div>404</div>}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default router;
