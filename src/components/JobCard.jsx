import { Link } from "react-router-dom";

function JobCard({ job }) {
  const cleanText = job.description
    .replace(/<[^>]+>/g, "")
    .substring(0, 120);

  return (
    <div className="border p-5 rounded-xl shadow-sm hover:shadow-lg transition bg-white">
      <h2 className="text-lg font-semibold text-gray-800">
        {job.title}
      </h2>

      <p className="text-sm text-gray-500 p-2">
        {job.company_name} • {job.candidate_required_location}
      </p>

      <p className="text-sm text-gray-500 p-1 mb-2">
        {cleanText}...
      </p>

      <Link
        to={`/job/${job.id}`}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        View Details →
      </Link>
    </div>
  );
}

export default JobCard;
