const Teachers = [
    {
        firstName: "Mike",
        lastName: "Whalen",
        Subject: "Computer Science",
        Teacher: true,
        Nums: [1,2,3]

    },
    {
        firstName: "Joseph",
        lastName: "Buro",
        Subject: "CAD",
        Teacher: true,
        Nums: [4,5,6]
    },
    {
        firstName: "John",
        lastName: "Callahan",
        Subject: "Russian",
        Teacher: true,
        Nums: [7,8,9]
    },
];

const Nums = [1,2,3,4,5,6,7,8,9];
console.log(Nums[Nums.length - 1]);

//const nums = [5,6,7];
//console.log(nums[nums.length - 1]);

//const Numss = [9,10,11];
//console.log(Numss[Numss.length - 1]);

Nums.forEach(function (el) {
    console.log(el);
});

Teachers.forEach((teacher)=> console.log(teacher.firstName));
//const arr1 = [Mike.firstName, Joseph.firstName, John.firstname];

//const arr2 = [true, false, "yay!", [3,6,7], null, 9];

