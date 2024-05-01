//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];
const numbers2 = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

const greaterThan = numbers.filter((num) => {
  return num >= 25;
});

console.log(greaterThan);

const divisibleBy = numbers.filter((num) => {
  if (num % 5 == 0) {
    return true;
  } else {
    false;
  }
});

console.log(divisibleBy);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/

const squared = numbers.map((num) => {
  return num * num;
});

console.log(squared);

const multiplied = numbers.map((num) => {
  return num * 2;
});

console.log(multiplied);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

const fifthQuestion = numbers
  .filter((num) => {
    return num >= 20;
  })
  .map((num) => {
    return num * num;
  });

console.log(fifthQuestion);

const sixthQuestion = numbers
  .filter((num) => {
    return num % 5 == 0;
  })
  .map((num) => {
    return num * 3;
  });

console.log(sixthQuestion);

/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/

function logger(array) {
  array.forEach((element) => {
    console.log(element);
  });
}

logger(numbers);

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/

const toCelsius = (temperatures) => {
  const result = temperatures.map((temp) => {
    return (temp * 9) / (5 + 32);
  });

  return result;
};

console.log(toCelsius(numbers));
/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/

const hottestDays = (temperatures, threshhold) => {
  const result = temperatures.filter((temp) => {
    if (temp > threshhold) {
      return true;
    } else {
      return false;
    }
  });
  return result;
};

console.log(hottestDays(numbers, 25));

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/

const logHottestDays = (temperatures, threshhold) => {
  const result = temperatures
    .filter((temp) => {
      if (temp > threshhold) {
        return true;
      } else {
        return false;
      }
    })
    .map((temp) => {
      return (temp * 9) / (5 + 32);
    })
    .forEach((temp) => {
      console.log(temp);
    });
};

logHottestDays(numbers, 10);

// const result = temperatures.filter((temp) => {
//   if (temp > threshhold) {
//     return true;
//   } else {
//     return false;
//   }})
// .temperatures.map((temp) => {
//   return (temp * 9) / (5 + 32);
// });
// .temperatures.forEach((temp) =>{
//   console.log(temp)
// }):

// return result;

// ALI
{
  // const result = temperatures.filter((temp) => {
  //   if (temp > threshhold) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  // const result2 = result.map((temp) => {
  //   return (temp * 9) / (5 + 32);
  // });
  // result2.forEach((temp) => {
  //   console.log(temp);
  // });
}
