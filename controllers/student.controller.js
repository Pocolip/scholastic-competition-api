
var Router = require('koa-router'),
    koaBody = require('koa-better-body')(),
    middleware = require('../middleware');

module.exports = function(){

    var loadModels = middleware.loadModel();

    var studentController = new Router()
        .post('/student', loadModels, koaBody, create)
        .get('/student', loadModels, index)
        .get('/student/:id', loadModels, show);

    return studentController.routes();
}

/**
 * Create a Student Entity
 */
function *create(){
    var payload = this.request.body.fields;

    if(!payload) this.throw('Invalid Payload', 400);

    try{
        yield this.models['Student'].create(payload);
    }catch(err){
        this.throw(err.message, err.status || 500);
    }

    //Created
    this.status = 201;
}

function *index(){
    var students;
    try {
        students = yield this.models['Student'].findAll({
            attributes : ['id', 'name', 'address1', 'address2', 'zipcode', 'city', 'grade', 'phone', 'createdAt', 'updatedAt']
        });
    } catch (err) {
        this.throw(err.message, err.status || 500);
    }

    if(!students || students.length < 1){
        this.throw('Not Found', 404);
    }

    this.status = 200;

    this.body = { students : students}
}

function *show(){
    var id = this.params.id,
        student;

    try {
        student = yield this.models['Student'].find({
            where : {
                id : id
            },
            attributes : ['id', 'name', 'description', 'grade', 'location', 'date', 'requirements', 'createdAt', 'updatedAt']
        });
    } catch(err) {
        this.throw(err.message, err.status || 500);
    }

    if(!student) {
        this.throw('Not Found', 404);
    }

    this.status = 200;

    this.body = student;
}