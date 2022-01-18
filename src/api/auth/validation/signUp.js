import Joi from 'joi';
import User from '../../../models/userSchema';
import responseHelper from '../../../utils/responseHelper';
import { HTTP_STATUSES, usernameRegexp, passwordRegexp } from '../../../utils/constants';

async function bodyValidation(req, res, next) {
  try {
    const joiSchema = Joi.object().keys({
        username: Joi.string().pattern(usernameRegexp).required(),
        password: Joi.string().pattern(passwordRegexp).required(),
    });
    const { error } = joiSchema.validate(req.body);
    if (error) {
        return responseHelper(res, HTTP_STATUSES.BAD_REQUEST);
    }
    const user = await User.findOne({ username: req.body.username });
    if (user) {
        return responseHelper(res, HTTP_STATUSES.BAD_REQUEST);
    }
    next();
  } catch (err) {
    responseHelper(res, HTTP_STATUSES.INTERNAL_SERVER_ERROR);
  }
}

export default bodyValidation;
