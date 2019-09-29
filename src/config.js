const prodEnv = {
    apiEndpoint: "/api/"
}
const devEnv = {
    apiEndpoint: "http://localhost:8000/api/"
}

module.exports = process.env.NODE_ENV === 'development' ? devEnv : prodEnv