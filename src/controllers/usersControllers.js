const path = require('path');

const usersControllers = {
    register: function(req, res){
       res.sendFile(path.resolve(__dirname, '../views/users/register.html'))
        // res.sendFile(register, (err) => {
        //     if (err) {
        //       res.status(500).send('It looks like something crashed...');
        //     }
        //   });    
    },
    login: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/users/login.html'))
        // res.sendFile(login, (err) => {
        //     if (err) {
        //       res.status(500).send('It looks like something crashed...');
        //     }
        //   });
    },
    newUser: function (req, res) {
        res.sendFile(path.resolve(__dirname, ''))
        res.sendFile(newUser, (err) => {
            if (err) {
              res.status(500).send('It looks like something crashed...');
            }
          });
    }
}

module.exports = usersControllers;