
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { useQuery } from '@apollo/client';
import {GetUsers} from '../data/queries';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',  
      },
    },
  }));

export default function Login()
{
    const classes = useStyles();
    const history = useHistory()
    const [User, setUser] = React.useState('');
    
    const [Pwd, setPwd] = React.useState('');

    
  const { loading, error, data } = useQuery(GetUsers);

  const users = loading ?[]:data.TblUserLogin;

    const handleuserChange = (event) => {
        setUser(event.target.value);
      };
      const handlepwdChange = (event) => {
        setPwd(event.target.value);
      };
      const handlesubmit = (event) => {
       
        console.log(error);
        const authenticatedUser = users.find((user) => (user.UserId === User &&
            user.Password === Pwd))
            if(authenticatedUser){

history.push('./landing');
            }else{
                alert("Invalid UerName or Wrong Pasword");
            }
      };

      const handleError = () => {
    alert("error");  
    }
    return(loading ? 'Loading...'

    :<form className={classes.root} noValidate autoComplete="off" onError={handleError} onSubmit={handlesubmit}>
            <TextField
          id="LoginUerid"
          label="User Id"
          value={User}
          onChange={handleuserChange}
          variant="outlined"
        />
            <InputLabel >Password</InputLabel>
            <TextField
            id="LoginPwd"
            label='Password'
            value={Pwd}
            onChange={handlepwdChange}
            variant="outlined"
          />
          <Button color="primary" type="submit">Submit</Button>
        </form>
    )

    
}