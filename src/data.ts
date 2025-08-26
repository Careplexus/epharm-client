export type Product = {
  id: number;
  image: string;
  name: string;
  pack_size?: string;
  category: string;
  price: string;
};

export const products: Product[] = [
  // Dermaceuticals (renamed from "Skincare")
  { id: 9, image: '/images/products/Oriflame Bright Intense Serum.webp', name: "Oriflame Bright Serum", category: "Dermaceuticals", price: "8000" },
  { id: 10, image: '/images/products/Oriflame Radiance Face Gel.webp', name: "Oriflame Face Gel", category: "Dermaceuticals", price: "23000" },
  { id: 11, image: "/images/products/benzoyl-peroxide-gel.png", name: "Benzoyl Peroxide Gel 10%", category: "Dermaceuticals", price: "4000" },
  { id: 12, image: "/images/products/salicylic-acid-face-wash.png", name: "Salicylic Acid Face Wash", category: "Dermaceuticals", price: "3500" },
  { id: 13, image: "/images/products/clindamycin-lotion.png", name: "Clindamycin Phosphate Topical Lotion", category: "Dermaceuticals", price: "5000" },
  { id: 14, image: "/images/products/niacinamide-serum.png", name: "Niacinamide Serum 10%", category: "Dermaceuticals", price: "6000" },
  { id: 15, image: "/images/products/zinc-for-acne.png", name: "Puritan Zinc for Acne", category: "Dermaceuticals", price: "2000" },
  { id: 16, image: "/images/products/CeraVe Hydrating Facial Cleanser.png", name: "CeraVe Hydrating Facial Cleanser", category: "Dermaceuticals", price: "7500" },

  // Reproductive Health
  { id: 17, image: "/images/products/equate-pregnancy-test-kit.png", name: "Equate Pregnancy Test Kit", category: "Reproductive Health", price: "2500" },
  { id: 18, image: "/images/products/nature's field folite.png", name: "Folic Acid Tablets 400mcg", category: "Reproductive Health", price: "1200" },
  { id: 19, image: '/images/products/Pregnacare Him&Her Conception.png', name: "Pregnacare - Him&Her Conception", category: "Reproductive Health", price: "24000" },
  { id: 20, image: '/images/products/Pregnacare before Conception.png', name: "Pregnacare - Before Conception", category: "Reproductive Health", price: "21500" },
  { id: 21, image: "/images/products/predicte ovulation test kit.png", name: "Ovulation Test Kit (Predicte)", category: "Reproductive Health", price: "3500" },
  { id: 22, image: "/images/products/manix.png", name: "Manix Capsule", category: "Reproductive Health", price: "1500" },

  // Supplements & Tonics
  { id: 23, image: '/images/products/feroglobin_capsules_front.png', name: "Feroglobin Capsule", category: "Supplements & Tonics", price: "12000" },
  { id: 24, image: '/images/products/feroglobin-liquid.png', name: "Feroglobin Syrup", category: "Supplements & Tonics", price: "10000" },
  { id: 25, image: '/images/products/glutaberry.jpg', name: "Gluta Berry", category: "Supplements & Tonics", price: "24000" },
  { id: 26, image: '/images/products/Menopaceoriginal.png', name: "Menopace", category: "Supplements & Tonics", price: "17400" },
  { id: 27, image: '/images/products/MenopacePlusFront.png', name: "Menopace Plus", category: "Supplements & Tonics", price: "20000" },
  { id: 28, image: '/images/products/Perfectilmax.png', name: "Perfectil Max", category: "Supplements & Tonics", price: "18000" },

  // Medical Devices
  { id: 29, image: "/images/products/blood-pressure-monitor.png", name: "Digital Blood Pressure Monitor", category: "Medical Devices", price: "35000" },

  // Medicines
  { id: 30, image: '/images/products/paracetamol.png', name: "Paracetamol Tablets", category: "Medicines", price: "1500" },
  { id: 31, image: '/images/products/amoxicillin.png', name: "Amoxicillin Capsules", category: "Medicines", price: "2500" },

  // Injectables
  // You can add later
];
