import JobCategoryList from '../components/JobCategoryList'
import Banner from '../components/Banner'
import FeaturedJobs from '../components/FeaturedJobs';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
        <div className='space-y-10'>
            <Helmet>
                <title>Carrier Hub | Home</title>
            </Helmet>
            <Banner />
            <JobCategoryList />
            <FeaturedJobs />
        </div>
    );
};

export default Home;