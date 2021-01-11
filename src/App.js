import Login from './pages/Login'
import Landing from './pages/LandingPage'
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from './data/ApolloClient';

import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import AdminPage from './pages/Admin/AdminPage';
import AdminLogin from './pages/AdminLogin';
function App() {
  const client = createApolloClient();
  return (
    <div className="App">
        
        <ApolloProvider client={client}>
            <Header />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/landing" component={Landing} /> 
              <Route path="/AdminPage" component={AdminPage} />
              <Route path="/AdminLogin" component={AdminLogin} />
            </Switch>
        </ApolloProvider>
    </div>
  );
}

export default App;
