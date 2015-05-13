/**
 * Created by cesarcruz on 5/13/15.
 */


var Router = require('koa-router'),
    koaBody = require('koa-better-body')(),
    middleware = require('../middleware');

module.exports = function(){

    var loadModels = middleware.loadModel();

    var professorController = new Router()
        .post('/professor', loadModels, koaBody, create)
        .get('/professor', loadModels, index)
        .get('/professor/:id', loadModels, show);

    return professorController.routes();
}

/**
 * Create a Professor Entity
 */
function *create(){
    var payload = this.request.body.fields;

    console.log(payload);

    if(!payload) this.throw('Invalid Payload', 400);

    try{
        yield this.models['Professor'].create(payload);
    }catch(err){
        this.throw(err.message, err.status || 500);
    }
}

function *index(){
    var professors;
    try {
        professors = yield this.models['Professor'].findAll();
    } catch (err) {
        this.throw(err.message, err.status || 500);
    }

    if(!professors || professors.length < 1){
        this.throw('Not Found', 404);
    }

    console.log(professors);

    this.status = 200;

    this.body = { professors : professors}
}

function *show(){
    var id = this.params.id,
        professor;

    try {
        professor = yield this.models['Professor'].find({
            where : {
                id : id
            }
        });
    } catch(err) {
        this.throw(err.message, err.status || 500);
    }

    if(!professor) {
        this.throw('Not Found', 404);
    }

    this.status = 200;

    this.body = professor;
}