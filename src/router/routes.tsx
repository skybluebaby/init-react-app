import React from 'react';

export interface IRoute {
  path: string;
  element?: React.ReactNode;
  children?: IRoute[];
}

const Layout = React.lazy(() => import('../pages/Layout'));
const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const routeConfig: IRoute[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routeConfig;
