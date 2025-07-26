import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components"
import { ProductCard } from "@/components";
import { products } from "@/data";
import type { Product } from "@/types/product.type";


type GroupedProducts = {
  [category: string]: Product[];
};

const grouped = products.reduce<GroupedProducts>((groups, product) => {
  const { category } = product;

    if (!category) {
    return groups; 
  }

  if (!groups[category]) {
    groups[category] = [];
  }

  groups[category].push(product);

  return groups;
}, {});

const productCategories = Object.keys(grouped);

export default function ProductList() {
    return (
        <>
            <Tabs defaultValue="supplement">
                <TabsList className="w-full h-12 md:w-2/3 my-2 bg-gray-300 rounded-sm">
                    {productCategories.map((category) => (
                        <TabsTrigger key={category} value={category} className="font-semibold cursor-pointer">
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {productCategories.map((category) => (
                    <TabsContent key={category} value={category}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 place-items-center">
                            {grouped[category].map((product: Product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
          
        </>
    )
}