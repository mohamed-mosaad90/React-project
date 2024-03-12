import { useEffect, useState } from "react";
import { Button, Checkbox, Dialog, DialogContent, DialogTitle, FormControl, FormControlLabel, IconButton, Input, Paper, Radio, RadioGroup, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const Update = () => {

    const { id } = useParams()
    const [data, setData] = useState([])
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [img, setImg] = useState('');
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${id}`).then(res => setData(res.data)).catch(err => {
            console.log(err);
            toast.error("failed get data ")
        })
    }, [])
    console.log(id);

    console.log(data);
    const handleSubmit = () => {
        e.preventDefault();
        axios.put(`http://localhost:3000/posts/${id}`, data)
            .then(res => {
                console.log(res);

                toast.success("Success: Updated data");
                navigate("/")
            })
            .catch(err => {
                console.log(err);
                toast.error("Error: Failed to update data");
            });
    }
    return (<div >

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
                    <TextField style={{ width: "500px" }} required value={data.title} onChange={(e) => setTitle({ ...data, title: e.target.value })} variant="outlined" label="Title" />
                    <TextField required value={data.body} multiline maxRows={2} minRows={2} onChange={(e) => setBody({ ...data, body: e.target.value })} variant="outlined" label="Body" />
                    <TextField required value={data.img} onChange={(e) => setImg({ ...data, img: e.target.value })} variant="outlined" label="Link Image" />
                    <Button disabled={!body || !title || !img} variant="contained" type="submit">Submit</Button>
                </Stack>
            </FormControl>
        </form>

    </div>);
}

export default Update;