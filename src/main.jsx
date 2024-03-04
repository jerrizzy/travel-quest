import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DestinationList from './components/DestinationList.jsx'
import DestinationCard from './components/DestinationCard.jsx'

const Main = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/destinations",
          element: <DestinationList />,

        },
        {
          path: "/destinations/:id",
          element: <DestinationCard />
        }
      ],
    },
    {
      path: "*",
      element: <h1>This page does not exist</h1>,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
