const path=require('path')
const resolve=dir=>path.join(__dirname,'.',dir)

const webpackConfig={
    context:path.resolve(__dirname,'./'),
    resolve:{
        alias:{
            '@':resolve('src'),
            components:resolve('src/common/components'),
            style:resolve('src/common/components/_style')
        }
    },
    devtool: 'source-map'
    
}

module.exports=webpackConfig