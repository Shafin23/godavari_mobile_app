import React, { createContext, useState } from 'react';

// Create a context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  // Global state variables-----------------------------
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [bookingDate, setBookingDate] = useState(null) // pick booking date
  const [totalPassenger, setTotalPassenger] = useState(0)// pick the number of total passenger 
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [viewBoardingPass, setViewBoardingPass] = useState(false) // it is needed to navigate view boarding pass in booking tab. Based on true and false we will show noTicket component or Ticket component
  //  ====================================================

  // Global state methods (optional)
  const updatePhoneNumber = (number) => {
    setPhoneNumber(number);
  };

  const updateOtp = (enteredOtp) => {
    setOtp(enteredOtp);
  };

  console.log("selected date from context provider ---------------------", bookingDate)

  let passingValue = {
    phoneNumber,
    setPhoneNumber: updatePhoneNumber,
    otp,
    setOtp: updateOtp,
    bookingDate,
    setBookingDate,
    totalPassenger,
    setTotalPassenger,

    adultCount,
    childCount,
    setAdultCount,
    setChildCount, 

    viewBoardingPass,
    setViewBoardingPass
  }

  return (
    <AppContext.Provider
      value={passingValue}
    >
      {children}
    </AppContext.Provider>
  );
};
