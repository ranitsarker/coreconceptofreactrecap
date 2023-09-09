data load korte 5 things

1. create a state to store the data
(Total 2 lines code here.)
const [] = useState();
1st const [] = useState([]); empty 1st time that will empty
karon data aste o pare nao aste pare tai useState use korte hoy.
---
2nd we will pass 2 parameter 
je jinis gulo load korbo se gulo r name pupural 
2nd function with same name with set
const [posts, setPosts] = useState([]);
---

2. create use effect with no dependencies. 
	2 parametter will go. in 1st parametter call backfunction
    useEffect(() =>{
        
    }, [])

3. fetch to load data in that use effect
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
 	
	now we have to keep that data in state 
	.then(data => setPosts(data))

	now use {posts.length}  where you want to show.

	now we will create a single files of data so i have created post,jsx file
	and created one jsx structure
	<div>
            <h5>Title: </h5>
            <span><small>UserId: </small></span>
            <span><small>PostId: </small></span>
            <p></p>
        </div>

	Now to display that we have to go popular file posts.jsx
	1st import Post.jsx
	2nd map loop we will run
	    {
                posts.map(post => 
                <Post></Post>)
            }
	now we will create one Post.css file and import that file to Post.jsx and style that div


	now in that Posts.jsx file 
	            {
                posts.map(p => <Post post={p}></Post>)
            }
	here in Post.jsx we have one porps name post so post = and p is variable that will go as a value of post so post={p}
	
	then we have to work on Post.jsx file to check props 
	console.log(post);
	


	Now we have to make destructuring. from console.log(post); we have gotten object type data
	so objet destructuring
	const {title, body, id, userId} = post;
	

	lastly show those title body id and userId in your div
