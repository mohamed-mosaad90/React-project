import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');
    ///username ===> id

    const handleUserName = e => usernameupdate(e.target.value)
    const handlePassword = e => passwordupdate(e.target.value)

    const navigate = useNavigate()
    const validation = () => {

        let result = true;
        if (username === "" || username === null) {

            result = false;
            toast.warning("please enter username")
        }
        if (password === "" || password === null) {

            result = false;
            toast.warning("please enter password")
        }
        return result
    }
    const ProceedLogin = (e) => {
        e.preventDefault()
        if (validation()) {
            const axiosFunction = async () => {
                try {
                    const axiosRes = await axios.get(`http://localhost:3000/user/${username}`)

                    console.log(axiosRes.data);
                    const data = axiosRes.data
                    if (Object.keys(data).length === 0) {
                        toast.error("enter valid user")
                    } else {

                        if (data.password === password) {

                            toast.success("okkk success")
                            navigate("/")
                        } else {
                            toast.error("enter valid password")



                        }
                    }
                } catch (err) {
                    console.log(err);

                    toast.error("user not exist")
                }

            }
            axiosFunction()
        }
    }


    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                <form onSubmit={ProceedLogin} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>User Name <span className="errmsg">*</span></label>
                                <input value={username} onChange={handleUserName} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Password <span className="errmsg">*</span></label>
                                <input type="password" value={password} onChange={handlePassword} className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Login</button>
                            <Link className="btn btn-success" to={'/register'}>New User</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;