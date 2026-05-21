// app/components/HowItWorksCompact.jsx
import { FaSearch, FaRegHeart, FaFileAlt, FaHandshake, FaClock } from 'react-icons/fa';

const steps = [
  { icon: <FaSearch />, title: "Browse", desc: "Find your perfect pet", time: "5 min" },
  { icon: <FaRegHeart />, title: "Request", desc: "Submit adoption form", time: "10 min" },
  { icon: <FaFileAlt />, title: "Review", desc: "Get owner approval", time: "24h" },
  { icon: <FaHandshake />, title: "Adopt", desc: "Take them home", time: "Same day" },
];

const stats = [
  { number: "500+", label: "Adopted" },
  { number: "98%", label: "Success" },
  { number: "24h", label: "Response" },
  { number: "200+", label: "Families" },
];

const HowItWork = () => {
  return (
    <section className="py-8 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header - আরও ছোট */}
        <div className="text-center mb-6">
            <div className="inline-block mb-3 px-4 py-1  bg-emerald-100 text-emerald-600 rounded-full text-sm font-semibold">
            Adoption Process
          </div>
          <h2 className="text-xl md:text-4xl font-bold text-gray-800">
            How It Works
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            4 simple steps to adoption
          </p>
        </div>

        {/* Steps - খুব ছোট কার্ড */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-lg p-2 shadow-sm text-center border border-gray-100">
              <div className="text-emerald-500 text-xl mb-1 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
              <p className="text-gray-500 text-sm mt-0.5">{step.desc}</p>
              <div className="flex items-center justify-center gap-0.5 mt-1 text-sm text-gray-400">
                <FaClock size={6} />
                <span>{step.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner - 90px height */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white rounded-lg py-3 px-4">
          <div className="flex flex-wrap justify-around items-center gap-2">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-white font-bold text-md">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;