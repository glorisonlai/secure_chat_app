const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const defaultExports = {
  reactStrictMode: true,
  swcMinify: true,
};

const devExports = {
  env: {
    authDomain: process.env.AUTHDOMAIN,
    authClientId: process.env.AUTHAPIKEY,
  },
};

const prodExports = {};

module.exports = (phase, { defaultConfig }) => {
  return phase === PHASE_DEVELOPMENT_SERVER
    ? {
      ...defaultExports,
      ...devExports,
    }
    : {
      ...defaultExports,
      ...prodExports,
    };
};
