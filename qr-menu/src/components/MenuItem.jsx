import { useEffect, useState } from "react"
import SectionTitle from "./SectionTitle"

function MenuItem({ onAddToCart })
{
    const [selectedItem, setSelectedItem] = useState(null)

    const menuData=
    {
        Kahvaltiliklar:[

            {
                id: 1 , 
                name: "Breakfast Bowl",
                desc:"Tek kişilik zengin kahvaltı tabağı.",
                price: 450,
                image:"./images/breakfast-bowl.jpg",
                ingredients: [
                    ["2 haşlanmış yumurta", "145 kcal"],
                    ["3 adet köfte", "380 kcal"],
                    ["Avokado", "160 kcal"],
                    ["Tatlı patates", "90 kcal"],
                    ["Ispanak", "35 kcal"],
                    ["Mor lahana turşusu", "15 kcal"],
                    ["Pişirme yağı / diğer", "25 kcal"]
                ],
                nutrition: { calories: 850, protein: 50, carbs: 42, fat: 55 },
                note: "Protein, sağlıklı yağ ve lif bakımından zengin, oldukça doyurucu bir kahvaltı tabağı. Değerler fotoğraftan tahmin edilmiştir; gerçek değer yaklaşık 750–950 kcal aralığında olabilir."
            },
            {
                id:2,
                name:"İngiliz Kahvaltısı",
                desc:"Geleneksel İngiliz kahvaltısının doyurucu ve lezzetli sunumu.",
                price: 500,
                image: "./images/eng-breakfast.jpg",
                ingredients: [
                    ["Çırpılmış yumurta", "210 kcal"],
                    ["2 adet sosis", "260 kcal"],
                    ["Pastırma", "180 kcal"],
                    ["Fasulye", "130 kcal"],
                    ["Mantar", "35 kcal"],
                    ["Izgara domates", "25 kcal"],
                    ["Ekmek ve tereyağı", "145 kcal"]
                ],
                nutrition: { calories: 985, protein: 46, carbs: 72, fat: 61 },
                note: "Sosis, pastırma ve tereyağı nedeniyle yoğun ve doyurucu bir tabaktır. Porsiyon ve kullanılan yağ miktarı toplam değeri değiştirebilir."
            },
            {
                id:3,
                name:"Healthy Breakfast",
                desc:"Güne hafif, dengeli ve sağlıklı bir başlangıç.",
                price:450,
                image:"./images/healthy-breakfast.jpg",
                ingredients: [
                    ["2 adet sahanda yumurta", "180 kcal"],
                    ["Kavrulmuş patates", "180 kcal"],
                    ["Avokado", "160 kcal"],
                    ["Biber ve soğan", "45 kcal"],
                    ["Pişirme yağı", "40 kcal"],
                    ["Baharatlar", "15 kcal"]
                ],
                nutrition: { calories: 620, protein: 27, carbs: 48, fat: 39 },
                note: "Yumurta ve avokadodan protein ve sağlıklı yağ, sebzelerden ise lif sağlayan dengeli bir tabaktır. Tahmini toplam değer 550–700 kcal arasında değişebilir."
            }
        ],
        AnaYemekler: [
            {
                id: 4,
                name: "Izgara Biftek",
                desc: "Izgara sebzeler ve patates eşliğinde yumuşak biftek.",
                price: 780,
                image: "./images/grilled-steak.jpg",
                ingredients: [["Izgara biftek", "420 kcal"], ["Patates", "180 kcal"], ["Izgara sebzeler", "70 kcal"], ["Sos ve pişirme yağı", "90 kcal"]],
                nutrition: { calories: 760, protein: 54, carbs: 38, fat: 45 },
                note: "Bifteğin gramajı ve yağ oranı toplam değeri en çok etkileyen unsurlardır. Tahmini değer porsiyona göre değişebilir."
            },
            
        ],
        Tatlilar: [
            {
                id: 5,
                name: "Lasagna Dessert",
                desc: "Katmanlı kreması, çikolatası ve bisküvi dokusuyla özel tatlı sunumu.",
                price: 560,
                image: "./images/lasagna.jpg",
                ingredients: [["Krema ve mascarpone", "240 kcal"], ["Çikolata ve kakao", "180 kcal"], ["Bisküvi katmanları", "140 kcal"], ["Karamel sos", "80 kcal"]],
                nutrition: { calories: 640, protein: 9, carbs: 70, fat: 35 },
                note: "Porsiyon büyüklüğüne, krema ve çikolata miktarına göre değerler değişebilir. Bu değerler tek porsiyon tatlı için yaklaşık olarak hesaplanmıştır."
            },
            {
                id: 6,
                name: "Karamelli Dondurma",
                desc: "Karamel sosla servis edilen soğuk ve kremalı dondurma.",
                price: 280,
                image: "./images/caramel-topped-icecream.jpg",
                ingredients: [["Vanilyalı dondurma", "270 kcal"], ["Karamel sos", "90 kcal"], ["Kırıntı ve süsleme", "45 kcal"]],
                nutrition: { calories: 405, protein: 6, carbs: 52, fat: 19 },
                note: "Dondurma topunun büyüklüğüne ve karamel sos miktarına göre değerler değişebilir."
            },
            {
                id: 7,
                name: "Çikolatalı Parfe",
                desc: "Yoğun çikolata, krema ve çıtır katmanlarla hazırlanan parfe.",
                price: 320,
                image: "./images/chocolate-parfait.jpg",
                ingredients: [["Çikolatalı krema", "240 kcal"], ["Kakao ve çikolata", "120 kcal"], ["Bisküvi katmanı", "110 kcal"], ["Süsleme", "35 kcal"]],
                nutrition: { calories: 505, protein: 7, carbs: 58, fat: 27 },
                note: "Çikolata ve krema içeriği yüksek, yoğun kıvamlı bir tatlıdır. Tahmini değer tek bardak porsiyon içindir."
            },
            {
                id: 8,
                name: "Limonlu Cheesecake",
                desc: "Limon aromalı kremalı cheesecake ve ince bisküvi tabanı.",
                price: 300,
                image: "./images/lemon-curd-cheesecake.jpg",
                ingredients: [["Krem peynir dolgusu", "290 kcal"], ["Bisküvi tabanı", "145 kcal"], ["Limon kreması", "75 kcal"]],
                nutrition: { calories: 510, protein: 8, carbs: 49, fat: 31 },
                note: "Cheesecake diliminin kalınlığına ve tabandaki tereyağı miktarına göre yaklaşık 450–600 kcal aralığında olabilir."
            }
        ],
        Icecekler: [
            {
                id: 9,
                name: "Americano",
                desc: "Espresso ve sıcak suyla hazırlanan sade kahve.",
                price: 150,
                image: "./images/americano.jpg",
                ingredients: [["Espresso", "5 kcal"], ["Sıcak su", "0 kcal"]],
                nutrition: { calories: 5, protein: 0, carbs: 1, fat: 0 },
                note: "Şeker veya süt eklenmeden hazırlanmıştır. Eklenen her şeker ve süt porsiyonu besin değerini değiştirir."
            },
            {
                id: 10,
                name: "Cortado",
                desc: "Espresso ve az miktarda sıcak sütle hazırlanan dengeli kahve.",
                price: 180,
                image: "./images/cortado.jpg",
                ingredients: [["Espresso", "5 kcal"], ["Süt", "45 kcal"]],
                nutrition: { calories: 50, protein: 3, carbs: 4, fat: 3 },
                note: "Hesaplama yaklaşık 60 ml süt kullanılan tek fincan cortado içindir."
            },
            {
                id: 11,
                name: "Espresso",
                desc: "Yoğun aromalı, kısa ve güçlü kahve deneyimi.",
                price: 130,
                image: "./images/espresso.jpg",
                ingredients: [["Espresso kahvesi", "5 kcal"]],
                nutrition: { calories: 5, protein: 0, carbs: 1, fat: 0 },
                note: "Şeker ve süt eklenmeden hazırlanmıştır."
            },
            {
                id: 12,
                name: "Latte",
                desc: "Espresso ve bol köpüklü sıcak sütle hazırlanan yumuşak içim.",
                price: 190,
                image: "./images/latte.jpg",
                ingredients: [["Espresso", "5 kcal"], ["Süt", "95 kcal"]],
                nutrition: { calories: 100, protein: 6, carbs: 10, fat: 5 },
                note: "Hesaplama yaklaşık 200 ml tam yağlı süt kullanılan latte içindir."
            },
            {
                id: 13,
                name: "Çay",
                desc: "Sıcak ve sade demlenmiş siyah çay.",
                price: 90,
                image: "./images/tea.jpg",
                ingredients: [["Demli çay", "2 kcal"]],
                nutrition: { calories: 2, protein: 0, carbs: 0, fat: 0 },
                note: "Şeker eklenmeden hazırlanmıştır."
            },
            {
                id: 14,
                name: "Kola",
                desc: "Soğuk ve gazlı klasik kola.",
                price: 120,
                image: "./images/cola.jpg",
                ingredients: [["Kola, 330 ml", "139 kcal"]],
                nutrition: { calories: 139, protein: 0, carbs: 35, fat: 0 },
                note: "Değerler yaklaşık 330 ml standart kola kutusu içindir."
            },
            {
                id: 15,
                name: "Su",
                desc: "Soğuk ve ferahlatıcı içme suyu.",
                price: 50,
                image: "./images/water.jpg",
                ingredients: [["İçme suyu", "0 kcal"]],
                nutrition: { calories: 0, protein: 0, carbs: 0, fat: 0 },
                note: "Sade su kalori ve makro besin içermez."
            }
        ]
    }

    useEffect(() => {
        const closeOnEscape = (event) => {
            if (event.key === "Escape") setSelectedItem(null)
        }

        document.addEventListener("keydown", closeOnEscape)
        return () => document.removeEventListener("keydown", closeOnEscape)
    }, [])




    return(
        <>
        {Object.entries(menuData).map(([category, items]) => (
            <section key={category}>
                <SectionTitle title={{ Kahvaltiliklar: "Kahvaltılıklar", AnaYemekler: "Ana Yemekler", Tatlilar: "Tatlılar", Icecekler: "İçecekler" }[category]} />
                <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <button
                            type="button"
                            key={item.id}
                            onClick={() => setSelectedItem(item)}
                            className="overflow-hidden rounded-lg bg-white text-left shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <img src={item.image} alt={item.name} className="h-56 w-full object-cover" />
                            <div className="p-4">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-2xl font-bold">{item.name}</h3>
                                    <span className="shrink-0 text-lg font-bold">₺{item.price}</span>
                                </div>
                                <p className="mt-2 text-gray-600">{item.desc}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </section>
        ))}

        {selectedItem && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                role="presentation"
                onClick={() => setSelectedItem(null)}
            >
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="menu-detail-title"
                    className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-white shadow-2xl"
                    onClick={(event) => event.stopPropagation()}
                >
                    <div className="grid md:grid-cols-2">
                        <img
                            src={selectedItem.image}
                            alt={selectedItem.name}
                            className="h-72 w-full object-cover md:h-full md:min-h-130"
                        />
                        <div className="p-6 md:p-8">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h2 id="menu-detail-title" className="text-3xl font-bold">{selectedItem.name}</h2>
                                    <p className="mt-2 text-gray-600">{selectedItem.desc}</p>
                                </div>
                                <button
                                    type="button"
                                    aria-label="Detay ekranını kapat"
                                    onClick={() => setSelectedItem(null)}
                                    className="text-2xl leading-none text-gray-500 hover:text-black"
                                >
                                    ×
                                </button>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                <div className="rounded-lg bg-orange-50 p-3">
                                    <strong className="block text-xl">{selectedItem.nutrition.calories}</strong>
                                    <span className="text-sm text-gray-600">kcal</span>
                                </div>
                                <div className="rounded-lg bg-green-50 p-3">
                                    <strong className="block text-xl">{selectedItem.nutrition.protein} g</strong>
                                    <span className="text-sm text-gray-600">protein</span>
                                </div>
                                <div className="rounded-lg bg-blue-50 p-3">
                                    <strong className="block text-xl">{selectedItem.nutrition.carbs} g</strong>
                                    <span className="text-sm text-gray-600">karbonhidrat</span>
                                </div>
                                <div className="rounded-lg bg-yellow-50 p-3">
                                    <strong className="block text-xl">{selectedItem.nutrition.fat} g</strong>
                                    <span className="text-sm text-gray-600">yağ</span>
                                </div>
                            </div>

                            <h3 className="mt-7 text-xl font-bold">İçerik bazında tahmin</h3>
                            <ul className="mt-3 divide-y divide-gray-200">
                                {selectedItem.ingredients.map(([ingredient, calories]) => (
                                    <li key={ingredient} className="flex justify-between gap-4 py-2 text-sm">
                                        <span>{ingredient}</span>
                                        <span className="font-semibold">{calories}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-5 text-sm leading-6 text-gray-600">{selectedItem.note}</p>
                            <div className="mt-5 flex items-center justify-between gap-4">
                                <p className="text-2xl font-bold">₺{selectedItem.price}</p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        onAddToCart(selectedItem)
                                        setSelectedItem(null)
                                    }}
                                    className="rounded-md bg-[#15370D] px-4 py-3 font-semibold text-white transition hover:bg-[#245b18]"
                                >
                                    Sepete ekle
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </> 
    )
}

export default MenuItem