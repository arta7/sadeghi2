
var  Db = require('./dboperation');
// var  Order = require('./Order');
var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
// const sql = require('mssql')



var  app = express();
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
    try
    {
    console.log('middleware');
    next();
    }
    catch(error)
    {
        console.log('response : ',response.status(400).json(null))
        console.log('err : ',error)
    }
})
   
  router.route('/AddUsers').post((r, response) => {
    let  order = { ...r }
    Db.AddUsers(order,r, response).then((data) => {
        // console.log('response',data)
        console.log('response',response,'data : ',data)
    }).catch((error)=>{
      response.status(400).json(null)
        console.log('error : ',error)
    })
  })

  router.route('/UpdateUsersPassword').post((r, response) => {
    let  order = { ...r }
    Db.UpdateUsersPassword(order,r, response).then((data) => {
        // console.log('response',data)
        console.log('response',response,'data : ',data)
    }).catch((error)=>{
      response.status(400).json(null)
        console.log('error : ',error)
    })
  })


  router.route('/UpdateUsers').post((r, response) => {
    let  order = { ...r }
    Db.UpdateUsers(order,r, response).then((data) => {
        // console.log('response',data)
        console.log('response',response,'data : ',data)
    }).catch((error)=>{
      response.status(400).json(null)
        console.log('error : ',error)
    })
  })
  router.route('/CheckUserLogin').post((r, response) => {
    let  order = { ...r }
    Db.CheckUserLogin(order,r, response).then((data) => {
        // console.log('response',data)
        console.log('response',response,'data : ',data)
    }).catch((error)=>{
      response.status(400).json(null)
        console.log('error : ',error)
    })
  })


  // router.route('/UpdateUsers').post((request, response) => {
  //   let  order = { ...request.body }

  //   console.log('order',order)

  //   Db.UpdateCountersProducts(order).then(data  => {
  //     response.status(200).json(data);
  //   }).catch((error)=>{
  //     console.log('error ',error)
  //   })
  // })
   
  var port = 8090;
  app.listen(port);
  console.log('Order API is runnning at ' + port);