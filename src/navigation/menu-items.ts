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
    url: "#",
    icon: Syringe,
  },
  {
    title: "Supplements & Tonics",
    url: "#",
    icon: PillBottle,
  },
  {
    title: "Skincare",
    url: "#",
    icon: SoapDispenserDroplet,
  },
  {
    title: "Medical devices",
    url: "#",
    icon: Stethoscope,
  },
]

export const services_menu = [
    {
        title: "Ask a Pharmacist",
        url: "",
        icon: MessageSquare,
    },
     {
        title: "Medications Review",
        url: "",
        icon: ClipboardList,
    },
     {
        title: "Home Delivery",
        url: "",
        icon: Truck,
    },
]