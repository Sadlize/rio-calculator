module.exports = {
  plugins: [
    ["postcss-import", {
      path: ["src/styles"],
    }],
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
    "postcss-extend-rule",
    "postcss-nested",
  ],
}
