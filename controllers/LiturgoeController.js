const {
    createLiturgie,
    getLiturgie
} = require('../repository/LiturgieRepository');

async function CreateLiturgie(req, res) {
    // #swagger.tags = ['Hotel']
    // #swagger.summary = 'Create a new hotel'
    // #swagger.description = 'Add new hotel to the database'
    /* #swagger.parameters['body'] = {
        in: 'body',
        description: ' hotel body',
        required: true,
        schema: { $ref: "#/definitions/Hotel" }
    } */
    try {
        const addResponse = await createLiturgie(req.body)
            // console.log("response Hotel = ", addResponse)


        /* #swagger.responses[201] = {
            schema: { $ref: "#/definitions/Hotel" },
            description: 'Hotel created !!!'
        } */
        return res
            .status(201)
            .json({
                success: true,
                message: 'Liturgie created !!',
                data: addResponse
            });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            success: false,
            message: `Unsuccessful Hotel adding... ${err}`
        });
    }

}

async function GetLiturgie(req, res) {
    // #swagger.tags = ['Hotel']
    // #swagger.summary = 'Create a new hotel'
    // #swagger.description = 'Add new hotel to the database'
    /* #swagger.parameters['body'] = {
        in: 'body',
        description: ' hotel body',
        required: true,
        schema: { $ref: "#/definitions/Hotel" }
    } */
    try {
        const response = await getLiturgie(req.params.date)
            // console.log("response Hotel = ", addResponse)


        /* #swagger.responses[201] = {
            schema: { $ref: "#/definitions/Hotel" },
            description: 'Hotel created !!!'
        } */
        return res
            .status(201)
            .json({
                data : response[0]
            });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            success: false,
            message: `Unsuccessful Liturgie fetc... ${err}`
        });
    }

}

module.exports = {
    CreateLiturgie,
    GetLiturgie
};