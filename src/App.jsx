import { HashRouter, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import Layout from './layout/Layout/Layout'
import Home from './Page/Home/Home'
import Bill from './Page/Bill/Bill'
import Animation from './Page/Animation/Animation'
import Todo from './Page/Todo/Todo'
import Calculator from './Page/Calculator/Calculator'
import Component from './Page/Component/Component'
import Products from './Page/Products/Products'
import Carts from './Page/Carts/Carts'
import Login from './Page/Login/Login'

import { fetchProducts } from './data/products'
//HashRouter, BrowserRouter
//localhost:5173/#/<path>
function App() {
  const [tab, setTab] = useState('home')

  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  const [token, setToken] = useState('')
  const [role, setRole] = useState('')

  useEffect(() => setProducts(fetchProducts()), [])

  if (token === '') {
    //not login
    return <Login setRole={setRole} setToken={setToken} />
  } else {
    //login
    return (
      <div className='App-container'>
        <HashRouter>
          <Routes>
            <Route element={<Layout tab={tab} setTab={setTab} products={products} carts={carts} setToken={setToken} role={role} />} >
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path='/bill' element={<Bill />} />
              <Route path='/animation' element={<Animation />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/component" element={<Component />} />
              <Route path="/product" element={<Products products={products} carts={carts} setCarts={setCarts} />} />
              <Route path="/cart" element={<Carts carts={carts} setCarts={setCarts} />} />
            </Route>
          </Routes>
        </HashRouter>
      </div >
    )
  }






}

export default App
