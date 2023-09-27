/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  reactStrictMode: true,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options
    styledComponents: true,
  },
};

module.exports = nextConfig;
