import path from "path"

export default {
    mode: "development",
    entry: {
        ac: "./src/js/ac.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve("public/js")
    }
}