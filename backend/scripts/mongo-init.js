db.createUser(
    {
        user: "root",
        pwd: "1qazZAQ!",
        roles: [
            {
                role: "readWrite",
                db: "DAMN-DB"
            }
        ]
    }
);

db.users.insertMany([
    {
        name: "Ananthan",
        title: "Research Scientist",
        email: "ananthan.r@iiitmk.ac.in",
        phone: 328565
    },
    {
        name: "Mobin",
        title: "Research Fellow",
        email: "mobin.m@iiitmk.ac.in",
        phone: 250503
    }
])