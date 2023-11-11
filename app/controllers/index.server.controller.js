exports.render =
function(req, res) {
    const data = {
        name: "Jonathan Williams-Baxter",
        headerTitle: "The MEAN Stack",
        definitions: [
            {
                name: "MongoDB",
                description: "MongoDB is a NoSQL database that provides high performance, high availability, and easy scalability."
            },
            {
                name: "Express",
                description: "Express is a fast, unopinionated, minimalist web framework for Node.js that simplifies application development."
            },
            {
                name: "Angular",
                description: "Angular is a robust front-end framework for building dynamic and responsive web applications."
            },
            {
                name: "Node.js",
                description: "Node.js is a server-side Javascript runtime that allows building scalable network applications.."
            }
        ]
    }
};