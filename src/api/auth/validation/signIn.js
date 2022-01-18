import Joi from 'joi';
import responseHelper from '../../../utils/responseHelper';
import { HTTP_STATUSES } from '../../../utils/constants';

function bodyValidation(req, res, next) {
  const joiSchema = Joi.object().keys({
    username: Joi.string().trim().required(),
    password: Joi.string().trim().required(),
  });
  const { error } = joiSchema.validate(req.body);
  if (error) {
    return responseHelper(res, HTTP_STATUSES.BAD_REQUEST);
  }
  next();
}

export default bodyValidation;
