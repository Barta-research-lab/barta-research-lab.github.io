import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import EventsPage from "../pages/Events";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/events",
    element: <EventsPage />
  },
]);

export default Router;
