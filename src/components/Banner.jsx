import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="min-h-[70vh] flex items-center relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50">
            <div className="border container mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row items-center gap-8">

                    {/* Left Side - Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-block mb-4 px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-xs font-semibold">
                            🐾 Join the Movement
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                            Give a Pet a{" "}
                            <span className="text-emerald-500">Second Chance</span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 text-base mb-6 max-w-lg mx-auto lg:mx-0">
                            Every pet deserves a loving home. Start your adoption journey today
                            and bring unconditional happiness to your life.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <Link
                                href="/all-pets"
                                className="px-6 py-2.5 bg-emerald-500 text-white rounded-lg text-sm font-semibold hover:bg-emerald-600 transition shadow-md hover:shadow-lg text-center"
                            >
                                Adopt Now →
                            </Link>
                        </div>

                        {/* Simple Stats */}
                        <div className="flex gap-6 mt-6 justify-center lg:justify-start">
                            <div>
                                <div className="text-xl font-bold text-emerald-600">500+</div>
                                <div className="text-xs text-gray-500">Happy Pets</div>
                            </div>
                            <div>
                                <div className="text-xl font-bold text-emerald-600">2k+</div>
                                <div className="text-xs text-gray-500">Families</div>
                            </div>
                            <div>
                                <div className="text-xl font-bold text-emerald-600">100%</div>
                                <div className="text-xs text-gray-500">Safe</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Only Image (No Card) */}
                    <div className="flex-1 relative">
                        <div className="relative group">
                            {/* Background Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-300 to-blue-300 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>

                            {/* Image Container */}
                            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                                <Image
                                    src="https://res.cloudinary.com/dao8rjwiw/image/upload/v1779072138/file-20241010-15-95v3ha_oswqel.avif"
                                    alt="Happy Dog"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"
                                    priority
                                />

                                {/* Overlay Effect on Hover */}
                                <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition duration-300"></div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-3 -right-3 w-16 h-16 bg-emerald-500 rounded-full opacity-20 blur-xl"></div>
                            <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;