import path  from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const isProduction = 'production'

const config = {
    entry: './src/employees.jsx',
    output: {
        filename: 'employees.bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    plugins: [
        //Add any webpack plugins here
    ],
    module: {
        rules:[
            {
                test: /\.jsx?$/,
                //exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
}

export default function() {
    if (isProduction){
        config.mode = 'production'
    }else{
        config.mode = 'development'
    }
    return config
}