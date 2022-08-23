
module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
        "\\.[jt]sx?$": "ts-jest",
    },
    "moduleDirectories": [
        "src",
        "node_modules"
    ],
    moduleNameMapper: {
        // Force module to resolve with the CJS entry point, because Jest does not support package.json.exports.
        // "@sharegate/orbit-ui": require.resolve("@sharegate/orbit-ui"),
        // "@orbit-ui/components": require.resolve("@orbit-ui/components")
    },
    // transformIgnorePatterns: ["./node_modules/(?!@orbit-ui/components|@sharegate/orbit-ui)", "./node_modules"],
    transformIgnorePatterns: [
         // '/node_modules/(?!@sharegate/orbit-ui)',
         // '/node_modules/(?!@orbit-ui/components)',
    ],
};