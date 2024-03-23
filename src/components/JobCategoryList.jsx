import { useEffect, useState } from "react";

const JobCategoryList = () => {
    const [joblist, setJobList] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setJobList(data))
    }, [])
    // console.log(joblist);
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-center text-[#1A1919] mb-3">Job Category List</h1>
            <p className="text-sm font-semibold text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-4 gap-5 my-10">
            {
                joblist.map(job => {
                    return (
                        <div key={job.id} className="card bg-base-100 shadow-sm bg-gradient-to-r from-[#7e8ffe10] to-[#9873ff10] border">
                            <div className="card-body">
                                <img width={50} src={job.logo} alt="" />
                                <h2 className="card-title font-bold">{job.category_name}</h2>
                                <p className="text-[#A3A3A3] font-medium">{job.availability}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default JobCategoryList;