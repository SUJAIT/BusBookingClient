import React, { useState } from 'react';
import { MdOutlineChair } from 'react-icons/md'; // Import the chair icon
import './BusSeat.css'; // Link to the CSS file
import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2';



const BusSeats = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  console.log(selectedSeats)

  const toggleSeat = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else if (selectedSeats.length < 4) {
      setSelectedSeats([...selectedSeats, seatNumber]);
    } else {
      Swal.fire('You can only select up to 4 seats!');
      
    }

  };

  return (
    <div className="bus-container">
      <h2>Select up to 4 seats</h2>
      <div className="seats-grid">
        {Array.from({ length: 30 }, (_, index) => (
          <div
            key={index}
            className={`seat-icon ${selectedSeats.includes(index + 1) ? 'selected' : ''}`}
            onClick={() => toggleSeat(index + 1)}
          >
            <MdOutlineChair size={40} />
            <span className="seat-number">{index + 1}</span>
          </div>
        ))}
      </div>
      <div className="selected-info">
        <p>Selected Seats: {selectedSeats.join(', ') || 'None'}</p>
      </div>
    </div>
  );
};

export default BusSeats;
