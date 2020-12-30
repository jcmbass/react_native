// taken from a personal project

function login(req, res, callback) {
  User.findOne({emai: req.body.emai}, function(err, user) {
    if (err) return callback(err)

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (err) return callback(err)
      if (!isMatch) return res.status(401).send('Incoorect Password')

      // add relevan data to token
      const payload = {id: user._id, emai: user.emai}

      jwt.sign(payload, config.secret, {}, function(err, token) {
        if (err) return callback(err)

        user.token = token
        user.save((err) => {
          if (err) return callback(err)
          res.json({token})
        })
      })
    })
  })
}
