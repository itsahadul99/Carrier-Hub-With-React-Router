import { useEffect, useState } from "react";
import CategoryJob from "./CategoryJob";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    // show all the load data (this is not best practice)
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);
    // console.log(jobs);
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-center text-[#1A1919] mb-3">Featured Jobs</h1>
            <p className="text-sm font-semibold text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-6 mt-10">
                {
                    jobs.slice(0, dataLength).map(job => <CategoryJob key={job.id} job={job} />)
                }
            </div>
            <div className="flex justify-center my-5">
                <div className={dataLength === jobs.length && 'hidden'}>
                    <button onClick={() => setDataLength(jobs.length)} className=" btn bg-[#7E90FE] text-white font-bold">Show all Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;