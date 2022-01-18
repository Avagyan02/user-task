import 'dotenv/config';
import User from '../../../models/userSchema';
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';
import responseHelper from '../../../utils/responseHelper';
import { HTTP_STATUSES } from '../../../utils/constants';

async function signIn(req, res) {
  try {
    const secretKey = process.env.JWT_SECRET;
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return responseHelper(res, HTTP_STATUSES.BAD_REQUEST);
    }
    const pass = bcrypt.compareSync(req.body.password, user.password);
    if (!pass) {
      return responseHelper(res, HTTP_STATUSES.BAD_REQUEST);
    }
    const token = JWT.sign({
       id: user.id,
       username: user.username,
    }, secretKey);
    responseHelper(res, HTTP_STATUSES.SUCCESS, true, token);
  } catch (error) {
    responseHelper(res, HTTP_STATUSES.INTERNAL_SERVER_ERROR);
  }
}

export default signIn;
