import React from "react";
import Home from './Components/Home/Home'

const About = React.lazy(() => import("./Components/About/About"));
const Project = React.lazy(() => import("./Components/Project/Project"));

const routes = [
  { path: "/",exact: true,  name: "home",component:  Home},
  { path: "/about", name: "About", component: About },
  { path: "/project", name: "Project", component: Project },
 

];
export default routes;