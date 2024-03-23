import { useEffect, useState } from 'react';
import bg1 from '../assets/images/bg1.png';
import bg2 from '../assets/images/bg2.png';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobs } from '../utils';
import AppliedJobCard from './AppliedJobCard';
const AppliedJob = () => {
    const jobs = useLoaderData();
    const [appliedJob, setAppliedJob] = useState([]);
    const [displayJob, setDisplayJob] = useState([]);
    useEffect(() => {
        const savedJobsId = getStoredJobs();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => savedJobsId.includes(job.id));
            // console.log(jobsApplied);
            setAppliedJob(jobsApplied);
            setDisplayJob(jobsApplied)
        }
    }, [jobs]);
    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJob(appliedJob);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJob.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJob(remoteJobs);
        }
        else {
            const onsiteJobs = appliedJob.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJob(onsiteJobs);
        }
    }

    return (
        <div>
            <div className="font-bold flex flex-col justify-center items-center min-h-60 bg-[#f9f9ff] relative">
                <div className="absolute bottom-0 left-0">
                    <img src={bg1} alt="" />
                </div>
                <div className="absolute right-0 top-0">
                    <img src={bg2} alt="" />
                </div>
                <h1 className="text-4xl">Job Applied : {appliedJob.length} </h1>
            </div>
            <div className='max-w-6xl mx-auto'>
                <div className='flex justify-end my-5'>
                    <div className="dropdown dropdown-left ">
                        <div tabIndex={0} role="button" className="btn m-1 text-end">Filter Job</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li onClick={() => handleJobsFilter('all')}><a>All Jobs</a></li>
                            <li onClick={() => handleJobsFilter('remote')}><a>Remote Jobs</a></li>
                            <li onClick={() => handleJobsFilter('onsite')}><a>Onsite Jobs</a></li>
                        </ul>
                    </div>
                </div>
                {
                    displayJob.map((job, idx) => <AppliedJobCard key={idx} job={job} />)
                }
            </div>
        </div>
    );
};

export default AppliedJob;