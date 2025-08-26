import { PillBottle, Tablets, Syringe, SoapDispenserDroplet, 
    Stethoscope, MessageSquare, ClipboardList, Truck } from "lucide-react"

export const medicines_menu = [
  {
    title: "Medicines",
    url: "/products?category=medicines",
    icon: Tablets,
  },
  {
    title: "Injectables",
    url: "/products?category=injectables",
    icon: Syringe,
  },
  {
    title: "Supplements & Tonics",
    url: "/products?category=supplements",
    icon: PillBottle,
  },
  {
    title: "Dermaceuticals",
    url: "/products?category=dermaceuticals",
    icon: SoapDispenserDroplet,
  },
  {
    title: "Medical devices",
    url: "/products?category=devices",
    icon: Stethoscope,
  },
]

export const services_menu = [
  {
    title: "Ask a Pharmacist",
    url: "enquiry",
    icon: MessageSquare,
  },
  {
    title: "Medications Review",
    url: "products/review",
    icon: ClipboardList,
  },
  {
    title: "Home Delivery",
    url: "delivery",
    icon: Truck,
  },
]
