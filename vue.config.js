// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                nsis: {
                    oneClick: false,
                    allowToChangeInstallationDirectory: true
                }
            },
          nodeIntegration: true
        }
    }
}
