var express = require('express');
var router = express.Router();

const data = [{
  id: 1,
  name: 'Scott Cawthon',
  age: 46,
  height: '1.75 meters'
},
{
  id: 2,
  name: 'Mike Coax',
  age: 60,
  height: '1.78 meters'
},
{
  id: 3,
  name: 'Andrew Bashchak',
  age: 18,
  height: '1.8 meters'
},
]

router.get('/', function (req, res, next) {
  console.log(req.query.id);

  res.json(data);
});

module.exports = router;
