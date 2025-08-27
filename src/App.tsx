// App.tsx
import { Routes, Route } from "react-router-dom";
import { 
  MainLayoutPage, AuthLayoutPage,
  PopularCategoriesPage, ProductCategoryPage, 
  ProductDetailPage, RegisterPage, 
  LoginPage, NotFoundPage, CartPage,
  CheckoutPage, 
  DeliveryAddressPage,
} from "./pages";



function App() {
  return (
    <Routes>
      <Route element={<MainLayoutPage />}>
        <Route path="/" element={<PopularCategoriesPage />} />
          <Route path="/products/:category" element={<ProductCategoryPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/products/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/checkout/delivery-address" element={<DeliveryAddressPage />} />
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
