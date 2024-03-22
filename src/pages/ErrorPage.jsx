import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-3xl font-bold">Oops!!</h1>
            <Link to='/' className="bg-gray-200 mt-5 p-2 rounded-md font-bold">Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;