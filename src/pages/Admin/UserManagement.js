import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { 
  makeStyles,
  AppBar,
  Button,
  Breadcrumbs,
  Link,
  Tabs,
  Tab,
  Typography,
  Box,
  TextField,
   } from '@material-ui/core';
import UserList from './UserList';
import AddUser from './AddUser';
import ModifyLogin from './ModifyLogin';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  appBarSpacer: theme.mixins.toolbar,
   container: {
    padding: theme.spacing(3),
 },
 paper:{
  margin: theme.spacing(3,2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
 },
 form: {
  width: '100%', // Fix IE 11 issue.
  marginTop: theme.spacing(3),
}
}));

export default function UserManagement() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [open,setOpen] = useState(false);

  const handleClickOpen = () =>{
    setOpen(true);
  }
  const handleClose = () =>{
    setOpen(false);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <React.Fragment>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center", marginBottom:"15px"}}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/" >
                Admin
              </Link>
              <Typography color="textPrimary">User Management</Typography>
            </Breadcrumbs>
        </div>

        <div className={classes.root}>
          <AppBar position="static" color="none">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                >
                  <Tab label="Users" {...a11yProps(0)} />
                  <Tab label="Modify Login" {...a11yProps(1)} />
                  <Tab label="Manage User Role" {...a11yProps(2)} />
                  <Tab label="Recover User" {...a11yProps(3)} />
                </Tabs>
          </AppBar>

          <TabPanel value={value} index={0}>
              <div style={{display:"flex",justifyContent:"space-between",padding:"0rem 0.5rem", marginBottom :"1.5rem"}}>
                <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
                {/* <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">Sort By</InputLabel>
                  <Select
                    native
                    onChange={handleChange}
                    label="Sort By"
                    inputProps={{
                      name: 'Sort By',
                      id: 'outlined-age-native-simple',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Last Update</option>
                    <option value={20}>Last one Month</option>
                    <option value={30}>Last one Year</option>
                  </Select>
                </FormControl> */}
                
                <Button color="primary" variant="contained" onClick={handleClickOpen}> Add user</Button>
                {/* Adding User to the list */} 
                <AddUser open={open} handleClose={handleClose} />
              </div>
              <UserList />
          </TabPanel>
          <TabPanel value={value} index={1}>
              <ModifyLogin />
          </TabPanel>
          <TabPanel value={value} index={2}>
              Manage User Role
          </TabPanel>
          <TabPanel value={value} index={3}>
              Recovery User
          </TabPanel>
        </div>
    </React.Fragment>
  );
}

