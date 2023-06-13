// Stub up the skeleton of the code...
const mastermind = games.find(toy => );

const mastermind = games.find(toy => toy.name === 'Mastermind');


const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  
  // Array.prototype.filter()
  // 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's
  const oldInventors = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
  console.log(oldInventors);   
  //added filter method instead of find and it returned both :) 
 

  // Array.prototype.map()
  // 2. Map the array of the inventors into a new array containing objects with just the first and last names as properties
  // Hint:  Return a new object literal from the callback (don't mutate the object being passed in to map)
  const inventorFl = inventors.map(inventor => ({ first: inventor.first, last: inventor.last}));
  console.log(inventorFl);
  
 
 
  // Array.prototype.sort()
  // 3. Sort the inventors by birth date (year property), in ascending order
  const inventorBd = inventors.sort((a, b) => a.year - b.year);
  console.log(inventorBd);
  
 
 
  // Array.prototype.find()
  // 4. Find the inventor object with the first name of 'Ada'
  const inventorA = inventors.find(inventor => inventor.first === 'Ada');
  console.log(inventorA);
  //felt very good on task 1-4. Was basically the same thing we covered in m1.
  
  // Array.prototype.reduce()
  // 5. How many years did all the inventors live?
  const initialValue = 0;
  const inventorLife = inventors.reduce((accumulator, inventor) => { 
  const lifeSpan = inventor.passed - inventor.year;  
   return accumulator + lifeSpan;
  }, 0);
  console.log(inventorLife);
  //used mdb and did pretty good on the skeleton/outline of this.
  //line 56 troubled me a bit. I had the parenthesis directly behind the curly brackets and it caused some errors on replit
  
  const people = [
    'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
    'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
    'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
    'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
    'Blake, William'
  ];
  
  // Array.prototype.map()
  // 6. Map the people array such that the new array consists of strings with the names formatted as "First Last", e.g., "Becker, Carl" should be mapped to "Carl Becker".
  // Hint: As a start, consider using the String.prototype.split method to "split" the string using ', ' as the separator
  const firstLast = people.map(person => {
    const [Last, first] = person.split(', ');  
    return `${first} ${Last}`;
  });
  console.log(firstLast); 
  //ask question during review **
  
  
  const data = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
    'bike', 'walk', 'car', 'van', 'car', 'truck'
  ];
  
  // Array.prototype.reduce()
  // 7. Count the number of instances for each of the data items. The reduce should return an object where the keys are 'car', 'truck', etc. and the values are the count.
  // Hint: Since you want to return an object, be sure to pass an empty {} for the initial value of the "accumulator".
  
  const instances = data.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue] += 1;
    } else {
        accumulator[currentValue] = 1;
    } 
    return accumulator;
  }, {});
  //hardest problem on the lab. Got help from both peers to solve this one
  //ask question during standup*
  
  
  
  const devs = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  
  // Array.prototype.some()
  // 8. Check if at least one person is 19 or older?
  // Hint: To get today's year, use the getFullYear method of new Date(), i.e., new Date().getFullYear()
  
  const currentYear = new Date() .getFullYear();  //gets current year 
  const isNineteen = devs.some(dev => currentYear - dev.year >= 19);  //subtracts the currentyear - devs birthdate to figure out if its greater than or equal to 19.
  console.log(isNineteen); //tests
  
 
  // Array.prototype.every()
  // 9. Check if everyone is 19 or older?
  const nowYear = new Date() .getFullYear(); //gets current year //had to change name because i used currentYear above. 
  const olderThanNineteen = devs.every(dev => nowYear - dev.year >= 19); //checks if everyone is greater than or equal to 19 years of age.
  console.log(olderThanNineteen);
  //returns false. lux is not 19. 
  
  
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  
  // Array.prototype.find()
  // 10. Find the comment with the id of 823423
  
  const idHunt = comments.find(comment => comment.id === 823423);
  console.log(idHunt)
  //did this problem without google/mdn and it feels great. Very happy with how this lab is going bar task 6 & 7. 
  
  
  
  // Array.prototype.findIndex()
  // 11. Find the index of the comment with an id of 123523
  const index = comments.findIndex(comment => comment.id === 123523);
  console.log(index)
  //overall my most confident lab yet. I struggled with problems 6 & 7 but we got through most of it fine. 
  //feels good
  


  [ { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 } ]

[ { first: 'Albert', last: 'Einstein' },
  { first: 'Isaac', last: 'Newton' },
  { first: 'Galileo', last: 'Galilei' },
  { first: 'Marie', last: 'Curie' },
  { first: 'Johannes', last: 'Kepler' },
  { first: 'Nicolaus', last: 'Copernicus' },
  { first: 'Max', last: 'Planck' },
  { first: 'Katherine', last: 'Blodgett' },
  { first: 'Ada', last: 'Lovelace' },
  { first: 'Sarah E.', last: 'Goode' },
  { first: 'Lise', last: 'Meitner' },
  { first: 'Hanna', last: 'Hammarström' } ]

[ { first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 } ]

{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }

861

[ 'Carl Becker',
  'Samuel Beckett',
  'Mick Beddoes',
  'Henry Beecher',
  'Ludwig Beethoven',
  'Menachem Begin',
  'Hilaire Belloc',
  'Saul Bellow',
  'Robert Benchley',
  'Peter Benenson',
  'David Ben-Gurion',
  'Walter Benjamin',
  'Tony Benn',
  'Chester Bennington',
  'Leana Benson',
  'Silas Bent',
  'Lloyd Bentsen',
  'Ric Berger',
  'Ingmar Bergman',
  'Luciano Berio',
  'Milton Berle',
  'Irving Berlin',
  'Eric Berne',
  'Sandra Bernhard',
  'Yogi Berra',
  'Halle Berry',
  'Wendell Berry',
  'Erin Bethea',
  'Aneurin Bevan',
  'Ken Bevel',
  'Joseph Biden',
  'Ambrose Bierce',
  'Steve Biko',
  'Josh Billings',
  'Frank Biondo',
  'Augustine Birrell',
  'Elk Black',
  'Robert Blair',
  'Tony Blair',
  'William Blake' ]

{ car: 5, truck: 3, bike: 2, walk: 2, van: 2 }

true

false

{ text: 'Super good', id: 823423 }

3
