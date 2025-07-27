// App.tsx
import { Routes, Route } from "react-router-dom";
import { 
  MainLayoutPage, AuthLayoutPage,
  ProductListPage, ProductDetailPage, RegisterPage, 
  LoginPage, NotFoundPage, CartPage, 
} from "./pages";


function App() {
  return (
    <Routes>
      <Route element={<MainLayoutPage />}>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/products/cart" element={<CartPage />} />
      </Route>
      <Route element={<AuthLayoutPage />}>
        <Route path="/user/register" element={<RegisterPage />} />
        <Route path="/user/login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
