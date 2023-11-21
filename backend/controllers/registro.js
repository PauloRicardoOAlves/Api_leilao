function registro(req, res) {
    console.log(req.body)
    return res.json({ mensagem: "ok" })

}

module.exports = {
    registro
}