var express = require('express')
var app = express()

router.all('*', requireAuthentication)
router.all('*', loadUser);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
