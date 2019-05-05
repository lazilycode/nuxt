const middleware = {}

middleware['static'] = require('@/middleware/static.js');
middleware['static'] = middleware['static'].default || middleware['static']

export default middleware
