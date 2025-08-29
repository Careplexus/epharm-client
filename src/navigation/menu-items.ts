import { PillBottle, Tablets, SoapDispenserDroplet, 
    Stethoscope, Truck, MessageSquare, ClipboardList, 
    Leaf, Baby } from "lucide-react";
import { slugify } from "@/lib/slugify";

export const medicines_menu = [
  {
    title: "Medicines",
    url: `/products/${slugify("Medicines")}`,
    icon: Tablets,
  },
  {
    title: "Vitamins & Supplements",
    url: `/products/${slugify("Vitamins & Supplements")}`,
    icon: PillBottle,
  },
    {
    title: "Herbal Products",
    url: `/products/${slugify("Herbal Products")}`,
    icon: Leaf,
  },
  {
    title: "Dermaceuticals/Skincare",
    url: `/products/${slugify("Dermaceuticals / Skincare")}`,
    icon: SoapDispenserDroplet,
  },
  {
    title: "Medical Devices",
    url: `/products/${slugify("Medical Devices & Health Tools")}`,
    icon: Stethoscope,
  },
  {
    title: "Mother & Child Care",
    url: `/products/${slugify("Mother & Child Care")}`,
    icon: Baby,
  },
];

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
];
