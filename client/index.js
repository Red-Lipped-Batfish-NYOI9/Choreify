import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import store from "./redux/store.js";

// this will first go to the dom, and get the div with the id of "root",
// and then render the app into that
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
store.dispatch(fetchChores);
