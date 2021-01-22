module.exports = {
  plugins: [
    ["@babel/plugin-transform-modules-umd", { exactGlobals: true, globals: { index: "l" } }],
  ],
};
