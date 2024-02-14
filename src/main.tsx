import "./globals.css";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<>
		<Toaster />
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</>
);
