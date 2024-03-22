import JobCategoryList from '../components/JobCategoryList'
import Banner from '../components/Banner'
import FeaturedJobs from '../components/FeaturedJobs';
const Home = () => {
    return (
        <div className='space-y-10'>
            <Banner />
            <JobCategoryList />
            <FeaturedJobs />
        </div>
    );
};

export default Home;