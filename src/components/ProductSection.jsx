


import { Heart, Eye, ShoppingCart, Star } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export default function ProductSection() {

    const authCtx = useContext(AuthContext);

    const products = [
        {
            id: 1,
            name: "Dji Mavic Pro Drone Shipper",
            category: "Drones",
            price: 999,
            image:
                "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600",
        },
        {
            id: 2,
            name: "Beats Solo 2 Headphones",
            category: "Headphones",
            price: 199,
            image:
                "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?q=80&w=600",
        },
        {
            id: 3,
            name: "Macbook Pro Macbook Air",
            category: "Laptop",
            price: 2500,
            image:
                "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600",
        },
        {
            id: 4,
            name: "Samsung Galaxy S9",
            category: "Smart Phone",
            price: 1050,
            image:
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600",
        },
    ];


    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Best Seller Product, Pick one you like</h2>
                    {
                        (authCtx.isLogin == true ) ? <h3>Welcome Ali</h3> :  <h3>Welcome Guest</h3>
                    }
                    
                   

                    <p className="text-gray-500 mt-2">
                        There are many variations of lorem ipsum available
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 group overflow-hidden"
                        >
                            {/* Image Section */}
                            <div className="relative bg-gray-100 p-6 flex justify-center items-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-40 object-contain"
                                />

                                {/* Hover Icons */}
                                <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition">
                                    <button className="bg-white p-2 rounded-full shadow hover:bg-indigo-600 hover:text-white transition">
                                        <Heart size={18} />
                                    </button>
                                    <button className="bg-white p-2 rounded-full shadow hover:bg-indigo-600 hover:text-white transition">
                                        <Eye size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 text-center">
                                <p className="text-sm text-gray-500">{product.category}</p>
                                <h3 className="font-semibold mt-1">{product.name}</h3>
                                <p className="mt-2 font-bold text-indigo-600">
                                    ${product.price}.00
                                </p>

                                {/* Rating */}
                                <div className="flex justify-center mt-2 text-yellow-500">
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>

                                {/* Add To Cart */}
                                <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-md hover:bg-indigo-600 transition flex items-center justify-center gap-2">
                                    <ShoppingCart size={18} />
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}