// For all of the following problems, use an array higher order method to solve the problem.
// You should not use any for or while loops!
// For each section, we've provided some sample data for you to test your function with.

/* -------------------------------------------- */
/* --------------STRING PROBLEMS--------------- */
/* -------------------------------------------- */

const smapleWords = ['dog', 'blueberry', 'alabama', 'earth', 'football'];

// Problem 1
const printEveryWord = (words) => {
  words.forEach((word) => console.log(word));

};
// console.log(printEveryWord(words));

// Problem 2
const getStringLengths = (strings) => {
  return strings.map((string) => string.length)
};
// console.log(getStringLengths(strings));

// Problem 3
const sortWordsZtoA = (words) => {
  const sorted = (a, b) => {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  }
  return words.sort(sorted);
};
// console.log(sortWordsZtoA(words))

/* -------------------------------------------- */
/* --------------NUMBER PROBLEMS--------------- */
/* -------------------------------------------- */

const sampleNumbers = [7, 3, 9, 1, 4, 8, 2, 10, 5, 6];

// Problem 4
const getEvenNumbers = (nums) => {
  return nums.filter((num) => num % 2 === 0);
};
// console.log(getEvenNumbers(nums));

// Problem 5
const getLargestNumber = (numbers) => {
  return numbers.find((num) => num === 10)
  // So for this instance, I decided to return the largest number via checking for when it equals 10, since that's the largest number in "sampleNumbers"
};
// console.log(getLargestNumber(numbers));

/* -------------------------------------------------- */
/* --------------OBJECT ARRAY PROBLEMS--------------- */
/* -------------------------------------------------- */

const sampleUsers = [
  { name: 'Charlie', isActive: true, age: 18, score: 80 },
  { name: 'Edward', isActive: true, age: 30, score: 60 },
  { name: 'Bob', isActive: true, age: 25, score: 90 },
  { name: 'Diana', isActive: false, age: 35, score: 70 },
  { name: 'Alice', isActive: false, age: 28, score: 100 },
];

// Problem 6
const printUserNamesAndScores = (users) => {
  users.forEach((user) => console.log(`name: ${user.name}, score: ${user.score}`))
};
// console.log(printUserNamesAndScores(users));


// Problem 7
const getUserNames = (users) => {
  return users.map((users) => users.name)
};
// console.log(getUserNames(users));

// Problem 8
const getActiveUsersUnder30 = (users) => {
  return users.filter((user) => user.age < 30);
};
// console.log(getActiveUsersUnder30(users));

// Problem 9
const getTotalScore = (users) => {
  const totalScore = users.reduce((accumulator, currentVal) => {
    return accumulator + currentVal.score
  }, 0);
  return totalScore;
};
// console.log(getTotalScore(users));

// Problem 10
const sortUsersByScoreDescending = (users) => {
  const descending = (a, b) => {
    if (a.score > b.score) {
      return -1;
    }
    if (a.score < b.score) {
      return 1;
    }
    return 0;
  }
  return users.sort(descending);
};
// console.log(sortUsersByScoreDescending(users));