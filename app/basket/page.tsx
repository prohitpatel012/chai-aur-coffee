"use client"

import Image from "next/image"
import Link from "next/link"
import { useCartStore } from "@/lib/useCartStore"

export default function BasketPage() {
  const items = useCartStore((state) => state.items)
  const totalAmount = useCartStore((state) => state.totalAmount())
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeItem = useCartStore((state) => state.removeItem)
  const clear = useCartStore((state) => state.clear)

  const hasItems = items.length > 0

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Your Basket</h1>
          <p className="text-gray-600">Review your items before checkout.</p>
        </div>
        <Link
          href="/"
          className="text-sm font-semibold text-black bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200"
        >
          Continue Shopping
        </Link>
      </header>

      {!hasItems ? (
        <div className="text-center py-20">
          <p className="text-lg font-medium">Your basket is empty.</p>
          <p className="text-gray-600 mt-2">Add a few items and they will be saved here.</p>
          <Link
            href="/"
            className="mt-6 inline-block text-sm font-semibold text-white bg-black px-6 py-3 rounded-lg hover:bg-gray-800"
          >
            Browse Menu
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-[1fr_140px] gap-4 items-center p-4 border rounded-lg"
              >
                <div className="flex items-start gap-4">
                  {item.coverImage ? (
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                  ) : null}

                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-600">₹{item.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 items-start md:items-end">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="px-3 py-1 rounded-lg border border-gray-300 bg-white text-sm hover:bg-gray-50"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="min-w-[32px] text-center">{item.quantity}</span>
                    <button
                      type="button"
                      className="px-3 py-1 rounded-lg border border-gray-300 bg-white text-sm hover:bg-gray-50"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="text-sm text-red-600 hover:text-red-800"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                    <span className="text-sm text-gray-600">
                      Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <button
              type="button"
              className="w-full md:w-auto text-sm font-medium text-red-600 hover:text-red-800"
              onClick={clear}
            >
              Clear basket
            </button>

            <div className="rounded-lg border p-4 w-full md:w-auto">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total</span>
                <span className="text-xl font-bold">₹{totalAmount.toFixed(2)}</span>
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800"
                onClick={() => alert("Checkout not implemented yet.")}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
