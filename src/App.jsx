import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartPage } from "./pages/Cart/index";
import { HomePage } from "./pages/Home/index";
import { ComingSoonPage } from "./pages/ComingSoon/index";
import { ProductPage } from "./pages/ProductPage";
function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: HomePage,
		},
		{
			path: "/cart",
			element: CartPage,
		},
		{
			path: "/products",
			element: ProductPage,
		},
		{
			path: "/classes",
			element: ComingSoonPage,
		},
		{
			path: "/recipes",
			element: ComingSoonPage,
		},
	]);
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
