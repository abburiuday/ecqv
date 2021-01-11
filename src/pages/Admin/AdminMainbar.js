import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Container} from '@material-ui/core';
import UserManagement from './UserManagement';


const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        background:"#eeeeee"
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },

}));


function AdminMainbar() {
    const classes = useStyles();
    
    return (
        <React.Fragment>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Switch>
                        <Route path="/AdminPage/UserManagement" component={UserManagement}/>
                    </Switch>
                </Container>
            </main>
        </React.Fragment>
    )
}

export default AdminMainbar;

    

