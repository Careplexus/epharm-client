type Product = {
    id: number;
    image: string;
    name: string;
    pack_size?: string;
    category?: string;
    price: string;
}
export const products: Product[] = [
    { id: 1, image: '/images/products/feroglobin_capsules_front_CTFER030C8UK11E.png', name: "Feroglobin Capsule", category: "medication", pack_size: '', price: "12,000" },
    { id: 2, image: '/images/products/feroglobin-liquid-front-CTFER200L7WL6E_resized.png', category: "medication", name: "Feroglobin Syrup", pack_size: '', price: "10,000" },
    { id: 3, image: '/images/products/glutaberry.jpg', name: "Gluta Berry", category: "supplement", price: "24,000" },
    { id: 4, image: '/images/products/Menopaceoriginal-pointyM.png', category: "supplement", name: "Menopace", price: "17,400" },
    { id: 5, image: '/images/products/MenopacePlusFront_580x580_CTMEN056T16T4WL1ER.png', category: "supplement", name: "Menopace Plus", pack_size: '', price: "20,000" },
    { id: 6, image: '/images/products/Perfectilmax_c1b00fb3-cddc-48d4-849c-73bb3b3acf89.png', category: "supplement", name: "Perfectil Max", pack_size: '', price: "18,000" },
    { id: 7, image: '/images/products/Pregnacare before Conception.png', category: "supplement", name: "Pregnacare - Before Conception", pack_size: '', price: "21,500" },
    { id: 8, image: '/images/products/Pregnacare Him&Her Conception.png', category: "supplement", name: "Pregnacare - Him&Her Conception", pack_size: '', price: "24,000" },
    { id: 9, image: '/images/products/Oriflame Bright Intense Serum.webp', category: "skincare", name: "Oriflame Bright Intense Serum", pack_size: '', price: "8,000" },
    { id: 10, image: '/images/products/Oriflame Radiance Face Gel.webp', category: "skincare", name: "Oriflame Radiance Face Gel", pack_size: '', price: "23,000" },
]
