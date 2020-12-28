import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline }from '@material-ui/core';
import { Switch, Route} from 'react-router-dom';
import Mainbar from './Mainbar';
import OrderPage from './OrderPage';
import Reports from './Reports';
import Sider from '../components/Sider';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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

export default function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />        
        <Sider />
      <Switch>
        <Route path="/landing/Main" component={Mainbar}/>
        <Route path="/landing/OrderPage" component ={OrderPage} />
        <Route path="/landing/Reports" component={Reports} />
      </Switch>
    </div>
  );
}
