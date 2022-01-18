import User from '../../../models/userSchema';
import bcrypt from 'bcrypt';
import responseHelper from '../../../utils/responseHelper';
import { HTTP_STATUSES } from '../../../utils/constants';

async function signUp(req, res) {
  try {
    await User.create({ username: req.body.username, password: bcrypt.hashSync(req.body.password, 10) });
    responseHelper(res, HTTP_STATUSES.SUCCESS, true);
  } catch (error) {
    responseHelper(res, HTTP_STATUSES.INTERNAL_SERVER_ERROR);
  }
}

export default signUp;
