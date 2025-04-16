/** @type {import('next').NextConfig} */

const messages = require("./src/i18n");

const nextConfig = {
    output: "standalone",
    i18n: {
        locales: Object.keys(messages),
        defaultLocale: Object.keys(messages)[0],
        localeDetection: false,
    },
};

module.exports = nextConfig
