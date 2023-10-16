const Teachers = [
    {
        firstName: "Mike",
        lastName: "Whalen",
        subject: "Computer Science",
        bald: true,
        pastJobs: ["comedian", "businessman"]

    },
    {
        firstName: "Joseph",
        lastName: "Buro",
        subject: "CAD",
        bald: false,
        pastJobs: ["astronaut", "doctor"]
    },
    {
        firstName: "John",
        lastName: "Callahan",
        subject: "Russian",
        bald: true,
        pastJobs: ["chef", "librarian"]
    }
];

Teachers.forEach((teacher) => {
    console.log(teacher)
    teacher.pastJobs.forEach((jobs) => {
        console.log(jobs)
    })
    
});


const teachers = pastJobs.filter((teacher) => teacher.bald = true);
console.log(bald)








//const arr1 = [Mike.firstName, Joseph.firstName, John.firstname];

//const arr2 = [true, false, "yay!", [3,6,7], null, 9];
