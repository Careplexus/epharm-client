export default function CartSummary() {
   return (
     <section>
        <div className="grid grid-cols-1">
            <div><p>Subtotal</p></div>
            <div>Discount: </div>
            <div>Taxes: </div>
            <div>Grand Total: </div>
            <div>
                <button>Back to Cart</button>
                <button>Proceed to Checkout</button>
            </div>
        </div>
    </section>
   )
}