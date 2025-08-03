import AppSidebar from "./layout/AppSidebar";
import MainHeader from "./layout/headers/MainHeader";
import Footer from "./layout/footer/Footer";
import ProductCard from "./pharmacy/product/ProductCard";
import ProductList from "./pharmacy/product/ProductList";
import ProductDetail from "./pharmacy/product/ProductDetail";
import Cart from "./pharmacy/cart/Cart";
import CartSummary from "./pharmacy/cart/CartSummary";
import QuantityInput from "./pharmacy/product/QuantityInput";
import AuthHeader from "./layout/headers/AuthHeader";
import RegisterForm from "./user/RegisterForm";
import LoginForm from "./user/LoginForm";
import Input  from "./ui/input";
import {Button} from './ui/button'
import Separator from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, 
    DropdownMenuLabel, DropdownMenuSeparator, 
    DropdownMenuTrigger} from "./ui/dropdown-menu"
import { 
    Form, FormItem, FormLabel,
    FormControl, FormDescription, FormMessage, FormField,
} from "./ui/form"; 


export {
    // Pharmacy components
    AppSidebar,
    MainHeader,
    Footer,
    AuthHeader,
    ProductCard,
    ProductDetail,
    Cart,
    CartSummary,
    ProductList,

    // User components
    RegisterForm,
    LoginForm,

    // Common components
    QuantityInput,

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
    //useFormField,
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormField,
    Button
}