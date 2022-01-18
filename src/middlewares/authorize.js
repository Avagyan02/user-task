import 'dotenv/config';
import jwt from 'jsonwebtoken';
import User from '../models/userSchema';
import { HTTP_STATUSES } from '../utils/constants';
import responseHelper from '../utils/responseHelper';

async function authorize(req, res, next) {
	try {
		let id;
		const secretKey = process.env.JWT_SECRET;
		if (req.headers.authorization) {
			const auth = req.headers.authorization.split(' ');
			if (auth[0] === 'Bearer' && auth[1]) {
				const token = auth[1];

				jwt.verify(token, secretKey, (err, payload) => {
					if (err) {
						console.log(`err ${err}`);
						return responseHelper(res, HTTP_STATUSES.NOT_AUTHORIZED);
					}
					id = payload.id;
				});
			}

			const user = await User.findOne({ _id: id });
			if (!user) {
				return responseHelper(res, HTTP_STATUSES.NOT_AUTHORIZED);
			}
			next();
		} else {
			return responseHelper(res, HTTP_STATUSES.NOT_AUTHORIZED);
		}
	} catch (error) {
		responseHelper(res, HTTP_STATUSES.INTERNAL_SERVER_ERROR);
	}
}

export default authorize;
