import React from 'react';
import BlogDetails from '../BlogDetails/BlogDetails';
import './Blogs.css'

const blogs = [
    {
        "id": "1",
        "blogTitle": "Breaking Your Coder's Block",
        "blogDate": "May 13 2019",
        "blogDescription": "At one time or another, as a developer, we've all found ourselves hopelessly stuck on a coding issue...",
        "blogImgUrl": "https://i.ibb.co/WFrBRWg/blog-1.jpg"
    },
    {
        "id": "2",
        "blogTitle": "!Awake: This is Your Brain on Caffeine",
        "blogDate": "June 25 2020",
        "blogDescription": "If there's one thing I can truly claim to be an expert on, it's staying awake. For five years I struggled to stay employed...",
        "blogImgUrl": "https://i.ibb.co/cvqwSPC/blog-2.jpg"
    },
    {
        "id": "3",
        "blogTitle": "Getting a Handle on Handlebars",
        "blogDate": "January 06 2021",
        "blogDescription": "Here at EyeCue Lab we render most of our data-laden HTML pages in Handlebar templates...",
        "blogImgUrl": "https://i.ibb.co/GCfGtmx/blog-3.jpg"
    },
    {
        "id": "4",
        "blogTitle": "5 Extensions for Your Chrome Toolbelt",
        "blogDate": "March 11 2021",
        "blogDescription": "If you're not using Google Chrome as a front-end web developer, you're missing out. Not only is Chrome the...",
        "blogImgUrl": "https://i.ibb.co/WvN1xnY/blog-4.jpg"
    }
]

const Blogs = () => {
    return (
        <section className="pt-5" id="blogs">
            <div className="container pt-5">
                <h1 className="my-5">&lt;Blogs&gt;</h1>

                <div className="row d-flex justify-content-center my-5">
                    {
                        blogs.map(blog => <BlogDetails blog={blog}></BlogDetails>)
                    }
                </div>

                <h1 className="my-5">&lt;/Blogs&gt;</h1>
            </div>
        </section>
    );
};

export default Blogs;