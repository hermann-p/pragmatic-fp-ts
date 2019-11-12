module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.+(ts|js)", "**/*.test.(ts|js)"],
  transform: { "^.+\\.(ts|tsx)?$": "ts-jest" },
  coverageReporters: ["html"]
};
