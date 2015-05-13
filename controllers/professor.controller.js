/**
 * Created by cesarcruz on 5/13/15.
 */


var Router = require('koa-router'),
    koaBody = require('koa-better-body')();

module.exports = function(){

    var professorController = new Router()
        .post('/professor', create);

    return professorController.routes();
}

/**
 * Create a Professor Entity
 */
function *create(){
    console.log('Works');
}