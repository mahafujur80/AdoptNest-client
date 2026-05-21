import { FaPaw, FaHeartbeat, FaAppleAlt, FaSyringe, FaHome, FaBath } from "react-icons/fa";

const PetCareTips = () => {
  const tips = [
    {
      icon: <FaHeartbeat className="w-6 h-6" />,
      title: "Regular Vet Checkups",
      description: "Schedule annual checkups to keep your pet healthy and catch issues early.",
      color: "bg-red-100",
      textColor: "text-red-500"
    },
    {
      icon: <FaAppleAlt className="w-6 h-6" />,
      title: "Proper Nutrition",
      description: "Feed high-quality food appropriate for your pet's age, size, and breed.",
      color: "bg-green-100",
      textColor: "text-green-500"
    },
    {
      icon: <FaSyringe className="w-6 h-6" />,
      title: "Vaccinations",
      description: "Keep vaccinations up to date to prevent serious diseases.",
      color: "bg-blue-100",
      textColor: "text-blue-500"
    },
    {
      icon: <FaHome className="w-6 h-6" />,
      title: "Safe Environment",
      description: "Create a pet-friendly home with no toxic plants or hazardous items.",
      color: "bg-yellow-100",
      textColor: "text-yellow-500"
    },
    {
      icon: <FaBath className="w-6 h-6" />,
      title: "Regular Grooming",
      description: "Brush, bathe, and trim nails regularly for optimal health.",
      color: "bg-purple-100",
      textColor: "text-purple-500"
    },
    {
      icon: <FaPaw className="w-6 h-6" />,
      title: "Daily Exercise",
      description: "Ensure 30-60 minutes of daily activity based on your pet's needs.",
      color: "bg-indigo-100",
      textColor: "text-indigo-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-3 px-4 py-1  bg-emerald-100 text-emerald-600 rounded-full text-sm font-semibold">
            Expert Advice
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Pet Care Tips
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Essential tips to keep your furry friend happy, healthy, and thriving.
          </p>
        </div>
        
        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`${tip.color} ${tip.textColor} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                  {tip.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Video/Resource Banner */}
        <div className="mt-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl  text-white  p-6 ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Need More Help?</h3>
              <p className="text-sm opacity-90">Download our complete pet care guide for free!</p>
            </div>
            <button className="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-lg transition">
              Download Guide →
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};
export default PetCareTips ;