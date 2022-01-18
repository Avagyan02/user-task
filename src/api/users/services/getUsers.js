import User from '../../../models/userSchema';
import responseHelper from '../../../utils/responseHelper';
import { HTTP_STATUSES } from '../../../utils/constants';

async function getUsers(req, res) {
  try {
    const users = await User.find({}, { __v: 0 }).select('-password -v');
    responseHelper(res, HTTP_STATUSES.SUCCESS, true, users);
  } catch (error) {
    responseHelper(res, HTTP_STATUSES.INTERNAL_SERVER_ERROR);
  }
}

export default getUsers;
