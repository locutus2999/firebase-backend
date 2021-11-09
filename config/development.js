module.exports = {
  env: 'development',

  /**
   * Configuration to allow email sending used on:
   * backend/src/services/shared/email/emailSender.js
   *
   * More info: https://nodemailer.com
   */
  email: {
    from: 'mssit@m-s-s.com',
    host: 'mail.m-s-s.com',
    port: 1200,
    secure: false,    
    auth: {
      user: 'mssit@m-s-s.com',
      pass: 'InfoTech4921%',
    },
  },

  /**
   * Client URL used when sending emails.
   */
  clientUrl: 'https://capabilities.mssdev.works',

  /**
   * When this email is set, all requests will automatically authenticate using this email.
   * Useful for testing purposes.
   */
  userAutoAuthenticatedEmailForTests:
    'mssit@m-s-s.com',


  /**
   * Enables GraphiQL
   * See: https://github.com/graphql/graphiql
   */
  graphiql: true,

};
