export const HTTP_STATUSES = {
  SUCCESS: {
    status: 200,
    message: 'SUCCESS',
  },
  BAD_REQUEST: {
    status: 400,
    message: 'BAD_REQUEST',
  },
  NOT_AUTHORIZED: {
    status: 401,
    message: 'NOT_AUTHORIZED',
  },
  FORBIDDEN: {
    status: 403,
    message: 'FORBIDDEN',
  },
  NOT_FOUND: {
    status: 404,
    message: 'NOT_FOUND',
  },
  INTERNAL_SERVER_ERROR: {
    status: 500,
    message: 'INTERNAL_SERVER_ERROR',
  },
};

export const usernameRegexp = new RegExp(/^(?=[a-zA-Z0-9._]{5,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/);
export const passwordRegexp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
