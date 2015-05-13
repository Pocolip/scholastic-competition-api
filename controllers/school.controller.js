
var Router = require('koa-router'),
    koaBody = require('koa-better-body')(),
    middleware = require('../middleware');

module.exports = function(){

    var loadModels = middleware.loadModel();

    var schoolController = new Router()
        .post('/school', loadModels, koaBody, create)
        .get('/school', loadModels, index)
        .get('/school/:id', loadModels, show);

    return schoolController.routes();
}

/**
 * Create a School Entity
 */
function *create(){
    var payload = this.request.body.fields;

    if(!payload) this.throw('Invalid Payload', 400);

    try{
        yield this.models['School'].create(payload);
    }catch(err){
        this.throw(err.message, err.status || 500);
    }
}

function *index(){
    var schools;
    try {
        schools = yield this.models['School'].findAll({
            attributes : ['id', 'name', 'address1', 'address2', 'zipcode', 'city', 'grade', 'phone', 'createdAt', 'updatedAt']
        });
    } catch (err) {
        this.throw(err.message, err.status || 500);
    }

    if(!schools || schools.length < 1){
        this.throw('Not Found', 404);
    }

    this.status = 200;

    this.body = { schools : schools}
}

function *show(){
    var id = this.params.id,
        school;

    try {
        school = yield this.models['School'].find({
            where : {
                id : id
            },
            attributes : ['id', 'name', 'address1', 'address2', 'zipcode', 'city', 'grade', 'phone', 'createdAt', 'updatedAt']
        });
    } catch(err) {
        this.throw(err.message, err.status || 500);
    }

    if(!event) {
        this.throw('Not Found', 404);
    }

    this.status = 200;

    this.body = school;
}