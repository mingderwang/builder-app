const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({});
console.log("nextConfig: " + JSON.stringify(nextConfig));

module.exports = nextConfig;
