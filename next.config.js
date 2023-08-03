/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_EMAIL_JS_SERVICE_ID: process.env.REACT_EMAIL_JS_SERVICE_ID,
    REACT_EMAIL_JS_TEMPLATE_ID: process.env.REACT_EMAIL_JS_TEMPLATE_ID,
    REACT_EMAIL_JS_PUBLIC_KEY: process.env.REACT_EMAIL_JS_PUBLIC_KEY,
    REACT_RECAPTCHA_SITE_KEY: process.env.REACT_RECAPTCHA_SITE_KEY,
    REACT_RECAPTCHA_SECRET_KEY: process.env.REACT_RECAPTCHA_SECRET_KEY,
    MY_AWS_ACCESS_KEY: process.env.MY_AWS_ACCESS_KEY,
    MY_AWS_SECRET_KEY: process.env.MY_AWS_SECRET_KEY,
    MY_AWS_REGION: process.env.MY_AWS_REGION,
    MY_AWS_BUCKET_NAME: process.env.MY_AWS_BUCKET_NAME,
  },
};

module.exports = nextConfig;
