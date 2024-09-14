
const logger = require('./logger');
const service = require('./service');


const log = new logger()

const ser = new service(log);

ser.userService();
