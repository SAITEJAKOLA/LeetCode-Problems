let instructur = {
    firstName: "Sai Teja",
    lastName: " Kola",
    isInstrctur: true,
    favSubjects: ['Computer Science', 'Data Structures', 'Algorithms'],
}

// const objKeys = Object.keys(instructur);
// console.log(objKeys); // Output: [ 'firstName', 'lastName', 'isInstrctur', 'favSubjects' ]
// const objValues = Object.values(instructur);
// console.log(objValues); // Output: [ 'Sai Teja', ' Kola', true, [ 'Computer Science', 'Data Structures', 'Algorithms' ] ]
// const objeEntries = Object.entries(instructur);
// console.log(objeEntries); // Output: [ [ 'firstName', 'Sai Teja' ], [ 'lastName', ' Kola' ], [ 'isInstrctur', true ], [ 'favSubjects', [Array] ] ]

// const objDescriptors = Object.getOwnPropertyDescriptors(instructur);
// console.log(objDescriptors);
// const objHasOwnProperty: boolean = instructur.hasOwnProperty('firstName');
// console.log(objHasOwnProperty); // Output: true

console.log(instructur['firstName']);