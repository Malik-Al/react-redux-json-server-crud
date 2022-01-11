import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux"
import {addUser} from "../redux/action";


const Adduser = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [state, setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: ""
    })

    const [error, setError] = useState()
    const {name, email, address, contact} = state

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setState({...state, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !address || !email || !contact){
            setError('Please input all input fiels')
        }else{
            dispatch(addUser(state))
            history.push('/')
            setError('')
        }

    }

    return (
        <div>
            <Button
                style={{width: '100px',marginTop: '20px'}}
                variant='contained'
                color="primary"
                type="submit"
                onClick={() => history.push('/')}
            >Home</Button>

            <h2>Add User</h2>
            {error && <h3 style={{color: "red"}}>{error}</h3>}
            <div style={{ marginTop: '100px'}}>
                <Box onSubmit={handleSubmit} component="form" sx={{'& > :not(style)': { m: 1, width: '45ch'},}} noValidate autoComplete="off">
                    <TextField
                        id="standard-basic"
                        label="Name"
                        variant="standard"
                        value={name}
                        name="name"
                        type="text"
                        onChange={handleInputChange}

                    />
                    <br/>
                    <TextField
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        value={email}
                        type="email"
                        name="email"
                        onChange={handleInputChange}

                    />
                    <br/>
                    <TextField
                        id="standard-basic"
                        label="Contact"
                        variant="standard"
                        value={contact}
                        type="number"
                        name="contact"
                        onChange={handleInputChange}

                    />
                    <br/>
                    <TextField
                        id="standard-basic"
                        label="Address"
                        variant="standard"
                        value={address}
                        type="text"
                        name="address"
                        onChange={handleInputChange}

                    />
                    <br/>
                    <Button
                        style={{width: '100px'}}
                        variant='contained'
                        color="primary"
                        type="submit"
                    >Submit</Button>

                </Box>
            </div>
        </div>
    );
};

export default Adduser;