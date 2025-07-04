import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MoviesDetails from './pages/MoviesDetails'
import SeatLayout from './pages/SeatLayout'
import MyBooking from './pages/MyBooking'
import Favorite from './pages/Favorite'
import Movies from './pages/Movies'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import Dashboard from './pages/admin/Dashboard'
import Layout from './pages/admin/Layout'
import AddShows from './pages/admin/AddShows'
import ListShows from './pages/admin/ListShows'
import ListBooking from './pages/admin/ListBooking'


const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <div className=''>
    <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MoviesDetails />} />
        <Route path='/movies/:id/:date' element={<SeatLayout />} />
        <Route path='/my-bookings' element={<MyBooking />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/admin/*' element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path='add-shows' element={<AddShows />} />
          <Route path='list-booking' element={<ListBooking />} />
          <Route path='list-shows' element={<ListShows />} />
        </Route>
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  )
}

export default App
