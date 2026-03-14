"use client"

import React, { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { useCartStore } from "@/lib/useCartStore"

const products = [
    {
        id: "tea_001",
        title: "Masala Chai",
        slug: "masala-chai",
        category: "tea",
        price: 120,
        stock: 50,
        coverImage:
            "https://plus.unsplash.com/premium_photo-1671379526961-1aebb82b317b?w=500&auto=format&fit=crop&q=60",
        description:
            "Traditional Indian masala chai brewed with spices like cardamom, cinnamon and ginger.",
    },
    {
        id: "tea_002",
        title: "Ginger Tea",
        slug: "ginger-tea",
        category: "tea",
        price: 110,
        stock: 40,
        coverImage:
            "https://plus.unsplash.com/premium_photo-1661594835845-7035de5abb30?w=500&auto=format&fit=crop&q=60",
        description:
            "Warm ginger infused tea known for its strong aroma and immunity boosting properties.",
    },
    {
        id: "tea_003",
        title: "Green Tea",
        slug: "green-tea",
        category: "tea",
        price: 150,
        stock: 60,
        coverImage:
            "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=500&auto=format&fit=crop&q=60",
        description:
            "Refreshing antioxidant-rich green tea that supports detox and healthy living.",
    },
    {
        id: "tea_004",
        title: "Lemon Tea",
        slug: "lemon-tea",
        category: "tea",
        price: 100,
        stock: 35,
        coverImage:
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&auto=format&fit=crop&q=60",
        description:
            "Tangy lemon tea that is refreshing, light and perfect for digestion.",
    },
    {
        id: "tea_005",
        title: "Tulsi Herbal Tea",
        slug: "tulsi-herbal-tea",
        category: "tea",
        price: 130,
        stock: 25,
        coverImage:
            "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop&q=60",
        description:
            "Ayurvedic herbal tea made from tulsi leaves known for reducing stress and improving immunity.",
    },
    {
        id: "coffee_001",
        title: "Cappuccino",
        slug: "cappuccino",
        category: "coffee",
        price: 180,
        stock: 30,
        coverImage:
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=60",
        description:
            "Classic cappuccino with steamed milk and rich espresso foam.",
    },
    {
        id: "coffee_002",
        title: "Latte",
        slug: "latte",
        category: "coffee",
        price: 190,
        stock: 35,
        coverImage:
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=500&auto=format&fit=crop&q=60",
        description:
            "Smooth and creamy latte made with espresso and steamed milk.",
    },
]

const categories = [
    { id: 1, title: "tea" },
    { id: 2, title: "coffee" },
]

function Products() {
    const [activeCategory, setActiveCategory] = useState("all")
    const addItem = useCartStore((state) => state.addItem)

    const filteredProducts = useMemo(() => {
        if (activeCategory === "all") return products
        return products.filter((p) => p.category === activeCategory)
    }, [activeCategory])

    const handleAddToCart = (product: typeof products[number]) => {
        addItem({
            id: product.id,
            title: product.title,
            price: product.price,
            coverImage: product.coverImage,
        })
    }

    return (
        <div className="max-w-7xl mx-auto">

            {/* Filter Buttons */}
            <div className="py-10 flex flex-wrap gap-3 mx-4   md:mx-0">

                <button
                    onClick={() => setActiveCategory("all")}
                    className={`px-4 py-2 rounded-lg border ${activeCategory === "all"
                        ? "bg-black text-white"
                        : "bg-white text-black"
                        }`}
                >
                    All
                </button>

                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.title)}
                        className={`px-4 py-2 rounded-lg border capitalize ${activeCategory === cat.title
                            ? "bg-black text-white"
                            : "bg-white text-black"
                            }`}
                    >
                        {cat.title}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {filteredProducts.map((product) => (

                    <div
                        key={product.id}
                        className="p-4 shadow hover:shadow-lg rounded-lg transition hover:scale-105"
                    >

                        <Link href={`/products/${product.slug}`} passHref>
                            <Image
                                src={product.coverImage}
                                alt={product.title}
                                width={500}
                                height={300}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />

                            <h2 className="text-xl font-semibold mb-2">
                                {product.title}
                            </h2>

                            <p className="text-gray-600 mb-2 line-clamp-2">
                                {product.description}
                            </p>

                            <div className="flex justify-between items-center">
                                <p className="text-gray-800 font-bold">
                                    ₹{product.price}
                                </p>

                                {/* Rating  */}

                                <div className="flex items-center space-x-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-yellow-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.538 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.783.57-1.838-.197-1.538-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.293 9.403c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.966z" />
                                    </svg>
                                    <span className="text-gray-600 text-sm">4.5</span>
                                </div>
                            </div>
                        </Link>

                        <div className="mt-4">
                            <button
                                className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default Products