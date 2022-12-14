module.exports={
    mode:"development",
    module:{
        rules:[
            {
                test: /.\.js$/,
                exclude:/node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }               
            }

        ]
    },
    devServer:{
        static:'./dist',
        client:{
            reconnect: false,
        },
    }
}