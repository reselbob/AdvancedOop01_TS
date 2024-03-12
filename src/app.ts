// Create a new instance of the Airline, Hotel and CarRental classes in the App.ts file.
// can call the reserve method on each instance and log the result to the console.


import {Randomizer} from './utils/Randomizer';

// Create an array named compensations that can hold the compensate() methods of the IReservation implementations
const compensations: Array<() => Promise<void>> = [];

const customer = Randomizer.getRandomCustomer();

(async () => {
  try {
    //const confirmation = await airlineReservation.reserve(customer);
    //console.log(confirmation);
  } catch (e: any) {
    console.error(e.message);
  }
})();
