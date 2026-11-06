import MenuItem from "./components/MenuItem"
import Navbar from "./components/Navbar"
import { useState } from "react"

function Cart({ items, onChangeQuantity, onRemove, onClose }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div
      className="fixed inset-0 z-40 bg-black/50"
      role="presentation"
      onClick={onClose}
    >
      <aside
        className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-white p-6 shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 id="cart-title" className="text-3xl font-bold">Sepetim</h2>
          <button type="button" onClick={onClose} className="text-2xl text-gray-500 hover:text-black" aria-label="Sepeti kapat">
            ×
          </button>
        </div>

        {items.length === 0 ? (
          <p className="mt-8 text-gray-600">Sepetiniz henüz boş.</p>
        ) : (
          <>
            <div className="mt-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 border-b border-gray-200 pb-4">
                  <img src={item.image} alt="" className="h-20 w-20 rounded-md object-cover" />
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between gap-2">
                      <h3 className="font-semibold">{item.name}</h3>
                      <strong>₺{item.price * item.quantity}</strong>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">₺{item.price} / adet</p>
                    <div className="mt-2 flex items-center gap-3">
                      <button type="button" onClick={() => onChangeQuantity(item.id, item.quantity - 1)} className="h-7 w-7 rounded border" aria-label={`${item.name} adet azalt`}>−</button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() => onChangeQuantity(item.id, item.quantity + 1)} className="h-7 w-7 rounded border" aria-label={`${item.name} adet artır`}>+</button>
                      <button type="button" onClick={() => onRemove(item.id)} className="ml-auto text-sm text-red-600 hover:underline">Kaldır</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-gray-300 pt-5 text-2xl font-bold">
              <span>Toplam</span>
              <span>₺{total}</span>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

function App() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (item) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((cartItem) => cartItem.id === item.id)

      if (existingItem) {
        return currentCart.map((cartItem) => cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem)
      }

      return [...currentCart, { ...item, quantity: 1 }]
    })
  }

  const changeQuantity = (itemId, quantity) => {
    if (quantity < 1) {
      setCart((currentCart) => currentCart.filter((item) => item.id !== itemId))
      return
    }

    setCart((currentCart) => currentCart.map((item) => item.id === itemId ? { ...item, quantity } : item))
  }

  const removeFromCart = (itemId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== itemId))
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <>
     <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
     <MenuItem onAddToCart={addToCart} />
     {isCartOpen && (
       <Cart
         items={cart}
         onChangeQuantity={changeQuantity}
         onRemove={removeFromCart}
         onClose={() => setIsCartOpen(false)}
       />
     )}
    <footer className="mt-10 border-t border-gray-200 bg-[#f7f5ef] px-6 py-2 text-center">
       <p className="cafe-font text-sm text-[#15370D]">Made by <strong>Elmar Ramazanov</strong></p>
     </footer>
    </>
  )
}

export default App
