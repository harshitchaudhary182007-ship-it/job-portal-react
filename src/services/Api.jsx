import axios from "axios";

export const getJobs = () => {
  return axios.get("https://remotive.com/api/remote-jobs");
};
