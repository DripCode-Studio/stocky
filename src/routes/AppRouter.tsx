import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/dashboard";
import Products from "../pages/raw/products/products";
import Suppliers from "../pages/raw/suppliers/suppliers";
import Orders from "../pages/raw/orders/orders";
import FinishedProducts from "../pages/transform/products/products";
import Recipes from "../pages/transform/recipes/recipes";
import Clients from "../pages/transform/clients/clients";
import ClientOrders from "../pages/transform/orders/orders";
import Production from "../pages/transform/production/production";
import Anaytics from "../pages/rapports/analytics";

function AppRouter(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/raw-products" element={<Products />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/raw-orders" element={<Orders />} />
          <Route path="/finished-products" element={<FinishedProducts />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/client-orders" element={<ClientOrders />} />
          <Route path="/production" element={<Production />} />
          <Route path="/reports" element={<Anaytics />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
