// cucumber.js
module.exports = {
  default: {
    require: ["features/step_definitions/**/*.js"],
    format: ["pretty"],
    paths: ["features/**/*.feature"],
    publishQuiet: true,
  },
};
