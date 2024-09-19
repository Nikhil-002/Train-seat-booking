import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SeatBooking } from './components/SeatBooking'

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/user' element={<SeatBooking />} />
          {/* <Route path='/booking' element={<BookedSeat />} /> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
