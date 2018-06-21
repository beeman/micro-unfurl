const { router, get } = require('microrouter')
const { send } = require('micro')
const unfurl = require('unfurl.js')

const isUrl = /https?:\/\//

const rootRoute = async (req, res) => {
  const url = req.query['url']

  if (!url) {
    return send(res, 400, 'Please submit a url with querystring')
  }
  
  if (!isUrl.test(url)) {
    return send(res, 400, 'Please only submit http(s) urls')
  }

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  
  try {
    const result = await unfurl(url)
    send(res, 200, result)
  } catch (err) {
    send(res, 500, err)
  }

}

module.exports = router(
  get('/', rootRoute)
)
