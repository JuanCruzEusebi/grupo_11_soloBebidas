const path = require('path')

const mainControllers = {
    index: function (req, res) {
        res.sendFile(path.resolve(__dirname, "../views/index.html"))     
    }
}

module.exports = mainControllers;