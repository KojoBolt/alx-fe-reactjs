import { Link } from "react-router-dom";

const post = [
    {id: 1, BlogPost: "My First Post"},
    {id: 2, BlogPost: "My second post"}
];

function Blog () {
    return (
        <div>
            <h1>Blog Post</h1>
            {
                post.map(post => {
                    <Link to = {`/blog/${post.id}`}>{post.BlogPost}</Link>
                })
            }
        </div>
    )

}

export default Blog; 