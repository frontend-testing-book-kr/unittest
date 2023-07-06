/* 리스트 5-1
module.exports = {
  testEnvironment: "jest-environment-jsdom",
};
*/

export default {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testEnvironment: "jest-environment-jsdom",
  transform: { "^.+\\.(ts|tsx)$": ["esbuild-jest", { sourcemap: true }] },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "__reports__",
        filename: "jest.html",
      },
    ],
  ],
};
