import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider, Route, createRoutesFromElements
} from "react-router-dom";

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Resume } from './pages/Resume';
import { Skills } from './pages/Skills';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="resume" element={<Resume />} />
    <Route path="skills" element={<Skills />} />
    </>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




