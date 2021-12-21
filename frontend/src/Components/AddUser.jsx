import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography,NativeSelect } from '@material-ui/core';
import react, { useState } from 'react';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';



const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 5
        }
    }
})

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: '',
    type: ''
}
export function AddUser() {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone, type } = user;
    const classes = useStyle();
    const navigate = useNavigate();

    const onValueChange = (e) => {
        //    console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
        //  console.log(user);
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/all');
    }
    return (

        <FormGroup className={classes.container}>
            <Typography variant='h4'>Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} />
            </FormControl>

            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} />
            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} />
            </FormControl>

            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} />
            </FormControl>


            <FormControl>
            <InputLabel>Tipo empleado</InputLabel>
            
            <NativeSelect  onChange={(e) => onValueChange(e)} name='type'>
            <option value="" />
            <option value={"Administrador"}>Administrador</option>
            <option value={"Empleado"}>Empleado</option>
            <option value={"Nomina"}>Nomina</option>
          </NativeSelect>

            </FormControl>

            <Button variant='contained' color='primary' onClick={() => addUserDetails()}>Add User</Button>

        </FormGroup>
    )
}

