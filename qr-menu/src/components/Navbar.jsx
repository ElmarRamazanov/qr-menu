function Navbar({ cartCount, onCartClick })
{
    return(
        <header className="border-b border-[#31552a] bg-[#15370D] px-5 text-white shadow-md">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4">
        <a href="#" className="cafe-font flex items-center gap-3">
        <span className="text-3xl" aria-hidden="true">☕</span>
        <div>
            <div className="text-2xl font-bold leading-tight">Example Cafe</div>
            <div className="font-sans text-xs uppercase tracking-[0.2em] text-white/70">Coffee · Breakfast · Dessert</div>
        </div>
        </a>
        <button
            type="button"
            onClick={onCartClick}
            className="flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
            aria-label={`Sepeti aç, ${cartCount} ürün`}
        >
            <span aria-hidden="true">🛒</span>
            <span>Sepet</span>
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-1 text-xs text-[#15370D]">{cartCount}</span>
        </button>
        </div>
        </header>
    )
}

export default Navbar