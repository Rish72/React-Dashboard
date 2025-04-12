import React from 'react'

//  packages
import {Routes, Route} from "react-router-dom"

//  pages
import OverviewPage from './pages/OverviewPage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'

//  components
import Sidebar from './components/Sidebar.jsx'


function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-900 overflow-hidden" >


      <Sidebar />

      //Routes
      <Routes>
        <Route path="/" element={<OverviewPage />}/>
        <Route path="/" element={<ProductsPage />}/>
      </Routes>

    </div>
  )
}

export default App