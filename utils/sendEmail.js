require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey('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');

const sendEmail = (to, from, subject, text) => {
  const msg = {
    to,
    from,
    subject,
    html: text,
  };

  sgMail.send(msg, function (err, result) {
    if (err) {
      console.log("Email Not Sent an Error has occured");
    } else {
      console.log("Email was Sent successfully");
    }
  });
};

module.exports = sendEmail;