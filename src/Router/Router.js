import { createBrowserRouter } from "react-router-dom";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import AmazingJohn from "../components/Projects/AmazingJohn";
import Doctor from "../components/Projects/Doctor";
import JobFinder from "../components/Projects/JobFinder";
import NayTech from "../components/Projects/NayTech";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Main from "../layout/Main";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/job-finder',
                element: <JobFinder></JobFinder>
            },
            {
                path: '/amazing-john',
                element: <AmazingJohn></AmazingJohn>
            },
            {
                path: '/doctor',
                element: <Doctor></Doctor>
            },
            {
                path: '/nay-tech',
                element: <NayTech></NayTech>
            },
        ]
    },
])