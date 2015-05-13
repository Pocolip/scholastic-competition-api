
var Router = require('koa-router'),
    koaBody = require('koa-better-body')(),
    middleware = require('../middleware');

module.exports = function(){

    var loadModels = middleware.loadModel();

    var eventController = new Router()
        .post('/event', loadModels, koaBody, create)
        .get('/event', index)
        .get('/event/:id', show);

    return eventController.routes();
}

/**
 * Create a Event Entity
 */
function *create(){
    var payload = this.request.body.fields;

    if(!payload) this.throw('Invalid Payload', 400);

    try{
        yield this.models['Event'].create(payload);
    }catch(err){
        this.throw(err.message, err.status || 500);
    }
}

function *index(){
    var events;
    try {
        events = yield this.models['Event'].findAll({
            attributes : ['id', 'name', 'description', 'grade', 'location', 'date', 'requirements', 'createdAt', 'updatedAt']
        });
    } catch (err) {
        this.throw(err.message, err.status || 500);
    }

    if(!events || events.length < 1){
        this.throw('Not Found', 404);
    }

    this.status = 200;

    this.body = { events : events}
}

function *show(){
    var id = this.params.id,
        event;

    try {
        event = yield this.models['Event'].find({
            where : {
                id : id
            },
            attributes : ['id', 'name', 'description', 'grade', 'location', 'date', 'requirements', 'createdAt', 'updatedAt']
        });
    } catch(err) {
        this.throw(err.message, err.status || 500);
    }

    if(!event) {
        this.throw('Not Found', 404);
    }

    this.status = 200;

    this.body = event;
}