import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components";
import { ProductCard } from "@/components";
import { products } from "@/data";
import type { Product } from "@/types/product.type";

type GroupedProducts = {
  [category: string]: Product[];
};

const grouped = products.reduce<GroupedProducts>((groups, product) => {
  const { category } = product;
  if (!category) return groups;
  if (!groups[category]) groups[category] = [];
  groups[category].push(product);
  return groups;
}, {});

const productCategories = Object.keys(grouped);

export default function ProductList() {
  return (
    <Tabs defaultValue={productCategories[1]}>
      <TabsList className="w-full h-auto md:w-2/3 my-4 bg-gray-300 rounded-sm flex flex-wrap px-2 py-1">
        {productCategories.map((category) => (
          <TabsTrigger
            key={category}
            value={category}
            className="font-semibold cursor-pointer capitalize px-4 py-1 rounded"
          >
            {category}
          </TabsTrigger>
        ))}
      </TabsList>

      {productCategories.map((category) => (
        <TabsContent key={category} value={category}>
          <div className="p-3 sm:p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 place-items-center">
              {grouped[category].map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
