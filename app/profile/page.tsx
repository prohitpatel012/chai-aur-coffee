'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/lib/useAuthStore"

export default function ProfilePage() {
  const router = useRouter()
  const loggedIn = useAuthStore((state) => state.loggedIn)
  const email = useAuthStore((state) => state.email)
  const logout = useAuthStore((state) => state.logout)

  useEffect(() => {
    if (!loggedIn) {
      router.replace('/login')
    }
  }, [loggedIn, router])

  if (!loggedIn) {
    return (
      <div className="max-w-7xl mx-auto py-16 text-center">
        <p className="text-gray-600">Redirecting...</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto py-16">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Profile</h1>
        <p className="text-gray-700 mb-6">Logged in as <span className="font-semibold">{email ?? 'Unknown'}</span></p>
        <button
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          onClick={() => {
            logout()
            router.push('/login')
          }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}
