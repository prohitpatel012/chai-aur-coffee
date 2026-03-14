"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"
import { TbBasketDiscount } from "react-icons/tb"
import { useCartStore } from "@/lib/useCartStore"

function Header() {

  const totalItems = useCartStore((state) => state.totalItems())
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    // Avoid hydration mismatch between server and client.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHydrated(true)
  }, [])

  return (

    <header className='sticky top-0 w-full 
     shadow-sm bg-white z-50'>

      <div className='max-w-7xl mx-auto flex items-center justify-between py-3'>

        {/* Logo */}
        <Link
          href="/"
          className="text-md md:text-xl font-bold bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition"
        >
          Chai aur Coffee Shop
        </Link>

        {/* Basket */}
        <Link
          href="/basket"
          className="flex items-center gap-2 text-gray-700 font-semibold px-3 py-2 rounded-full hover:bg-gray-100 transition"
        >

          <div className="relative flex items-center gap-1">

            <TbBasketDiscount size={24} />

            {/* Basket Count Text */}
            {/* {hydrated && totalItems > 0 && (
              <span className="text-sm font-semibold text-red-500">
                {totalItems}
              </span>
            )} */}

            {/* Badge */}
            {hydrated && totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-[18px] h-[18px] text-[10px] font-semibold text-white bg-red-500 rounded-full px-1">
                {totalItems}
              </span>
            )}

          </div>

          {/* <span className="hidden sm:block">
            Basket
          </span> */}

        </Link>

      </div>

    </header>

  )
}

export default Header