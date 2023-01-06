// API DOCUMENTATION
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require('./docs/hotel-swagger.json')
const swaggerOptions = {
    explorer: true,
    customCss: '.swagger-ui .topbar { display: none }',
    swaggerOptions: {
        validatorUrl: null
    }
};

// OTHERS
const liturgieRouter = require('./routes/liturgie.routes');

module.exports = (app) => {

    // OTHERS ROUTES
    app.use('/liturgie', liturgieRouter);


}