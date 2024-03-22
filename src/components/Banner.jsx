import User from '../assets/images/user.png'
const Banner = () => {
    return (
        <div className="hero w-full bg-[#f9f9ff]">
            <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                <div className=' -mb-4'>
                    <img src={User} />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /> <span className='text-[#7E90FE]'>Dream Job</span></h1>
                    <p className="py-6 w-2/3">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-[#7E90FE] text-white font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;