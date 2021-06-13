module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    test: /\.js$/,
    enforce: 'pre',
    use: 'eslint-loader',
    include: path.resolve(__dirname), // Look only in your project folder
    exclude: '/node_modules/'
  },
}
