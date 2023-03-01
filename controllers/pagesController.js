const homeMain = (req, res) => {

    res.render("homeMain", {
        pagina: ""
    })

}

const home = (req, res) => {

    res.render("pages/home", {
        pagina: ""
    })

}

const ac = (req, res) => {

    res.render("pages/ac", {
        pagina: "A/C",
    })

}

export {
    homeMain,
    home,
    ac
}