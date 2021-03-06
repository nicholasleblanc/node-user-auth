import joi from 'joi';

const register = {
  body: {
    email: joi.string().email({ minDomainAtoms: 2 }).required(),
    password: joi.string().min(6).max(128).required()
  }
};

const login = {
  body: {
    email: joi.string().email().required(),
    password: joi.string().min(6).max(128).required(),
    token: joi.string().length(6)
  }
};

const activate = {
  body: {
    token: joi.string().required()
  }
};

const forgotPassword = {
  body: {
    email: joi.string().email().required()
  }
};

const resetPassword = {
  body: {
    email: joi.string().email().required(),
    token: joi.string().required(),
    newPassword: joi.string().min(6).max(128).required()
  }
}

export { register, login, activate, forgotPassword, resetPassword };
