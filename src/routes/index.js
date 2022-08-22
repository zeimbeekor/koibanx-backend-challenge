const epxress = require('express');
const fs = require('fs');
const httpStatus = require('http-status');
const { handleErrorResponse } = require('../utils/handle-error');

const router = epxress.Router();
const pathRouter = `${__dirname}`;
const removeExtension = (fileName) => fileName.split('.').shift();

fs.readdirSync(pathRouter).filter((file) => {
  const fileWithOutExt = removeExtension(file);
  const skip = ['index'].includes(fileWithOutExt);
  if (!skip) {
    router.use('/', require(`./${fileWithOutExt}`));
  }
});

router.get('*', (req, res) => {
  handleErrorResponse(res, 'Not found', httpStatus.NOT_FOUND);
});

module.exports = router;
