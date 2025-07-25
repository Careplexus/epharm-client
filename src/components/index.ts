import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import ProductCard from "./pharmacy/product/ProductCard";
import ProductList from "./pharmacy/product/ProductList";
import ProductDetail from "./pharmacy/product/ProductDetail";
import Cart from "./pharmacy/cart/Cart";
import CartSummary from "./pharmacy/cart/CartSummary";
import QuantityInput from "./pharmacy/product/QuantityInput";
import Input  from "./ui/input";
import Separator from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, 
    DropdownMenuLabel, DropdownMenuSeparator, 
    DropdownMenuTrigger} from "./ui/dropdown-menu"

export {
    // Shadcn components
    Input,
    Separator,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,

    // Custom components
    Header,
    Footer,
    ProductCard,
    ProductDetail,
    Cart,
    CartSummary,
    ProductList,
    QuantityInput,

}