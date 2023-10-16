const teachers = [
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

teachers.forEach((teacher)=> {
    console.log(teacher.firstName)
    console.log(teacher.lastName)
    console.log(teacher.subject)
    console.log(teacher.bald)
    teacher.pastJobs.forEach((jobs) => {
        console.log(jobs)
    })

});

const bald = teachers.filter((teacher) => teacher.bald);
console.log(bald);
