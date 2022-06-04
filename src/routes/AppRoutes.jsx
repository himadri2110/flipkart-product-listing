import { Route, Routes } from "react-router-dom";
import { Products } from "../pages/Products/Products";

export const AppRoutes = () => {
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </div>
  );
};
