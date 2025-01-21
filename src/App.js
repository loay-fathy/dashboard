import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components";
import Navbar from "./components/Navigation/index.jsx";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Area,
  Bar,
  Pie,
  Financial,
  Kanban,
  ColorPicker,
  ColorMapping,
  Editor,
  Line,
} from "./pages";
import "./App.css";
import { useStateContext } from "./context/ContextProvider";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Content from "./pages/content";

const App = () => {
  const { activeMenu, setActiveMenu, currentMode } = useStateContext();
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-boxdark-2 dark:text-bodydark">
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-boxdark bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-boxdark">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-boxdark-2 dark:text-bodydark bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <Navbar setSidebarOpen={setActiveMenu} sidebarOpen={activeMenu} />
            <div>
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/dashboard" element={<Ecommerce />} />

                {/* pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/products" element={<Products />} />
                <Route path="/add-product" element={<ProductDetails />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/content" element={<Content />} />

                {/* apps */}
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />
                <Route path="/kanban" element={<Kanban />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/stacked" element={<Stacked />} />
                <Route path="/pyramid" element={<Pyramid />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
