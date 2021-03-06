import ForgotPasswordToken from '../../models/forgot-password-token.model';

class ForgotPasswordTokenFixture {
  constructor({
    user,
    token = 'test'
  } = {}) {
    return new ForgotPasswordToken({
      user,
      token
    });
  }
}

export default ForgotPasswordTokenFixture;
