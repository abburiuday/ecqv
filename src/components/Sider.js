import React from 'react'
import {
  Drawer,
  List,
  Divider,
  makeStyles,
  Toolbar
}from '@material-ui/core';
import { mainListItems, secondaryListItems } from './ListItems';

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
}
}));

function Sider() {
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
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            <Divider />
          </div>
      </Drawer>
    </React.Fragment>
  )
}

export default Sider
