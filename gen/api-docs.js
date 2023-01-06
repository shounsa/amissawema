const swaggerAutogen = require("swagger-autogen")();
const outputFile = "../docs/hotel-swagger.json";
const endpointsFiles = ["../routes"];

const PORT = process.env.PORT || 3016;

const doc = {
    info: {
        version: "1.0.0",
        title: "Roomee Hotel API",
        description: "Roomee - Gestion des hotels."
    },
    host: "localhost:" + PORT,
    basePath: "/",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [],
    definitions: {
        Hotel: {
            id: "633f53146efc8b5a63106dd5",
            name: "GAT Hotel",
            address: {
                rue: "string",
                ville: "string",
                région: "string",
                pays: "string",
                latitude: "double",
                longitude: "double"
            },
            logo: "https://logoLink",
            langage: "Fr",
            administrator: {
                firstname: "Sebastien",
                lastname: "DE LA FONTAINE",
                email: "crepin@novotel.com",
                phone: "+3369857421"
            },
            groupId: "633f53146efc8b5a63106zz9"
                //   created_at: 2022-10-06T22:13:39.122Z,
                //   update_at: 2022-10-06T22:13:39.122Z,
                //   deleted_at: null
        },
        Group: {
            id: "633f53146efc8b5a63106zz9",
            name: "GROUP ELITE",
            administrator: {
                firstname: "Sebastien",
                lastname: "DE LA FONTAINE",
                email: "crepin@novotel.com",
                phone: "+3369857421",
                appaccess: true,
                position: "636b6ed55716540d9dc19b17",
                role: "636e11254bff2aec81626427",
                hotel: "633f53146efc8b5a63106dd5"
            },
            created_at: "2022-10-06T22:13:39.122Z",
            update_at: "2022-10-06T22:13:39.122Z",
            deleted_at: null
        },
        GroupAdd: {
            name: "GROUP ELITE",
            administrator: {
                firstname: "Sebastien",
                lastname: "DE LA FONTAINE",
                email: "crepin@novotel.com",
                phone: "+3369857421",
                appaccess: true,
                position: "636b6ed55716540d9dc19b17",
                role: "636e11254bff2aec81626427",
                hotel: "633f53146efc8b5a63106dd5"
            }
        }
    }
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    // require('../app.js')
});