import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
