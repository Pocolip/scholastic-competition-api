
var Router = require('koa-router'),
    koaBody = require('koa-better-body')(),
    middleware = require('../middleware');

module.exports = function(){

    var loadModels = middleware.loadModel();

    var trackController = new Router()
        .post('/track', loadModels, koaBody, create)
        .get('/track', loadModels, index)
        .get('/track/:id', loadModels, show);

    return trackController.routes();
}

/**
 * Create a Track Entity
 */
function *create(){
    var payload = this.request.body.fields;

    if(!payload) this.throw('Invalid Payload', 400);

    try{
        yield this.models['Track'].create(payload);
    }catch(err){
        this.throw(err.message, err.status || 500);
    }
}

function *index(){
    var tracks;
    try {
        tracks = yield this.models['Track'].findAll({
            attributes : ['id', 'name', 'createdAt', 'updatedAt']
        });
    } catch (err) {
        this.throw(err.message, err.status || 500);
    }

    if(!tracks || tracks.length < 1){
        this.throw('Not Found', 404);
    }

    this.status = 200;

    this.body = { tracks : tracks}
}

function *show(){
    var id = this.params.id,
        track;

    try {
        track = yield this.models['Track'].find({
            where : {
                id : id
            },
            attributes : ['id', 'name', 'createdAt', 'updatedAt']
        });
    } catch(err) {
        this.throw(err.message, err.status || 500);
    }

    if(!event) {
        this.throw('Not Found', 404);
    }

    this.status = 200;

    this.body = track;
}