module.exports = function babelConfig(api) {
    api.cache(true)
    return {
        presets: [
            '@babel/preset-typescript',
            '@babel/react',
            [
                '@babel/env',
                {
                    modules: false,
                    targets: {
                        node: '12',
                        browsers: ['last 2 versions']
                    }
                }
            ]
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-optional-chaining'
        ],
        ignore: ['node_modules', 'build', 'src/components/**/*.stories.tsx']
    }
}
