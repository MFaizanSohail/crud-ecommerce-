import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./context/AppContext.jsx";
import { Provider } from "react-redux";
import Store from "./redux/Store";



ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={Store}>
			<AppProvider>
				<App />
			</AppProvider>
		</Provider>
	</React.StrictMode>
);
