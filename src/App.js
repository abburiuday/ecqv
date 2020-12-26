 
import Login from './pages/Login'
import Landing from './pages/LandingPage'
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from './data/ApolloClient';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

function App() {
  const client = createApolloClient();
  return (
    <div className="App">
      <BrowserRouter>
        <ApolloProvider client={client}>

             <Switch>
              <Route exact path="/">
                
                <Login />

              </Route>
              <Route path="/landing">
               
                <Landing />
                
              </Route>
            </Switch>



 
        </ApolloProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
