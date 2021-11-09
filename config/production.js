module.exports = {
  env: 'production',

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
   * Enables GraphiQL
   * See: https://github.com/graphql/graphiql
   */
  graphiql: false,

};
