import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
    const blogs = useLoaderData();
    console.log(blogs);
    return (
        <div>
            <Helmet>
                <title>Carrier Hub | Blogs</title>
            </Helmet>
            <section className="bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900 dark:bg-gray-50">
                        <img src={blogs[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title}</h3>
                            <span className="text-xs text-gray-400 dark:text-gray-600">{new Date(blogs[0].published_at).toLocaleDateString()}</span>
                            <p>{blogs[0].description}</p>
                        </div>
                    </a>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            blogs.slice(1, 30).map((blog, i) => {
                                return (
                                    <div key={i}>
                                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50">
                                            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={blog.cover_image} />
                                            <div className="p-6 space-y-2">
                                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{blog.title}</h3>
                                                <span className="text-xs text-gray-400 dark:text-gray-600">{new Date(blog.published_at).toLocaleDateString()}</span>
                                                <p>{blog.description}</p>
                                            </div>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;