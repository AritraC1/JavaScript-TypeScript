// ENUMS
// Enums stands for Enumerations. Enums are a new data type supported in TypeScript. It is used to define the set of named constants, i.e., a collection of related values. TypeScript supports both numeric and string-based enums.

// This is not a good way to code for restrictive variables
// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;

// if (seat === AISLE ){}


// We solve this using ENUMS
enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = 22,
    WINDOW,
    FOURTH = 78
}

const seat = SeatChoice.AISLE
// const seat1 = SeatChoice.FOURTH
console.log(seat);
