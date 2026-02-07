import noJobsImg from "../assets/no-jobs.png";

function NoJobsFound({ onBack }) {
  return (
    <div className="flex flex-col items-center justify-center mt-20 text-center">
      <img
        src={noJobsImg}
        alt="No jobs found"
        className="w-64 mb-6 opacity-80"
      />

      <h2 className="text-2xl font-semibold mb-2">
        No jobs found 😕
      </h2>
      <p className="text-gray-600 mb-6">
        Try changing your search or filters.
      </p>

      <button
        onClick={onBack}
        className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Back to Home
      </button>
    </div>
  );
}

export default NoJobsFound;
