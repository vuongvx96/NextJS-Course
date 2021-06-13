const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "vuong",
        mongodb_password: "jXt3OiZpq3i0h32i",
        mongodb_clustername: "project0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "vuong",
      mongodb_password: "jXt3OiZpq3i0h32i",
      mongodb_clustername: "project0",
      mongodb_database: "my-site",
    },
  };
};
