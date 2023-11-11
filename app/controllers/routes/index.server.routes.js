module.exports =
    function (app) {
        const index = require('app/controllers/index.server.controller.js');
        app.get('/', index.render);
};