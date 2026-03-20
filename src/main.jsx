
import ReactDOM from "react-dom/client";
import { router } from "./Routes/Routes";
import { RouterProvider } from "react-router";
import "./index.css";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router}></RouterProvider>
);