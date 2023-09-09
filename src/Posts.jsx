import { useEffect, useState } from "react"
import Post from "./Post";

export default function Posts(){
    const [posts, setPosts] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => setPosts(data))
    }, [])
    return(
        <div>
            <h3>Posts:{posts.length} </h3>
            {
                posts.map(p => <Post post={p}></Post>)
            }
        </div>

    )
}