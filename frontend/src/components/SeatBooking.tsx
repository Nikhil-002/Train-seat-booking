import axios from "axios";
import { useState } from "react";
import { CoachLayout } from "./CoachLayout";

export const SeatBooking = () => {
  const [name, setName] = useState("");
  const [seatCount, setSeatCount] = useState();
  const [bookedSeats, setBookedSeats] = useState([]);
  const [seatMap, setSeatMap] = useState(new Array(80).fill(false));
  const [left,setLeft] = useState(80)

  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user", {
        name: name,
      });
      const id = response.data.newUser.id;

      const bookingResponse = await axios.post(
        `http://localhost:3000/booking/${id}`,
        {
          total_seat: seatCount,
        }
      );

      const availableSeatObjects = bookingResponse.data.availaibleSeats;

      const bookedSeatNumbers = availableSeatObjects.map(
        (seat) => seat.seat_no
      );
      console.log(bookedSeatNumbers);

      const newSeatMap = [...seatMap];
      bookedSeatNumbers.forEach((seatNo) => {
        newSeatMap[seatNo - 1] = true;
      });

      setSeatMap(newSeatMap);
      setBookedSeats(bookedSeatNumbers);
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col justify-center bg-slate-200 w-full">
        <div className="font-extrabold text-5xl text-center">
          Train Seat Booking
        </div>
        <div className="pt-8 text-center">
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="px-2 w-64 py-3 text-md rounded-md"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="pt-8 text-center">
          <input
            type="number"
            placeholder="Number of seats to book (1-7)"
            value={seatCount}
            min="0"
            onChange={(e) => setSeatCount(e.target.value)}
            className=" px-2 w-64 py-3 text-md rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        <div className="flex justify-center pt-5">
          <button
            onClick={handleClick}
            className="bg-black py-2.5 px-4 text-md font-bold text-white bg-black rounded-md text-center"
            type="button"
          >
            Book Seats
          </button>
        </div>
        <div className="flex justify-between">
          <div>
            {bookedSeats.length > 0 && (
              <div className="text-2xl font-bold bg-red-700 w-80 py-5 px-3 ml-5 rounded-xl">
                <div>
                  Seats Booked for {name}:
                  <p className="text-white">{bookedSeats.join(", ")}</p>{" "}
                </div>
              </div> 
            )}
          </div>
          
        </div>
        <CoachLayout seatMap={seatMap} />
      </div>
    </div>
  );
};
