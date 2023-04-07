import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Home, LandingPage } from "./Pages";
import { Employer } from "./Pages";
import JobSeeker from "./Pages/JobSeeker";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/employer_dashboard" element={<Employer />} />
      <Route path="/job_seeker_dashboard" element={<JobSeeker />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/" element={<Home />} />
    </Route>
  )
);

export default Router;
