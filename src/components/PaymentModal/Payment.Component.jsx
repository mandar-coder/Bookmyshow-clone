import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function PaymentModal({ isOpen, setIsOpen, price }) {
    function closeModal() {
        setIsOpen(false);
    }

    const launchRazorPay = () => {
        let options = {
            key: 'rzp_test_xthkoZO5D6B1YU',
            amount: price * 100,
            currency: "INR",
            name: "Book My Show Clone",
            description: "Movie Purchase or Rental",
            image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
            handler: () => {
                setIsOpen(false);
                alert('Payment Successful');
            },
            theme: {color: "#c4242d"}
        }

        let razorPay = new window.Razorpay(options);
        razorPay.open();
    }
    // new
    const container = document.querySelector('.container');
    const seats = document.querySelectorAll('.row .seat:not(.occupied');
    const count = document.getElementById('count');
    const total = document.getElementById('total');
    const movieSelect = document.getElementById('movie');

    // populateUI();
    // let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// // update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

//   //copy selected seats into arr
//   // map through array
//   //return new array of indexes

//   const selectedSeatsCount = selectedSeats.length;

//   count.innerText = selectedSeatsCount;
//   total.innerText = selectedSeatsCount * ticketPrice;
}

// get data from localstorage and populate ui
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
// // movieSelect.addEventListener('change', (e) => {
// // //   ticketPrice = +e.target.value;
// //   setMovieData(e.target.selectedIndex, e.target.value);
// //   updateSelectedCount();
// // });

// // Seat click event
// container.addEventListener('click', (e) => {
//   if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
//     e.target.classList.toggle('selected');

// //     updateSelectedCount();
//   }
// });

// // intial count and total
// updateSelectedCount();

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-50 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Please make a payment
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Hello please click on the below button
                                        to make a payment.
                                    </p>
                                    <div class="movie-container">
      <label>Pick a place:</label>
      <select id="movie">
        <option value="10">Abhiruchi City Pride: Sinhagad Road</option>
        <option value="12">Bollywood Multiplex: Kharadi</option>
        <option value="8">City Pride Royal Cinemas: Rahatani</option>
        <option value="9">INOX: Amanora Town Centre, Hadapsar</option>
      </select>
    </div>
    <div>
    <label>Pick a Time:</label>
      <select id="movie">
        <option value="10">9am</option>
        <option value="12">12pm</option>
        <option value="8">3pm</option>
        <option value="9">8pm</option>
      </select>
    </div>

    <ul class=" m-6 py-2  text-gray-900 flex container ">
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
      <div className="bg-gray-800 h-8 w-30 m-12 text-white text-center ">screen</div>
      <div className="flex">
          <div className="text-center mt-3">A</div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg text-center text-white">1</div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg text-center text-white">2</div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">3</div>
        <div className="bg-gray-100 h-6 w-9 m-3 rounded-t-lg text-center text-white"></div>
        <div className="bg-gray-100 h-6 w-9 m-3 rounded-t-lg text-center text-white"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">4</div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">5</div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">6</div>
      </div>
      <div className="flex">
      <div className="text-center mt-3">B</div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">7</div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">8</div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg text-center text-white">9</div>
        <div className="bg-gray-100 h-6 w-9 m-3 rounded-t-lg text-center text-white "></div>
        <div className="bg-gray-100 h-6 w-9 m-3 rounded-t-lg text-center text-white "></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">11</div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">12</div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">13</div>
      </div>

      <div className="flex">
      <div className="text-center mt-3">C</div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">14</div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">15</div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">16</div>
        <div className="bg-gray-100 h-6 w-9 m-3 rounded-t-lg text-center text-white"></div>
        <div className="bg-gray-100 h-6 w-9 m-3 rounded-t-lg text-center text-white"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">17</div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg text-center text-white ">18</div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg text-center text-white ">19</div>
      </div>

      <div className="flex">
      <div className="text-center mt-3">D</div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">20</div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">21</div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg text-center text-white">22</div>
        <div className="bg-gray-100 h-6 w-9 m-3 rounded-t-lg text-center text-white"></div>
        <div className="bg-gray-100 h-6 w-9 m-3 rounded-t-lg text-center text-white"></div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">23</div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">24</div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">25</div>
      </div>

      <div className="flex">
      <div className="text-center mt-3">E</div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">26</div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">27</div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">28</div>
        <div className="bg-gray-100 h-6 w-9 m-3 rounded-t-lg text-center text-white "></div>
        <div className="bg-gray-100 h-6 w-9 m-3 rounded-t-lg text-center text-white "></div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg text-center text-white">29</div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg text-center text-white">30</div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">31</div>
      </div>

      <div className="flex">
      <div className="text-center mt-3">F</div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">32</div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg text-center text-white">33</div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg text-center text-white">34</div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg text-center text-white">35</div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg text-center text-white ">37</div>
        <div className="bg-blue-400 h-6 w-9 m-3 rounded-t-lg text-center text-white ">38</div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white ">39</div>
        <div className="bg-gray-600 h-6 w-9 m-3 rounded-t-lg text-center text-white">40</div>
      </div>
    </div>

    <div class="movie-container">
      <label>Pick a seat:</label>
      <select id="movie">
        <option value="8">3</option>
        <option value="9">4</option>
        <option value="10">5</option>
        <option value="12">6</option>
        <option value="8">7</option>
        <option value="9">8</option>
        <option value="10">9</option>
        <option value="12">10</option>
        <option value="8">11</option>
        <option value="9">12</option>
        <option value="10">13</option>
        
        <option value="8">15</option>
        <option value="9">16</option>
        <option value="10">17</option>
        <option value="12">18</option>
        <option value="8">19</option>
        <option value="9">20</option>
        <option value="10">21</option>
        <option value="12">22</option>
       
        <option value="10">25</option>
        <option value="12">26</option>
        <option value="8">27</option>
        <option value="9">28</option>
        
        <option value="12">30</option>
        <option value="8">31</option>
        <option value="9">32</option>
        <option value="10">33</option>
        <option value="12">34</option>
        <option value="8">35</option>
        <option value="9">36</option>
        
        
        <option value="8">39</option>
        <option value="9">40</option>
        
      </select>
    </div>
                                </div>

                                <div className="w-full mt-4">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                                        onClick={launchRazorPay}
                                    >
                                        Pay 
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-red-700 bg-red-100 border border-transparent rounded-md "
                                        onClick={closeModal}
                                    >
                                        Cancle Payment
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
