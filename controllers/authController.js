const jwt = require('jsonwebtoken')

// db 假資料
const userSeed = [
  {
    id: 0,
    name: 'admin',
    email: 'admin@example.com',
    password: '123456',
    isAdmin: true,
  },
  {
    id: 1,
    name: 'user',
    email: 'user@example.com',
    password: '123456',
    isAdmin: false,
  },
]

module.exports = {
  signin(req, res) {
    /** @type {{ email: string, password: string }} */
    const { email, password } = req.body

    // 檢查 body
    if (!email || !password) {
      return res.json({ status: 'error', msg: 'required fields did not exist' })
    }

    // 確認登入資料
    const user = {...userSeed.find((user) => email === user.email)}
    if (!user) return res.status(401).json({ status: 'error', msg: 'no such user found' })
    if (password !== user.password) return res.status(401).json({ status: 'error', msg: 'password did not match' })

    // 簽發 token
    const payload = { id: user.id }
    const token = jwt.sign(payload, process.env.JWT_SECRET)

    delete user.password

    res.json({
      status: 'success',
      msg: 'ok',
      token,
      user,
    })
  }
}