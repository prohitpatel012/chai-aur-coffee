import Image from 'next/image'


function Hero() {
    return (
        <div className='py-4'>
            {/* QR Scanner */}
            <div className="max-w-7xl mx-auto py-4">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        Welcome to Chai aur Coffee Shop!
                    </h1>
                    <p className="text-gray-600 mt-3 text-md font-medium">
                        Select Items and Scan QR Code to Order Your Favorite Chai, Coffee, and Snacks!
                    </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* QR Image */}
                    <div className="flex justify-center border-black border-2 rounded-xl p-4 shadow mx-4 md:mx-0">
                        <Image
                            src="/QR-scan.png"
                            width={300}
                            height={300}
                            alt="QR Code"   
                            className=""
                        />
                    </div>

                    {/* Right Side Content */}
                    <div className="space-y-4 text-center lg:text-left">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Quick & Easy Ordering
                        </h2>

                        <p className="text-gray-600">
                            Simply scan the QR code using your phone camera and explore our
                            delicious range of chai, coffee, and snacks. Place your order
                            directly from your mobile without waiting in line.
                        </p>

                        <p className="text-gray-600">
                            Enjoy a seamless ordering experience and get your favorite drink
                            prepared fresh just for you.
                        </p>

                        <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
                            View Menu
                        </button>
                    </div>

                </div>

            </div>

            {/* About my Website and Images */}
        </div>
    )
}

export default Hero