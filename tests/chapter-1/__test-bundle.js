/**
 * Initialize utils
 */
require('../utils');

/**
 * Automatically include
 * all test files '.test.js(x)'
 */
const context = require.context('.', true, /.+\.test\.jsx?$/);
context.keys().forEach(context);
module.exports = context;
