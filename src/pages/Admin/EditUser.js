import React, { useState } from 'react';
import {
    makeStyles,
    Button,
    Dialog,
    DialogContent,
    Grid,
    TextField,
    Typography,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from '@material-ui/core';
import {Get_All_Departments, Get_User_By_UserId, INSERT_NEW_USER} from '../../data/queries';
import { useQuery, useMutation } from '@apollo/client'; 


const useStyles = makeStyles((theme) => ({

   paper:{
    margin: theme.spacing(2,1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth:"50vw",
   },
   form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  formControl: {
   // margin: theme.spacing(1),
    minWidth: 260,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  }));

function EditUser({handleClose,open,selectedUser}) {
    const classes = useStyles();
    const [selecteddept, setSelecteddept] = useState(0);
    const [userdata, setUserData] = useState({firstName:"",lastName:"",Email:"",UserId:selectedUser,EmployeeId:""})
    const { loading, error, data } = useQuery(Get_All_Departments);
    let departments = [];
    if(data){
        console.log("departments");
        departments = data.Department
        console.log(departments);
    }
    const { loading1, error1, data1 } = useQuery( Get_User_By_UserId,{variables: { "UserId": {"_eq": selectedUser} }});
    if(data1){
        console.log("userprofile");
        setUserData({...userdata, firstName: data1.UserProfile.FirstName})
        console.log(data1.UserProfile);
    }
    const [insertUser] = useMutation(INSERT_NEW_USER);

    
  const handledeptChange = (event) => {
      event.preventDefault();
      console.log(event.target.value);
    setSelecteddept(event.target.value);
  };

  const submitData = (event)=>{
event.preventDefault();
console.log(userdata);
insertUser({variables:{CreatedUser:"admin",DepartmentId:selecteddept,EmailId:userdata.Email,EmployeeId:userdata.EmployeeId,
FirstName:userdata.firstName,LastName:userdata.lastName,Password:"abcd",UserId:userdata.UserId}});
cancelData();
alert("user added successfully, refresh to see new user data");
  };

  const cancelData = () =>{
   
setUserData({firstName:"",lastName:"",Email:"",UserId:"",EmployeeId:""});
setSelecteddept(0);
  handleClose();
  

  }
    return(
    <>
        <Dialog open={open} onClose={handleClose} >
            <DialogContent className={classes.paper}>
                <Typography variant="h5">
                Edit User
                </Typography>
                <form className={classes.form} autoComplete="off" noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} lg={6}>
                            <TextField 
                            label="First Name" 
                            type="text"
                            variant="outlined"
                            value={userdata.firstName}
                            onChange={e=>setUserData({...userdata, firstName: e.target.value})}
                            fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                            <TextField 
                            label="Last Name" 
                            type="text"
                            variant="outlined"
                            value={userdata.lastName}
                            onChange={e=>setUserData({...userdata, lastName: e.target.value})}
                            fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}> 
                            <TextField 
                            label="Email Address" 
                            type="email"
                            variant="outlined"
                            value={userdata.Email}
                            onChange={e=>setUserData({...userdata, Email: e.target.value})}
                            fullWidth  
                           />
                        </Grid>
                        
                        <Grid item xs={12} sm={6} lg={6} > 
                            <TextField 
                            label="User Id" 
                            type="text"
                            variant="outlined"
                            value={userdata.UserId}
                            onChange={e=>setUserData({...userdata, UserId: e.target.value})}
                            fullWidth  
                           />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                            <TextField 
                            label="Employee Id" 
                            type="text"
                            variant="outlined"
                            value={userdata.EmployeeId}
                            onChange={e=>setUserData({...userdata, EmployeeId: e.target.value})}
                            fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}> 
                        <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Department</InputLabel>
                        <Select
          labelId="department-select-label"
          id="department-select"
          value={selecteddept}
          onChange={handledeptChange}
          fullWidth
        >
            {
                departments.map((dept,index)=>
                <MenuItem value={dept.Id} key={index}>{dept.DepartmentName}</MenuItem>
                
                )
            }
        </Select>
        </FormControl>
                        </Grid>

                        <Grid item xs={12}></Grid>

                        <Grid item xs={12} sm={12} lg={6}>
                            <Button color="primary" onClick={submitData} variant='contained'> submit</Button>
                            </Grid>

                        <Grid item xs={12} sm={12} lg={6}>
                            <Button color="primary" onClick={cancelData} variant='contained'> Cancel</Button>
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
        </Dialog>
    </>
    )
}

export default EditUser


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
