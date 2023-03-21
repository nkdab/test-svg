module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/test-svg/" : "/",
  presets: ["@vue/cli-plugin-babel/preset"],
};
