import { useEffect, useState } from "react";
import { getJobs } from "../services/api";
import JobCard from "../components/JobCard";
import NoJobsFound from "../components/NoJobsFound";
import Loading from "../components/Loading";




function Home() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("all");
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;


  useEffect(() => {
    getJobs()
      .then((res) => {
        setJobs(res.data.jobs)
        setLoading(false);
      })
      .catch((err) => {console.log(err)
      setLoading(false);
  });
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company_name.toLowerCase().includes(search.toLowerCase());

    const matchLocation =
      location === "all" ||
      job.candidate_required_location === location;

    return matchSearch && matchLocation;
  });

  const lastJobIndex = currentPage * jobsPerPage;
  const firstJobIndex = lastJobIndex - jobsPerPage;
  const currentJobs = filteredJobs.slice(
    firstJobIndex,
    lastJobIndex
  );

  const totalPages = Math.ceil(
    filteredJobs.length / jobsPerPage
  );

  if (loading) {
  return <Loading />;
}

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search by title or company..."
        className="border p-2 rounded w-full mb-4"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1); 
        }}
      />

      <select
        className="border p-2 rounded w-full mb-6"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
          setCurrentPage(1); 
        }}
      >
        <option value="all">All Locations</option>
        <option value="Worldwide">Worldwide</option>
        <option value="USA">United States</option>
        <option value="Americas">America</option>
        <option value="Europe">Europe</option>
      </select>

      {filteredJobs.length === 0 ? (
        <NoJobsFound
          onBack={() => {
            setSearch("");
            setLocation("all");
            setCurrentPage(1);
          }}
        />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                disabled={currentPage === 1}
                onClick={() =>
                  setCurrentPage((prev) => prev - 1)
                }
                className="px-4 py-2 border rounded disabled:opacity-50"
              >
                Previous
              </button>

              <span>
                Page {currentPage} of {totalPages}
              </span>

              <button
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((prev) => prev + 1)
                }
                className="px-4 py-2 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
