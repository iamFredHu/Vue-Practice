// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    lintOnSave:false, // 关闭语法检查
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // }
    devServer: {
        proxy: {
            '/stu': {
                target: 'http://localhost:5000',
                pathRewrite:{'^/stu':''},
                ws: true, //支持 websocket
                changeOrigin: true
            },
            '/car': {
                target: 'http://localhost:5001',
                pathRewrite:{'^/car':''},
            }
        }
    }
}
