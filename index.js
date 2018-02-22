const { router, get } = require('microrouter')
const unfurl = require('unfurl.js')

const rootRoute = async (req, res) => {
  if (req.query['url']) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.end(JSON.stringify(await unfurl(req.query['url'])));
  } else {
    res.end('Please submit parameter ?url=X');   
  }
}

module.exports = router(
  get('/', rootRoute)
)
