import { useState } from "react";
import { Button, Checkbox, Dialog, DialogContent, DialogTitle, FormControl, FormControlLabel, IconButton, Input, Paper, Radio, RadioGroup, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [img, setImg] = useState("");
    const navigate = useNavigate()

    const inputsData = { title, body, img }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };

    const handleImgChange = (e) => {
        setImg(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3000/posts`, inputsData).then((res => {
            console.log(res);
            toast.success("add success")
            navigate("/")
        })).catch(err => {

            console.log(err);
            toast.error("failed add")
        })


        // Handle form submission here
    };
    return (<div>


<form style={{
            position: "absolute",
            top: " 30%",
            left: " 40%",
            margin: " -50px 0 0 0",
            margin: "0 0 0 -50px ",
            width: "100px",
            height: "100px",
        }} onSubmit={handleSubmit}>
            <FormControl>
                <Stack spacing={2} margin={2}>
                    <TextField style={{ width: "500px" }} required value={title} onChange={(e) => setTitle(e.target.value)} variant="outlined" label="Title" />
                    <TextField required value={body} multiline maxRows={2} minRows={2} onChange={(e) => setBody(e.target.value)} variant="outlined" label="Body" />
                    <TextField required value={img} onChange={(e) => setImg(e.target.value)} variant="outlined" label="Link Image" />
                    <Button disabled={!body.length || !title.length || !img.length} variant="contained" type="submit">Submit</Button>
                </Stack>
            </FormControl>
        </form>
    </div>);
}

export default Add;


{/* <form onSubmit={handleSubmit}>
<div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={title} onChange={handleTitleChange} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>
<div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={body} onChange={handleBodyChange} />
</div>
<div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={img} onChange={handleImgChange} />
</div>

<button type="submit" className="btn btn-primary">Submit</button>
</form> */}