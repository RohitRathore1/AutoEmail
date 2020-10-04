function sendEmail(e) {

  //response
  //getRespondentEmail()
  var html = HtmlService.createTemplateFromFile("email.html");
  var htmlText = html.evaluate().getContent();
  //Logger.log(htmlText);
  var emailTo = e.response.getRespondentEmail();
  var subject = "Thanks for filling out this form";
  var textBody = "This email requires...";
  var options = { htmlBody: htmlText };
  //Logger.log(emailTo);

  if(emailTo !== undefined){
  	GmailApp.sendEmail(emailTo, subject, textBody, options);
  }

}