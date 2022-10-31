import React from 'react';

export interface IRoute {
  path: string;
  redirect?: string;
  element?: React.ReactNode;
  children?: IRoute[];
}

const Home = React.lazy(() => import('../pages/Home'));

const routes: IRoute[] = [
  {
    path: '/',
    element: <Home></Home>,
  },
];

export default routes;
