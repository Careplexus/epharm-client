export type Product = {
  id: number;
  image: string;
  name: string;
  pack_size?: string;
  category: string;    
  subcategory?: string;
  price: string;
};

export const products: Product[] = [
  // Dermaceuticals / Skincare
  { id: 1, image: '/images/products/Oriflame Bright Intense Serum.webp', name: "Oriflame Bright Serum", pack_size: '', category: "Dermaceuticals / Skincare", subcategory: "Serums", price: "8000" },
  { id: 2, image: '/images/products/Oriflame Radiance Face Gel.webp', name: "Oriflame Face Gel", pack_size: '', category: "Dermaceuticals / Skincare", subcategory: "Moisturizers & Gels", price: "23000" },
  { id: 3, image: "/images/products/benzoyl-peroxide-gel.png", name: "Benzoyl Peroxide Gel 10%", pack_size: '', category: "Dermaceuticals / Skincare", subcategory: "Acne Treatment", price: "4000" },
  { id: 4, image: "/images/products/salicylic-acid-face-wash.png", name: "Salicylic Acid Face Wash", pack_size: '', category: "Dermaceuticals / Skincare", subcategory: "Cleansers", price: "3500" },
  { id: 5, image: "/images/products/clindamycin-lotion.png", name: "Clindamycin Phosphate Topical Lotion", pack_size: '', category: "Dermaceuticals / Skincare", subcategory: "Acne Treatment", price: "5000" },
  { id: 6, image: "/images/products/niacinamide-serum.png", name: "Niacinamide Serum 10%", pack_size: '', category: "Dermaceuticals / Skincare", subcategory: "Serums", price: "6000" },
  { id: 7, image: "/images/products/zinc-for-acne.png", name: "Puritan Zinc for Acne", pack_size: '', category: "Dermaceuticals / Skincare", subcategory: "Supplements for Skin", price: "2000" },
  { id: 8, image: "/images/products/CeraVe Hydrating Facial Cleanser.png", name: "CeraVe Hydrating Facial Cleanser", pack_size: '', category: "Dermaceuticals / Skincare", subcategory: "Cleansers", price: "7500" },

  // Vitamins & Supplements
  { id: 9, image: '/images/products/glutaberry.jpg', name: "Gluta Berry", pack_size: '', category: "Vitamins & Supplements", subcategory: "Antioxidants", price: "24000" },
  { id: 10, image: '/images/products/Menopaceoriginal-pointyM.png', name: "Menopace", pack_size: '', category: "Vitamins & Supplements", subcategory: "Women's Health", price: "17400" },
  { id: 11, image: '/images/products/MenopacePlusFront_580x580_CTMEN056T16T4WL1ER.png', name: "Menopace Plus", pack_size: '', category: "Vitamins & Supplements", subcategory: "Women's Health", price: "20000" },
  { id: 12, image: '/images/products/Perfectilmax_c1b00fb3-cddc-48d4-849c-73bb3b3acf89.png', name: "Perfectil Max", pack_size: '', category: "Vitamins & Supplements", subcategory: "Hair, Skin & Nails", price: "18000" },
  { id: 13, image: '/images/products/Pregnacare before Conception.png', name: "Pregnacare - Before Conception", pack_size: '', category: "Vitamins & Supplements", subcategory: "Conception Support", price: "21500" },
  { id: 14, image: '/images/products/Pregnacare Him&Her Conception.png', name: "Pregnacare - Him&Her Conception", pack_size: '', category: "Vitamins & Supplements", subcategory: "Conception Support", price: "24000" },
  { id: 15, image: "/images/products/nature's field folite.png", name: "Folic Acid Tablets 400mcg", pack_size: '', category: "Vitamins & Supplements", subcategory: "Folic Acid", price: "1200" },
  { id: 16, image: "/images/products/manix.png", name: "Manix Capsule", pack_size: '', category: "Vitamins & Supplements", subcategory: "Men's Health", price: "1500" },
  { id: 17, image: '/images/products/feroglobin_capsules_front_CTFER030C8UK11E.png', name: "Feroglobin Capsule", pack_size: '', category: "Vitamins & Supplements", subcategory: "Tonics", price: "12000" },
  { id: 18, image: '/images/products/feroglobin-liquid-front-CTFER200L7WL6E_resized.png', name: "Feroglobin Syrup", pack_size: '', category: "Vitamins & Supplements", subcategory: "Tonics", price: "10000" },

  // Mother & Child Care
  // Example (to add later)
  // { id: 19, image: '/images/products/baby-formula.png', name: "Baby Formula", category: "Mother & Child Care", subcategory: "Infant Formula", price: "15000" },

  // Medical Devices & Health Tools
  { id: 19, image: "/images/products/equate-pregnancy-test-kit.png", name: "Equate Pregnancy Test Kit", pack_size: '', category: "Medical Devices & Health Tools", subcategory: "Test Kits", price: "2500" },
  { id: 20, image: "/images/products/predicte ovulation test kit.png", name: "Ovulation Test Kit (Predicte)", pack_size: '', category: "Medical Devices & Health Tools", subcategory: "Test Kits", price: "3500" },

  // Medicines
  // (Empty for now — add Antibiotics, Antihypertensives, etc. later)
];
