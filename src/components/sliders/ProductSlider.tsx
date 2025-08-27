import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, Maximize2 } from "lucide-react";
import { slugify } from "@/lib/slugify";

interface Product {
  id: string | number;
  name: string;
  image: string;
}

interface ProductSliderProps {
  title?: string;
  products: Product[];
  showWishlist?: boolean;
}

export default function ProductSlider({
  title,
  products,
  showWishlist = true,
}: ProductSliderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPath = location.state?.from || "/";

  const handleClick = (id: string | number) => {
    navigate(`/product/${id}`, { state: { from: previousPath } });
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-4">
      {title && (
            <motion.h2 
      initial={{ opacity: 0, y: -12 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex justify-between items-center text-sm md:text-md font-semibold mb-3 px-3 py-2 rounded-sm tracking-wide bg-gradient-to-r from-indigo-100 via-blue-50 to-white md:bg-gray-50/50 shadow-sm"
    >
      <span className="text-indigo-600 sm:text-emerald-600 font-bold sm:font-semibold">{title}</span>
      <span className="cursor-pointer bg-white w-9 h-9 sm:w-7 sm:h-7 rounded-lg flex justify-center items-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
        <Link to={`/products/${slugify(title || "")}`}>
          <Maximize2 size={18} className="text-indigo-600 sm:text-emerald-600" />
        </Link>
      </span>
    </motion.h2>

      )}

      <Carousel className="w-full bg-blue-50/20 relative shadow-sm rounded-lg">
        <CarouselContent className="flex">
          {products.map((item, i) => (
            <CarouselItem
              key={item.id}
              className="p-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
              <div className="relative">
                {showWishlist && (
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    title="Add to wishlist"
                    className="absolute top-2 right-2 p-1 rounded-full bg-white/80 hover:bg-white shadow z-20"
                  >
                    <Heart
                      size={16}
                      className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                    />
                  </motion.button>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="relative flex flex-col items-center bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition cursor-pointer"
                  onClick={() => handleClick(item.id)}
                >
                  <div className="w-full flex items-center justify-center">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="
                      h-28 w-28         
                      sm:h-24 sm:w-24    
                      md:h-24 md:w-24   
                      object-contain
                      max-w-full max-h-full
                    "
                    whileHover={{ scale: 1.08 }}   // smooth hover zoom
                    whileTap={{ scale: 0.95 }}     // subtle feedback on tap (great UX)
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>
                  <p className="mt-2 text-xs sm:text-sm font-medium text-gray-700 text-center line-clamp-1">
                    {item.name}
                  </p>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          type="button"
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full hidden sm:flex"
        />
        <CarouselNext
          type="button"
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full hidden sm:flex"
        />
      </Carousel>
    </div>
  );
}
