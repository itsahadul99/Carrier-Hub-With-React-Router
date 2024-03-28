import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast';
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import JobDetails from './components/JobDetails'
import AppliedJob from './components/AppliedJob';
import { HelmetProvider } from 'react-helmet-async';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/job/:id',
        element: <JobDetails />,
        loader: () => fetch('../jobs.json')
      },
      {
        path: '/appliedjobs',
        element: <AppliedJob />,
        loader: () => fetch('../jobs.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </React.StrictMode>,
  </HelmetProvider>
)
