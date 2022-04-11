import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { NavBar } from "./components/navBar/navBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./pages/cart";
import { Footer } from "./components/footer/footer";
import { ItemListContainer } from "./components/itemListContainer/itemListContainer";
import { ItemDetailContainer } from "./components/itemDetailContainer/itemDetailContainer";
import { CartProvider } from "./context/cartContext";
import { Order } from './pages/checkout'
import { Error } from "./pages/error";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ItemListContainer greeting={"Bienvenidos a MovieFan"} />
            }
          />
          <Route exact path="/cart" element={<Cart />} />
          <Route
            exact
            path="/tienda"
            element={
              <ItemListContainer greeting={"Bienvenido a MovieFan"} />
            }
          />
          <Route
            exact
            path="/category/:categoryID"
            element={
              <ItemListContainer greetings="Buscas algo más específico? Aquí por categorías:" />
            }
          />
          <Route
            exact
            path="/item/:productID"
            element={<ItemDetailContainer />}
          />
          <Route
            exact
            path="/order"
            element={<Order />}
          />
          <Route
            exact
            path="*"
            element={<Error />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
