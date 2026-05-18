import { FaHeart, FaShieldAlt, FaSmile, FaPaw } from "react-icons/fa";

const WhyAdoptSection = () => {
  const reasons = [
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Save a Life",
      description: "Every adoption creates space for another pet in need. You're giving a second chance to a deserving animal.",
      color: "bg-red-100 text-red-500"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Health Benefits",
      description: "Studies show pet owners have lower blood pressure, reduced stress, and increased physical activity.",
      color: "bg-blue-100 text-blue-500"
    },
    {
      icon: <FaSmile className="w-8 h-8" />,
      title: "Unconditional Love",
      description: "Adopted pets are incredibly loyal and grateful. They'll reward you with endless affection and companionship.",
      color: "bg-yellow-100 text-yellow-500"
    },
    {
      icon: <FaPaw className="w-8 h-8" />,
      title: "Cost Effective",
      description: "Adoption fees are much lower than buying from breeders, and pets come vaccinated & spayed/neutered.",
      color: "bg-green-100 text-green-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-3 px-4 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm font-semibold">
            Why Choose Adoption
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Adopt a Pet?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choosing to adopt a pet is one of the most rewarding decisions you can make. 
            Here's why thousands of families choose adoption.
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`${reason.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                {reason.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
        
        {/* Stats Banner */}
        <div className="mt-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-90">Pets Adopted</div>
            </div>
            <div>
              <div className="text-3xl font-bold">200+</div>
              <div className="text-sm opacity-90">Happy Families</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm opacity-90">Vaccinated</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm opacity-90">Support</div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
export default WhyAdoptSection;