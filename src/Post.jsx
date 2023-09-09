import './Post.css'
export default function Post({post}){
    console.log(post); // je format a chaitaci oi format a paitaci ki na
    // we have object type data we we have to do objet destructuring
    const {title, body, id, userId} = post;
    return(
        <div className='post'>
            <h3>Title: {title} </h3>
            <p>Description: {body}</p>
            <p>
                
                <span style={{color: "red"}}><small>PostId: {id} </small></span>
                <span><small>UserId: {userId} </small></span>
            </p>    
        </div>
    )
}