import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

function AppRouter(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* <Route index element={<Dashboard />} /> */}
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
