import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Location from '../assets/icons/Location.png'
import Money from '../assets/icons/money.png'
const AppliedJobCard = ({ job }) => {
    // console.log(job);
    const { logo, id, job_title, remote_or_onsite, location, salary, job_type, company_name } = job;
    return (
        <div className='grid grid-cols-5 shadow-sm border items-center mb-5'>
            <div className="card card-compact col-span-4">
                <div className="mt-10 pl-5">
                    <img src={logo} alt={job_title} />
                </div>
                <div>
                <div className="card-body">
                    <h2 className="card-title font-bold text-[#474747]">{job_title}</h2>
                    <p className='text-xl text-[#474747] font-semibold'>{company_name}</p>
                    <div className="">
                        <button className="px-5 mr-3 py-2 font-extrabold border rounded-md text-[#7E90FE] border-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold border rounded-md text-[#7E90FE] border-[#7E90FE]">{job_type}</button>
                    </div>
                    <div className='flex gap-6 items-center *:font-semibold *:text-[#757575] *:text-xl'>
                        <div className='flex gap-3 items-center'>
                            <img src={Location} alt="" />
                            <p>{location}</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img src={Money} />
                            <p>{salary}</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="card-actions text-xl col-span-1">
                <Link to={`/job/${id}`}><button className="btn bg-[#7E90FE] text-white font-bold">View Details</button></Link>
            </div>
        </div>
    );
};
AppliedJobCard.propTypes = {
    job: PropTypes.object.isRequired,
    
}
export default AppliedJobCard;