import { useQuery } from '@tanstack/react-query'
import axios from "axios";

const fetchPost = async () =>  {
    const response = await axios.get ('https://jsonplaceholder.typicode.com/posts'); 
    return response.data;
}


function PostsComponent () {
  const {
    data: posts,
    error, 
    isLoading, 
    refetch,
  } =
  useQuery ({
    queryKey: ["post"],
    queryFn: fetchPost, 
    staleTime: 2000,
    refetchOnWindowFocus:false,
});

    if (isLoading) return <p> Posts Loading...</p>
    if (error) return <p>Post loading error</p>

    return (
        <div>
            <h2>Posts</h2>
            <button onClick={refetch}></button>
            <ul>
                {posts.map((posts) =>
                    <li key={posts.id}>
                        <strong>{posts.title}</strong>
                        <p>{posts.body}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default PostsComponent;