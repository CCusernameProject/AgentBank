import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage";
import UserPage from "./Pages/UserPage"
import Verify from "./Components/MainComponent/MainVerify";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/about',
        element: <h1>About Page</h1>
    },
    {
        path: '*',
        element: <h1>Error Page</h1>
    },
    {
        path: '/error',
        element: <h1>Error Page</h1>
    },
    {
        path: '/sign-in',
        element: <SignInPage />
    },
    {
        path: '/user',
        element: <Verify element={<UserPage />} />
    }
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App