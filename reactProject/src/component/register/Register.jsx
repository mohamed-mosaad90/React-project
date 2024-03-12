import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Joi, { schema } from "joi-browser";
import useSchema from "./useSchema";

const Register = () => {
    const [id, idState] = useState("");
    const [fullName, fullNameState] = useState("");
    const [password, passwordState] = useState("");
    const [email, emailState] = useState("");
    const [phone, phoneState] = useState("");
    const [gender, genderState] = useState("male");
    const navgate = useNavigate()

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (id === null || id === '') {
            isproceed = false;
            errormessage += ' Username';
        }
        if (fullName === null || fullName === '') {
            isproceed = false;
            errormessage += ' fullName';
        }
        if (phone === null || phone === '') {
            isproceed = false;
            errormessage += ' phone';
        }

        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if (!isproceed) {
            toast.warning(errormessage)
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

            } else {
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }
    const handlesubmit = (e) => {
        e.preventDefault()


        const axiosfunction = async () => {


            const collectionData = {
                id, fullName, password, email, phone, gender
            }
            if (IsValidate()) {
                // const cloneCollectionData = { ...collectionData }
                // delete cloneCollectionData.errors
                //  console.log(cloneCollectionData);
                ///error line 
                // const errorr = Joi.validate(cloneCollectionData, useSchema(), { abortEarly: false });
                // console.log(errorr);

                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                };
                try {
                    const axiosPost = await axios.post("http://localhost:3000/user", collectionData, config)
                    console.log(axiosPost);
                    toast.success('Register success ya bro')
                    navgate("/login")
                } catch (err){

                    toast.error('Failed :' + err.message);

                }
                console.log(collectionData);
            }
        }
        axiosfunction()
    }

    const idChange = e => idState(e.target.value)
    const passChange = e => passwordState(e.target.value)
    const fullNameChange = e => fullNameState(e.target.value)
    const emailChange = e => emailState(e.target.value)
    const phoneChange = e => phoneState(e.target.value)
    const genderChange = e => genderState(e.target.value)

    console.log(id);

    return (
        <div>
            <div>
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card">
                            <div className="card-header">
                                <h1>User Registeration</h1>
                            </div>
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>User Name <span className="errmsg">*</span></label>
                                            <input value={id} onChange={idChange} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Password <span className="errmsg">*</span></label>
                                            <input type="password" value={password} onChange={passChange} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Full Name <span className="errmsg">*</span></label>
                                            <input value={fullName} onChange={fullNameChange} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Email <span className="errmsg">*</span></label>
                                            <input value={email} onChange={emailChange} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Phone <span className="errmsg"></span></label>
                                            <input value={phone} onChange={phoneChange} className="form-control"></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Gender</label>
                                            <br></br>
                                            <input type="radio" checked={gender === "male"} onChange={genderChange} name="gender" value="male" className="app-check"></input>
                                            <label>Male</label>
                                            <input type="radio" checked={gender === "female"} onChange={genderChange} name="gender" value="female" className="app-check"></input>
                                            <label>Female</label>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Register</button> |
                                <Link to={'/login'} className="btn btn-danger">Close</Link>
                            </div>
                        </div>
                    </form>
                </div>


            </div>
        </div>);
}

export default Register;




