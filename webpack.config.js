import path from "path"

export default {
    mode: "development",
    entry: {
        ac: "./src/js/ac.js",
        mqtt: "./src/js/mqtt.js",
        mqttApi: "./src/js/mqttApi.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve("public/js")
    }
}