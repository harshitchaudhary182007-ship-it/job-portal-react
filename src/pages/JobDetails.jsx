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
  <div className="max-w-4xl mx-auto px-6 pb-24 mt-4"> 
    <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6">
      <AiOutlineArrowLeft size={20} />
      <span>Back to Jobs</span>
    </Link>

    <div className="bg-white rounded-xl shadow-md p-6 border">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h1>
      <p className="text-gray-500 mb-4">{job.company_name} • {job.candidate_required_location}</p>
      <div className="text-gray-700 leading-relaxed border-t pt-4">
        {job.description.replace(/<[^>]*>?/gm, "")}
      </div>
      
      <div className="flex justify-center mt-10">
        <button
          onClick={() => alert("Application submitted successfully!")}
          className="px-10 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all shadow-lg"
        >
          Apply Now
        </button>
      </div>
    </div>
  </div>
);
}

export default JobDetails;
