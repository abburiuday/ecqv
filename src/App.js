import Login from './pages/Login'
import Landing from './pages/LandingPage'
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from './data/ApolloClient';

import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
function App() {
  const client = createApolloClient();
  return (
    <div className="App">
        
        <ApolloProvider client={client}>
        <Header />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/landing" component={Landing} /> 
            </Switch>
        </ApolloProvider>
    </div>
  );
}

export default App;
