import { Link } from "react-router-dom";

const post = [
    {id: 1, title: "My First Post"}
    {id: 2, title: "My second post"}
]

function Blog () {
    return (
        <div>
            <h1>Blog Post</h1>
            {
                post.map(post => {
                    <Link to = {`/blog/${post.id}`}>{post.title}</Link>
                })
            }
        </div>
    )

}

export default Blog; 