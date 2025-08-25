import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Heart, Maximize2 } from "lucide-react"
import { Link } from "react-router-dom"

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
      {title && (
        <h2 className="flex justify-between items-center font-bold text-sm font-semibold mb-2 px-2 uppercase bg-blue-50/20 tracking-wide text-emerald-600">
          <span>{title}</span>
          <span className="cursor-pointer bg-white w-7 h-7 rounded-lg flex justify-center items-center shadow-sm hover:shadow">
            <Maximize2 size={16} />
          </span>
        </h2>
      )}

      <Carousel className="w-full bg-blue-50/20 relative shadow-sm rounded-lg">
        <CarouselContent>
          {products.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-1 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 p-2"
            >
              <div className="relative flex flex-col items-center bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition">
                {showWishlist && (
                  <button
                    type="button"
                    title="Add to wishlist"
                    className="absolute top-2 right-2 p-1 rounded-full bg-white/80 hover:bg-white shadow"
                  >
                    <Heart
                      size={16}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    />
                  </button>
                )}

                <Link to={`/product/${item.id}`} className="flex flex-col items-center w-full">
                  <div className="w-full flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain"
                    />
                  </div>
                </Link>

                <p className="mt-2 text-xs sm:text-sm font-medium text-gray-700 text-center line-clamp-1">
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
