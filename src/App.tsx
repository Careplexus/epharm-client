import { Routes, Route } from "react-router-dom"
import { ProductListPage } from "./pages"
import { Footer, Header } from "./components"
import ProductDetailPage from "./pages/products/ProductDetailPage"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
