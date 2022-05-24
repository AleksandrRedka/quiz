module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
			? '/production-sub-path/'
			: '/',
	css: {
		loaderOptions: {
			scss: {
				additionalData: `@import "~@/assets/styles/_general/_variables.scss";`
			}
		}
	}
}
