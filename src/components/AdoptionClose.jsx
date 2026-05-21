const AlreadyAdoptedNotice = () => {
  return (
    <div className="w-full bg-red-50 border border-red-200 rounded-2xl p-5 text-center space-y-3 shadow-sm">

      <div className="flex justify-center">
        <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
          <span className="text-2xl">🐾</span>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-red-600">
          Pet Already Adopted
        </h2>

        <p className="text-sm text-gray-600 mt-1">
          This pet has already been adopted. You can no longer send an adoption request.
        </p>
      </div>

      <button
        disabled
        className="w-full bg-gray-300 text-gray-600 py-2 rounded-xl font-semibold cursor-not-allowed"
      >
        Adoption Closed
      </button>

    </div>
  );
};

export default AlreadyAdoptedNotice;