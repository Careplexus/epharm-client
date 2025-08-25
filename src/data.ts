export type Product = {
  id: number;
  image: string;
  name: string;
  pack_size?: string;
  category: string;
  price: string;
};

export const products: Product[] = [
  // Dermaceutical / Skincare
  { id: 9, image: '/images/products/Oriflame Bright Intense Serum.webp', name: "Oriflame Bright Serum", pack_size: '', category: "Dermaceutical", price: "8000" },
  { id: 10, image: '/images/products/Oriflame Radiance Face Gel.webp', name: "Oriflame Face Gel", pack_size: '', category: "Dermaceutical", price: "23000" },
  { id: 11, image: "/images/products/benzoyl-peroxide-gel.png", name: "Benzoyl Peroxide Gel 10%", pack_size: '', category: "Dermaceutical", price: "4000" },
  { id: 12, image: "/images/products/salicylic-acid-face-wash.png", name: "Salicylic Acid Face Wash", pack_size: '', category: "Dermaceutical", price: "3500" },
  { id: 13, image: "/images/products/clindamycin-lotion.png", name: "Clindamycin Phosphate Topical Lotion", pack_size: '', category: "Dermaceutical", price: "5000" },
  { id: 14, image: "/images/products/niacinamide-serum.png", name: "Niacinamide Serum 10%", pack_size: '', category: "Dermaceutical", price: "6000" },
  { id: 15, image: "/images/products/zinc-for-acne.png", name: "Puritan Zinc for Acne", pack_size: '', category: "Dermaceutical", price: "2000" },
  { id: 16, image: "/images/products/CeraVe Hydrating Facial Cleanser.png", name: "CeraVe Hydrating Facial Cleanser", pack_size: '', category: "Dermaceutical", price: "7500" },

  // Reproductive Health
  { id: 17, image: "/images/products/equate-pregnancy-test-kit.png", name: "Equate Pregnancy Test Kit", pack_size: '', category: "Reproductive Health", price: "2500" },
  { id: 18, image: "/images/products/nature's field folite.png", name: "Folic Acid Tablets 400mcg", pack_size: '', category: "Reproductive Health", price: "1200" },
  { id: 19, image: '/images/products/Pregnacare Him&Her Conception.png', name: "Pregnacare - Him&Her Conception", pack_size: '', category: "Reproductive Health", price: "24000" },
  { id: 20, image: '/images/products/Pregnacare before Conception.png', name: "Pregnacare - Before Conception", pack_size: '', category: "Reproductive Health", price: "21500" },
  { id: 21, image: "/images/products/predicte ovulation test kit.png", name: "Ovulation Test Kit (Predicte)", pack_size: '', category: "Reproductive Health", price: "3500" },
  { id: 22, image: "/images/products/manix.png", name: "Manix Capsule", pack_size: '', category: "Reproductive Health", price: "1500" },

  // Supplements & Tonics
  { id: 1, image: '/images/products/feroglobin_capsules_front_CTFER030C8UK11E.png', name: "Feroglobin Capsule", pack_size: '', category: "Supplements & Tonics", price: "12000" },
  { id: 2, image: '/images/products/feroglobin-liquid-front-CTFER200L7WL6E_resized.png', name: "Feroglobin Syrup", pack_size: '', category: "Supplements & Tonics", price: "10000" },
  { id: 3, image: '/images/products/glutaberry.jpg', name: "Gluta Berry", pack_size: '', category: "Supplements & Tonics", price: "24000" },
  { id: 4, image: '/images/products/Menopaceoriginal-pointyM.png', name: "Menopace", pack_size: '', category: "Supplements & Tonics", price: "17400" },
  { id: 5, image: '/images/products/MenopacePlusFront_580x580_CTMEN056T16T4WL1ER.png', name: "Menopace Plus", pack_size: '', category: "Supplements & Tonics", price: "20000" },
  { id: 6, image: '/images/products/Perfectilmax_c1b00fb3-cddc-48d4-849c-73bb3b3acf89.png', name: "Perfectil Max", pack_size: '', category: "Supplements & Tonics", price: "18000" },
  { id: 7, image: '/images/products/Pregnacare before Conception.png', name: "Pregnacare - Before Conception", pack_size: '', category: "Supplements & Tonics", price: "21500" },
  { id: 8, image: '/images/products/Pregnacare Him&Her Conception.png', name: "Pregnacare - Him&Her Conception", pack_size: '', category: "Supplements & Tonics", price: "24000" },

  // Medical Devices
  { id: 21, image: "/images/products/predicte ovulation test kit.png", name: "Ovulation Test Kit (Predicte)", pack_size: '', category: "Medical Devices", price: "3500" },

  // Medicines
  { id: 1, image: '/images/products/feroglobin_capsules_front_CTFER030C8UK11E.png', name: "Feroglobin Capsule", pack_size: '', category: "Medicines", price: "12000" },
  { id: 2, image: '/images/products/feroglobin-liquid-front-CTFER200L7WL6E_resized.png', name: "Feroglobin Syrup", pack_size: '', category: "Medicines", price: "10000" },

  // Injectables
  // No items for now
];
