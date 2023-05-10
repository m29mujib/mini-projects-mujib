import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ApolloProvider} from '@apollo/client'
import client from './apollo/apollo-client'
import {Provider} from 'react-redux'
import { store } from './store'
import Login from './components/Login/Login'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        {/* <Login/> */}
         <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
)
