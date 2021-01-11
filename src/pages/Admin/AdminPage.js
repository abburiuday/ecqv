import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  CssBaseline }from '@material-ui/core';

import AdminSider from './AdminSider';
import AdminMainbar from './AdminMainbar';


const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  }
}));

export default function AdminPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />        
      <AdminSider />
        <AdminMainbar />
    </div>
  );
}
