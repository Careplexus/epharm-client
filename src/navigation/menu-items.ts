import { PillBottle,Tablets, Syringe, SoapDispenserDroplet, 
    Stethoscope, MessageSquare, ClipboardList, Truck} from "lucide-react"

export const medicines_menu = [
  {
    title: "Medicines",
    url: "/",
    icon: Tablets,
  },
  {
    title: "Injectables",
    url: "products/injectables",
    icon: Syringe,
  },
  {
    title: "Supplements & Tonics",
    url: "products/supplements",
    icon: PillBottle,
  },
  {
    title: "Skincare",
    url: "products/skincare",
    icon: SoapDispenserDroplet,
  },
  {
    title: "Medical devices",
    url: "products/medical-devices",
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