import { Link, useLoaderData, useParams } from "react-router-dom";
import Salary from '../assets/icons/money.png';
import Phone from '../assets/icons/phone.png';
import Email from '../assets/icons/email.png';
import Location from '../assets/icons/location2.png';
import Jobtitle from '../assets/icons/calendar.png';
import bg1 from '../assets/images/bg1.png';
import bg2 from '../assets/images/bg2.png';
const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);
    return (
        <div>
            <div className="font-bold flex flex-col justify-center items-center min-h-60 bg-[#f9f9ff] relative">
                <div className="absolute bottom-0 left-0"> 
                    <img src={bg1} alt="" />
                </div>
                <div className="absolute right-0 top-0"> 
                    <img src={bg2} alt="" />
                </div>
                <h1 className="text-4xl">Job Details </h1>
            </div>
            <div className="max-w-6xl mx-auto my-10">
                <div className="grid grid-cols-6 gap-5">
                    <div className="col-span-4 space-y-6">
                        <p className="text-sm"><span className="text-xl font-bold">Job Description:</span>{job.job_description}</p>
                        <p><span className="text-xl font-bold">Job Responsibility</span>{job.job_responsibility}</p>
                        <p className="text-xl font-bold">Educational Requirements:</p>
                        <p className="text-sm">{job.educational_requirements}</p>
                        <p className="text-xl font-bold">Experience: </p>
                        <p>{job.experiences}</p>
                    </div>
                    <div className="col-span-2">
                        <div className="bg-[#7e8ffe44] p-5 space-y-2 rounded-lg">
                            <p className="text-xl font-bold">Job Details: </p>
                            <div className="flex gap-2 items-center">
                                <img src={Salary} alt="" />
                                <p className="text-lg font-bold">Salary: </p>
                                <p>{job.salary}</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src={Jobtitle} alt="" />
                                <p className="text-lg font-bold">Job Title: </p>
                                <p>{job.job_title}</p>
                            </div>
                            <p className="text-xl font-bold pt-3 pb-5 border-b-2 border-gray-300">Contact Information: </p>
                            <div className="flex gap-2 items-center pt-3">
                                <img src={Phone} alt="" />
                                <p className="text-lg font-bold">Phone: </p>
                                <p>{job.contact_information.phone}</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src={Email} alt="" />
                                <p className="text-lg font-bold">Email: </p>
                                <p>{job.contact_information.email}</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src={Location} alt="" />
                                <p className="text-lg font-bold">Address: </p>
                                <p>{job.contact_information.address}</p>
                            </div>
                        </div>
                        <Link>
                            <button className="btn mt-3 bg-[#7E90FE] text-white font-bold w-full">Apply Now</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default JobDetails;