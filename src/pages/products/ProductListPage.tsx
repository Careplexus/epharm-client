import { ProductList } from "@/components"

export default function ProductListPage (){
    return(
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2 py-4">
            <main className="col-span-2 md:col-span-3">
                <ProductList />
            </main>
            <aside className="hidden md:block">
                <h2>Newly Added Products</h2>
            </aside>
           
        </div>
    )
}