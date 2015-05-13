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
        .get('/professor', index)
        .get('/professor/:id', show);

    return professorController.routes();
}

/**
 * Create a Professor Entity
 */
function *create(){
    var payload = this.request.body.fields;

    if(!payload) this.throw('Invalid Payload', 400);

    try{
        yield this.models['Professor'].create(payload);
    }catch(err){
        this.throw(err.message, err.status || 500);
    }
}

function *index(){
    console.log('index');
}

function *show(){
    console.log('show');
}