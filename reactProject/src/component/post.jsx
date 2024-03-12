// import React, { useState, useEffect } from 'react'

// const Post = () => {
//     const [post, setPost] = useState(null)
//     const [id, setId] = useState("")
//     const [loading, setLoading] = useState(false)


//     useEffect(() => {

//         const fetchPosts = async () => {
//             setLoading(true)
//             const res = await fetch(`https:jsonplaceholder.typicode.com/posts/${id}/?_delay=3000`)
//             const data = await res.json()
//             console.log(data);
//             setLoading(false)
//             setPost(data)
//         }
//         if (id !== "") {

//             fetchPosts()
//         }
//     }, [id])
//     console.log(post);
//     return (
//         <>
//             <label htmlFor="id">postId</label>
//             <input type="text" value={id} onChange={(e) => setId(e.target.value)} id='id' />
//             <div>{id && loading&& "loading..." }</div>
//             <p>typeing... {!loading&&post && JSON.stringify(post)}</p>
//         </>
//     );
// }

// export default Post;