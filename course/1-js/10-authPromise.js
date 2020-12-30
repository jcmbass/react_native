// taken from a personal project

function login(req, res, callback) {
  User.findOne({emai: req.body.emai})
    .then(function(user) {
      return user.comparePassword(req.body.password)
    })
    .then(function(isMatch){
      if (!isMatch) res.status(401).send('Incoorect Password')
      else {
        const payload = {id: user._id, emai: user.emai}
        return jwt.sign(payload, config.secret, {})
      }
    })
    .then(function(token) {
      user.token = token
      return user.save()
    })
    .then(function() {
      res.json({token})
    })
    .catch(function(err) {
      return callback(err)
    })
