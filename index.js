var koa = require('koa'),
    app,
    controllerBundle = require('./controllers')(),
    json = require('koa-json'),
    session = require('koa-session');

/**
 * Initialize API and load Controllers
 * @param database
 * @returns {*|exports}
 */


app = koa();

app.use(json());

controllerBundle.controllerNames.forEach(function(name){
    app.use(controllerBundle.controllers[name]);
});

app.on('error', function(err){
    log.error('Server Error', err);
});

app.listen(3000);
console.log('Server listening in port 3000');
