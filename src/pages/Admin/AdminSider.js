import React from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  makeStyles,
  Toolbar
}from '@material-ui/core';

  import DashboardIcon from '@material-ui/icons/Dashboard';
  import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
  import PeopleIcon from '@material-ui/icons/People';
  import BarChartIcon from '@material-ui/icons/BarChart';
  import LayersIcon from '@material-ui/icons/Layers';
  import {Link} from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
toolbar: {
  paddingRight: 14, // keep right padding when drawer closed
},
drawer: {
  width: drawerWidth,
  flexShrink: 0,
},
drawerPaper: {
  width: drawerWidth,
},
drawerContainer: {
  overflow: 'auto',
},
}));

function AdminSider() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Drawer className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <Divider />
                <List>{AdminListItems}</List>
          </div>
      </Drawer>
    </React.Fragment>
  )
}

export default AdminSider

const AdminListItems = (
    <div>
      <Link to="/AdminPage/UserManagement" style={{textDecoration:"none",color:"black"}}>
          <ListItem button>
              <ListItemIcon>
                  <DashboardIcon />
              </ListItemIcon>
              <ListItemText  primary="User Management" />  
          </ListItem>
      </Link>
  
      <Link to="/AdminPage/RoleManagement" style={{textDecoration:"none",color:"black"}}>
          <ListItem button>
              <ListItemIcon>
                  <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Role Management" />   
          </ListItem>
      </Link>

        <Link to="/AdminPage/SystemManagement" style={{textDecoration:"none",color:"black"}}>
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="System Management" />
            </ListItem>
        </Link>

        <Link to="/AdminPage/FeaturesManagement" style={{textDecoration:"none",color:"black"}}>
            <ListItem button>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Features Management" />
            </ListItem>
        </Link>
        <Link to="/AdminPage/AdminTask" style={{textDecoration:"none",color:"black"}}>
            <ListItem button>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Admin Task" />
            </ListItem>
        </Link>
    </div>
  );
