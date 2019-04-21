const path=require('path')
const resolve=dir=>path.join(__dirname,'.',dir)

const webpackConfig={
    context:path.resolve(__dirname,'./'),
    resolve:{
        alias:{
            '@':resolve('src'),
            'common':resolve('/src/common')
        }
    },
    devtool: 'source-map'
    
}

module.exports=webpackConfig