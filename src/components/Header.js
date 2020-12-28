import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
   AppBar,
   Toolbar,
   Typography,
   IconButton,
   MenuItem,
   Menu
} from '@material-ui/core';

import AccountCircle from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
 root: {
   flexGrow: 1,

 },
 headColor:{
   background: '#3949ab',
   zIndex: theme.zIndex.drawer +1
   /*253053*/
 },
 menuButton: {
   marginRight: theme.spacing(2),
 },
 title: {
   flexGrow: 1,
 }
 
}));

function Header() {
 const classes = useStyles();
 const [auth, setAuth] = React.useState(true);
 const [anchorEl, setAnchorEl] = React.useState(null);
 const open = Boolean(anchorEl);

 const handleChange = (event) => {
   setAuth(event.target.onClick);
 };

 const handleMenu = (event) => {
   setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
   setAnchorEl(null);
 };

 return (
   <div className={classes.root}>

     <AppBar position="fixed" className={classes.headColor} >
       <Toolbar>
         {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           <MenuIcon />
         </IconButton> */}
         <Typography variant="h5" className={classes.title}>
           LOGO
         </Typography>
         {auth && (
           <div>
             <IconButton
               aria-label="account of current user"
               aria-controls="menu-appbar"
               aria-haspopup="true"
               onClick={handleMenu}
               color="inherit"
             >
               <AccountCircle />
             </IconButton>
             <Menu
               id="menu-appbar"
               anchorEl={anchorEl}
               anchorOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               keepMounted
               transformOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               open={open}
               onClose={handleClose}
             >
               <MenuItem onClick={handleClose}>Profile</MenuItem>
               <MenuItem onClick={handleClose}>My account</MenuItem>
               <MenuItem >
                 <Link to="/" style={{textDecoration:"none",color:"black"}}>
                     Logout
                 </Link>
               </MenuItem>
             </Menu>
           </div>
         )}
       </Toolbar>
     </AppBar>
   </div>
 );
}
export default Header;