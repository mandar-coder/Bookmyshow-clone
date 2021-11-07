import { Dialog, Transition } from "@headlessui/react";


export default function BookingModal({ isOpen, setIsOpen, price }) {
    function closeModal() {
        setIsOpen(false);
    }
    // const container = document.querySelector('.container');
    // const seats = document.querySelectorAll('.row .seat:not(.occupied');
    // const count = document.getElementById('count');
    // const total = document.getElementById('total');
    // const movieSelect = document.getElementById('movie');
    
    // populateUI();
    // let ticketPrice = +movieSelect.value;
    
    // // Save selected movie index and price
    // function setMovieData(movieIndex, moviePrice) {
    //   localStorage.setItem('selectedMovieIndex', movieIndex);
    //   localStorage.setItem('selectedMoviePrice', moviePrice);
    // }
    
    // // update total and count
    // function updateSelectedCount() {
    //   const selectedSeats = document.querySelectorAll('.row .seat.selected');
    
    //   const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
    
    //   localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    
    //   //copy selected seats into arr
    //   // map through array
    //   //return new array of indexes
    
    //   const selectedSeatsCount = selectedSeats.length;
    
    //   count.innerText = selectedSeatsCount;
    //   total.innerText = selectedSeatsCount * ticketPrice;
    // }
    
    // // get data from localstorage and populate ui
    // function populateUI() {
    //   const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    //   if (selectedSeats !== null && selectedSeats.length > 0) {
    //     seats.forEach((seat, index) => {
    //       if (selectedSeats.indexOf(index) > -1) {
    //         seat.classList.add('selected');
    //       }
    //     });
    //   }
    
    //   const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    
    //   if (selectedMovieIndex !== null) {
    //     movieSelect.selectedIndex = selectedMovieIndex;
    //   }
    // }
    
    // // Movie select event
    // movieSelect.addEventListener('change', (e) => {
    //   ticketPrice = +e.target.value;
    //   setMovieData(e.target.selectedIndex, e.target.value);
    //   updateSelectedCount();
    // });
    
    // // Seat click event
    // container.addEventListener('click', (e) => {
    //   if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    //     e.target.classList.toggle('selected');
    
    //     updateSelectedCount();
    //   }
    // });
    
    // // intial count and total
    // updateSelectedCount();
    return (
        <>
        <div>
        <div class="movie-container">
      <label>Pick a place:</label>
      <select id="movie">
        <option value="10">Abhiruchi City Pride: Sinhagad Road</option>
        <option value="12">Bollywood Multiplex: Kharadi</option>
        <option value="8">City Pride Royal Cinemas: Rahatani</option>
        <option value="9">INOX: Amanora Town Centre, Hadapsar</option>
      </select>
    </div>

    <ul class="bg-black m-6 py-6 px-12 text-gray-200 flex container">
      <li>
        <div class="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <small>N/A</small>
      </li>

      <li>
        <div class="bg-gray-300 h-6 w-9 m-3 rounded-t-lg "></div>
        <small>Selected</small>
      </li>

      <li>
        <div class="bg-blue-400 h-6 w-9 m-3 rounded-t-lg "></div>
        <small>Occupied</small>
      </li>
    </ul>


    <div className="m-3">
      <div className="bg-gray-800 h-3 w-30 m-12 "></div>
      <div className="flex">
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
      </div>
      <div className="flex">
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg "></div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg "></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
      </div>

      <div className="flex">
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg "></div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg "></div>
      </div>

      <div className="flex">
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
      </div>

      <div className="flex">
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg "></div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg "></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
      </div>

      <div className="flex">
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg "></div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg "></div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg "></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg"></div>
      </div>
    </div>

    <p class="text">
      You have selected <span id="count">0</span> seats for a price of $<span id="total">0</span>
    </p>
  </div>
        </>
    );
}