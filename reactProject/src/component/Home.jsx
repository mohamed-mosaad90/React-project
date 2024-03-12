import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [img, setImg] = useState("")
    const [open, openChange] = useState(false)
    const [show, setShow] = useState([])
    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate()
   const {id}= useParams()
    const inputsData = { title, body, img }  
  useEffect(()=>{
const axiosFunction=async()=>{
const res=await axios.get("http://localhost:3000/posts")
const data=res.data
console.log(data);
setShow(data)

}
axiosFunction()
    },[])


    const handleAdd=(e)=>{
e.preventDefault()
navigate("/add")

    }
console.log(id);


    const handleDelete=(e)=>{
    const confirmValue=confirm("Do you  want to delete")
    if (confirmValue) {
        axios.delete(`http://localhost:3000/posts/${e}`)
        .then((res)=>{
            console.log(res);
            toast.success("delete success")
            axios.get("http://localhost:3000/posts")
            .then((response) => {
                setShow(response.data); // Update the state with the updated list of posts
            })
            .catch((error) => {
                console.error("Error fetching updated data:", error);
            });
        }).catch((err)=>{
    console.log(err);
    toast.error("fail delete")
        })
    }
    }

    return ( 
    <div>
<div>
<button type="button" onClick={handleAdd} className="btn btn-primary" style={{position:"fixed",right:"50px",bottom:"50px"}}>Add post</button>


</div>

<div className="w-50 m-auto">
  {show.map((d) => (
    <div className="card mb-3" key={d.id}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={d.img} className="img-fluid rounded-start" style={{width:"400px",height:"200px"}} alt="Your Image Alt Text" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{d.title}</h5>
            <p className="card-text">{d.body}</p>
            <div className="position-absolute" style={{ right: "5px", bottom: "5px" }}>
              <Link to={`/update/${d.id}`}>
                <button type="button" className="btn btn-outline-primary mx-2">Edit</button>
              </Link>
              <button type="button" onClick={e => handleDelete(d.id)} className="btn btn-outline-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

        
    </div> );
}
 
export default Home;




























