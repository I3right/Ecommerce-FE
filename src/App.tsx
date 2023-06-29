import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "@/pages/homepage";
import Restaurants from "./pages/User/restaurants";
import Restaurant from "./pages/User/restaurant";
import Checkout from "./pages/User/checkout";
import Delivery from "./pages/User/delivery";


function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Homepage /> },
    { path: "/restaurants", element: <Restaurants /> },
    { path: "/restaurant/:name", element: <Restaurant /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/delivery", element: <Delivery /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
