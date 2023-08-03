/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_EMAIL_JS_SERVICE_ID: process.env.REACT_EMAIL_JS_SERVICE_ID,
    REACT_EMAIL_JS_TEMPLATE_ID: process.env.REACT_EMAIL_JS_TEMPLATE_ID,
    REACT_EMAIL_JS_PUBLIC_KEY: process.env.REACT_EMAIL_JS_PUBLIC_KEY,
    REACT_RECAPTCHA_SITE_KEY: process.env.REACT_RECAPTCHA_SITE_KEY,
    REACT_RECAPTCHA_SECRET_KEY: process.env.REACT_RECAPTCHA_SECRET_KEY,
  },
};

module.exports = nextConfig;
