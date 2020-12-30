// taken from a personal project

async function login(req, res, callback) {
  try {
    const user = await User.findOne({emai: req.body.emai})
    const isMatch = await user.comparePassword(req.body.password)

    if (!isMatch) return res.status(401).send('Incoorect Password')

    const payload = {id: user._id, emai: user.emai}
    const token =  await jwt.sign(payload, config.secret, {})

    user.token = token
    const success = await user.save()

    res.json({token})
  } catch (err) {
    callback(err)
  }
}
