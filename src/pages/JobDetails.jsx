import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { getJobs } from "../services/Api";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    getJobs().then((res) => {
      const foundJob = res.data.jobs.find(
        (job) => job.id.toString() === id
      );
      setJob(foundJob);
    });
  }, [id]);

  if (!job) {
    return <p className="p-6">Loading job details...</p>;
  }

  return (
    <>
      <div className="max-w-4xl mx-auto h-full px-6 pb-20 mt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:underline"
        >
          <AiOutlineArrowLeft size={20} />
          <span>Back to Jobs</span>
        </Link>
      </div>

      <div className="p-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {job.title}
          </h1>

          <p className="text-gray-500 mb-4">
            {job.company_name} • {job.candidate_required_location}
          </p>

          <div className="text-gray-700 leading-relaxed">
            {job.description.replace(/<[^>]*>?/gm, "")}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex justify-center">
  <button
  onClick={() => alert("Application submitted successfully!")}
  className="mt-6 px-6 py-2  bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
>
  Apply Now
</button>
</div>
</div>

    </>
  );
}

export default JobDetails;
