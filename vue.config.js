const webpackConfig = require('./webpack.dev.config')

let vueConfig = {
	css: {
		extract: true,
		loaderOptions: {
			postcss: {
				plugins: [
					require('postcss-pxtorem')({
						rootValue: 17,
						propList: ['*']
					})
				]
			}
		}
	},
	configureWebpack: webpackConfig

}

module.exports = vueConfig