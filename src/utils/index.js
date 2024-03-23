import toast from "react-hot-toast";

export const getStoredJobs = () => {
    const storedJob = localStorage.getItem('job-application');
    if (storedJob) {
        return JSON.parse(storedJob);
    }
    return [];
}

export const savedJobs = id => {
    const storedJob = getStoredJobs();
    const isExist = storedJob.find(jobId => jobId === id);
    if (!isExist) {
        storedJob.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJob))
        toast('Job Applied Successfully')
    }
    else{
        toast('Already applied this job!')
    }
}