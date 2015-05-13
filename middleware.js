/**
 * Created by cesarcruz on 5/13/15.
 */

var database = require('./models');

/**
 * Generate middleware functions
 */
module.exports = {
    loadModel : loadModel
}

/**
 * Load models into the context object
 * @returns {Function}
 */
function loadModel() {

    return function* (next) {
        this.models = database.sequelize.models;
        this.sequelize = database.sequelize;
        yield next;
    }
}