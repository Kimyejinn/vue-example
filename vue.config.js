const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false, //esLint 설정 끄기
	//outputDir: '../src/main/resources/static', //npm run build 실행할 때 파일이 생성되는 위치
	//indexPath: '../static/index.html', //index.html 파일이 생성되는 위치
	devServer: {
		//Spring Boot의 내장 WAS 주소
		proxy: {
			'/api': {
				target: 'http://localhost:8092',
				pathRewrite: { '^/': '' },
				changeOrigin: true,
				secure: false,
			},
		},
	},
});
