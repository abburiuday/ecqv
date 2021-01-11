import React,{useState} from 'react';
import {
  Avatar,
  Button,
  Box,
  CssBaseline,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

import {Redirect} from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#3949ab',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#3949ab'
  },
}));



export default function AdminLogin() {
  const classes = useStyles();

  const [admin,setAdmin] = useState(false);
  

  if(admin){
    return <Redirect to="/AdminPage" />;
  }
  
function submitForm (e) {
    e.preventDefault();
    let userName = e.target.email.value;
    let password = e.target.password.value; 
    
    if (userName === "admin" && password === "admin"  ) {
      setAdmin(true);
      console.log("Admin Login");
    }
  };


  return (
    <Container component="main" maxWidth="xs">

      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        
        </Avatar>
        <Typography component="h1" variant="h5">
          Admin Sign In
        </Typography>
        <form className={classes.form} onSubmit={submitForm} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            helperText="Please write correct email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox  value="remember me" color="primary" />}
            label="Remember me"
            
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
                Sign In
          </Button>


          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password ?
              </Link>
            </Grid>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot UserId .?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/" variant="body2">
                User Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}