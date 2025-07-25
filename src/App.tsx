import { Routes, Route } from "react-router-dom"
import { ProductListPage, ProductDetailPage, NotFoundPage, CartPage } from "./pages"
import { Footer, Header } from "./components"


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/products/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
