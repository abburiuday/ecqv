import React from 'react';
import {
    makeStyles,
    Button,
    Dialog,
    DialogContent,
    Grid,
    TextField,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

   paper:{
    margin: theme.spacing(2,1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth:"35vw",
   },
   form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  }
  }));

function AddUser({handleClose,open}) {
    const classes = useStyles();
    return(
    <>
        <Dialog open={open} onClose={handleClose} >
            <DialogContent className={classes.paper}>
                <Typography variant="h5">
                    Add User
                </Typography>
                <form className={classes.form} autoComplete="off" noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} lg={6}>
                            <TextField 
                            label="First Name" 
                            type="text"
                            variant="outlined"
                            fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                            <TextField 
                            label="Last Name" 
                            type="text"
                            variant="outlined"
                            fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}> 
                            <TextField 
                            label="Email Address" 
                            type="email"
                            variant="outlined"
                            fullWidth  
                           />
                        </Grid>
                        
                        <Grid item xs={12}sm={8}> 
                            <TextField 
                            label="Mobile Number" 
                            type="text"
                            variant="outlined"
                            fullWidth  
                           />
                        </Grid>
                        
                        <Grid item xs={12} sm={4}> 
                            <TextField 
                            label="Dept Id" 
                            type="number"
                            variant="outlined"
                            fullWidth  
                           />
                        </Grid>

                        <Grid item xs={12}></Grid>

                        <Grid item xs={12} sm={12}>
                            <Button color="primary" onClick={handleClose} variant='contained' fullWidth> submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
        </Dialog>
    </>
    )
}

export default AddUser


            //                  <Grid Container>
            //                     <Grid item xs={4}>
            //                         <Button onClick={handleClose} variant="contained" color="primary">
            //                             Cancel
            //                         </Button>
            //                     </Grid>

            //                     <Grid item xs={4}>    
            //                         <Button onClick={handleClose} variant="contained" color="primary">
            //                             Submit
            //                         </Button>
            //                     </Grid>
            //                 </Grid>
