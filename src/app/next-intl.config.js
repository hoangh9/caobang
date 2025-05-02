// next-intl.config.js
const { locales, defaultLocale } = require('./i18n');

/** @type {import('next-intl').NextIntlConfig} */
module.exports = {
  locales,
  defaultLocale,
  localeDetection: true
};