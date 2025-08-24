import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Heart } from "lucide-react"

interface Product {
  id: string | number
  name: string
  image: string
}

interface ProductSliderProps {
  title?: string
  products: Product[]
  showWishlist?: boolean
}

export default function ProductSlider({
  title,
  products,
  showWishlist = true,
}: ProductSliderProps) {
  return (
    <div className="w-full max-w-6xl mx-auto py-4">
      {/* Optional section title */}
      {title && (
        <h2 className="text-lg font-semibold text-gray-800 mb-2 px-2">
          {title}
        </h2>
      )}

      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {products.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-1 basis-1/3 sm:basis-1/4 md:basis-1/5"
            >
              <div className="relative flex flex-col items-center bg-white rounded-lg p-2">
                {/* Wishlist button */}
                {showWishlist && (
                  <button
                    type="button"
                    title="Add to wishlist"
                    className="absolute top-1 right-1 p-0.5 rounded-full bg-white/80 hover:bg-white shadow"
                  >
                    <Heart
                      size={14}
                      className="text-gray-400 hover:text-red-500"
                    />
                  </button>
                )}

                {/* Product image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 object-contain mb-1"
                />

                {/* Product name */}
                <p className="text-[11px] font-medium text-gray-700 text-center line-clamp-1">
                  {item.name}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious type="button" className="hidden sm:flex -left-6" />
        <CarouselNext type="button" className="hidden sm:flex -right-6" />
      </Carousel>
    </div>
  )
}
