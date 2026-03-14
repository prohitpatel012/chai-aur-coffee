'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/lib/useAuthStore"

function Login() {
    const router = useRouter()
    const login = useAuthStore((state) => state.login)
    const loggedIn = useAuthStore((state) => state.loggedIn)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        if (loggedIn) {
            router.replace('/')
        }
    }, [loggedIn, router])

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        // Simulate an API call delay
        await new Promise((resolve) => setTimeout(resolve, 500))

        const success = login(email, password)
        if (success) {
            router.push('/')
        } else {
            setError('Invalid email or password.')
        }

        setLoading(false)
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-center py-2 my-4'>Apka Swagat hai hamare Shop me app Login Kare</h1>

            <form
                className='max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md'
                onSubmit={handleLogin}
            >
                {error && (
                    <p className='text-red-600 mb-4 font-semibold'>{error}</p>
                )}
                <div className='mb-4'>
                    <label htmlFor='email' className='block text-gray-700 font-semibold mb-2'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='password' className='block text-gray-700 font-semibold mb-2'>Password:</label>
                    <input
                        type='password'
                        id='password'
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type='submit'
                    className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed'
                    disabled={loading}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    )
}

export default Login

