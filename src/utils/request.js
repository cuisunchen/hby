import axios from 'axios'

axios.defaults.timeout = 10000

axios.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return error
    }
)
axios.interceptors.response.use(
    (res) => {
        console.log(res.data)
    },
    (error) => {
        return error
    }
)

const get = (url,params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
        })
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            reject(err.data)
        })
    })
}

export default {
    install: (app) => {
        app.config.globalProperties['$get'] = get;
    }
}