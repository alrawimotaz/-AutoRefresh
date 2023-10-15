const targetTexts = [
  "The service is unavailable",
  "A timeout occurred",
  "Service Unavailable",
  "Server Error",
  "Web server is returning an unknown error",
  "502 Bad Gateway",
  "Error 1200",
  "System Update",
  "HTTP Error 404",
  "Connection timed out",
];

const errorUrls = [
  "https://visitjordan.gov.jo/404.html?aspxerrorpath=/travelcars/Default.aspx",
  "https://visitjordan.gov.jo/404.html?aspxerrorpath=/travelcars/CaptchaImage.axd",
];

if (targetTexts.some(text => document.body.textContent.includes(text))) {
  location.reload();
}

if (errorUrls.includes(window.location.href)) {
  location.reload();
}
