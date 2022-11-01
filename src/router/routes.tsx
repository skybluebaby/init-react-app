import React from 'react';

export interface IRoute {
  path: string;
  redirect?: string;
  element?: React.ReactNode;
  children?: IRoute[];
}

const Layout = React.lazy(() => import('../pages/Layout'));
const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const routes: IRoute[] = [
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: 'home',
        element: <Home></Home>,
      },
      {
        path: 'about',
        element: <About></About>,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  },
];

export default routes;
