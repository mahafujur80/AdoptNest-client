import Image from "next/image";
import { FaHeart } from "react-icons/fa";

const successStories = [
  {
    id: 1,
    name: "Bella & John",
    story: "Found his forever home and lives happily with John.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJa6DhqXp1G3LlJKUGN6gjrhiYjbEdVYwEbw&s",
    location: "Dhaka",
    date: "March 2024",
  },
  {
    id: 2,
    name: "Luna & Sarah",
    story: "Now enjoys a peaceful life with Sarah after months in shelter.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpwaeSvY8cHXucks7SMVly0j9qxwFyC8n4vg&s",
    location: "Chittagong",
    date: "February 2024",
  },
  {
    id: 3,
    name: "Buddy & Ali",
    story: "Once abandoned, now a playful companion in Ali's home.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvTRuKNzV0urc2oaN4YU5mKTuEmxvS-mGCQ&s",
    location: "Sylhet",
    date: "January 2024",
  },
  {
    id: 4,
    name: "Bella & Rima",
    story: "Found a caring owner who gives her fresh vegetables daily.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_nnWJ4LRqaqmtZi7tir3Jx_HO6BGX8p2V5w&s",
    location: "Rajshahi",
    date: "December 2023",
  },
];

const SuccessStories = () => {
  return (
    <section className="py-10 px-4 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
          <FaHeart className="text-xs" />
          <span>Happy Tails</span>
        </div>
        
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Success Stories
        </h2>
        <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
          Real stories of pets who found their forever homes
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {successStories.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Image Container with Next.js Image */}
              <div className="relative h-40 w-full overflow-hidden bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  
                />
                {/* Heart Badge */}
                <div className="absolute top-2 right-2 bg-emerald-500 rounded-full p-1.5 shadow-md">
                  <FaHeart className="text-white text-[8px]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-3">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-800 ">
                    {item.name}
                  </h3>
                  <span className="text-[10px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                    {item.location}
                  </span>
                </div>
                
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {item.story}
                </p>
                
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                  <span className="text-[10px] text-gray-400">
                     {item.date}
                  </span>
                  <button className="text-emerald-500 text-[10px] font-medium hover:text-emerald-600 transition flex items-center gap-1">
                    Read more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button className="px-5 py-2 bg-transparent border-2 border-emerald-500 text-emerald-500 rounded-full text-sm font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300">
          View All Stories →
        </button>
      </div>
    </section>
  );
};

export default SuccessStories;