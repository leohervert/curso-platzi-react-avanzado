const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '16ugkg',
  chromeWebSecurity: false,
  viewportWidth: 500,
  viewportHeight: 800,

  e2e: {
    baseUrl: 'https://petgram-lhervert.vercel.app',
    setupNodeEvents (on, config) {}
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack'
    }
  }
})
