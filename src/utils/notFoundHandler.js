import { HTTP_STATUSES } from './constants';

function notFound(req, res) {
  return res.status(HTTP_STATUSES.NOT_FOUND.status).send(HTTP_STATUSES.NOT_FOUND.message);
}

export default notFound;
