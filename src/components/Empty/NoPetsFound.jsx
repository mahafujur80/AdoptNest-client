import { FaPaw } from 'react-icons/fa';
import AllPetsHeader from '../AllPetsHeaders';

const NoPetsFound = ({ message = "No pets found" }) => {
  return (
     <section className="py-16 bg-gradient-to-br from-gray-50 to-white">

    <AllPetsHeader/>

    <div className="flex flex-col items-center justify-center py-16 text-center">
      
      <div className="text-6xl text-gray-400 mb-4">
        <FaPaw />
      </div>

      <h2 className="text-xl font-semibold text-gray-700">
        {message}
      </h2>

      <p className="text-gray-500 mt-2">
        Try adjusting your search or check back later.
      </p>

    </div>
  </section>
  );
};

export default NoPetsFound;