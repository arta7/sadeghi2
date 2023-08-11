var  config = require('./dbconfig');
var mysql = require('mysql');



async  function  AddUsers(order,res,response) {
    try {
      let  pool = await  mysql.createConnection(config);
      console.log('order.body.Mobile  : ',order.body)
      var Name = order.body.Name ;
      var Family = order.body.Family ;
      var Mobile = order.body.Mobile ;
      var Gender = order.body.Gender ;
      var Education = order.body.Education ;
      var Password = order.body.Password ;
      var Ages = order.body.Age ;
      
      console.log('pool : ',pool)
      pool.connect(async function(err) {
        
        if (err) throw err;
        console.log("Connected!");
      })
      pool.query("SELECT COUNT(*) as Counts FROM Users where Mobile=?",[Mobile], function (err, result) {
        if (err) throw err;
        console.log( 'result :',result[0].Counts,Mobile);
        if(result[0].Counts == 0)
        {
          pool.query('INSERT INTO `Users`(`Name`, `Family`, `Mobile`,`Gender`,`Education`,`SignUpDate`,`Password`,`Age`) VALUES (?,?,?,?,?,CURRENT_TIMESTAMP(),?,?) '
          ,[Name,Family,Mobile,Gender,Education,Password,Ages], function (err, result) {
            if (err) throw err;
            response.send({ 'data': '200'})
            console.log( 'data : ', result)
          })

        }
        else
        {
          response.send({ 'data': '401'})
          console.log( 'Error :  Data Duplicated');
        }
       
    });
    }
    catch (error) {
      response.send({ 'data': '500'})
      console.log('error get',error);
      return false;
    }
  }

  async  function  CheckUserLogin(order,res,response) {
    try {
      let  pool = await  mysql.createConnection(config);
      console.log('order.body.Mobile  : ',order.body)
      var Mobile = order.body.Mobile ;
      var Password = order.body.Password ;
      console.log('pool : ',pool)
      pool.connect(async function(err) {
        
        if (err) throw err;
        console.log("Connected!");
      })
      pool.query("SELECT *  FROM Users where Mobile=? and Password=?",[Mobile,Password], function (err, result) {
        if (err) throw err;
        console.log( 'result :',result.length);
        if(result.length >0)
        {
            response.send({ 'data': '200','result':result})
            console.log( 'data : ', result);
        }
        else
        {
          response.send({ 'data': '400'})
          console.log( 'Error :  Data not Found');
        }
       
    });
    }
    catch (error) {
      response.send({ 'data': '500'})
      console.log('error get',error);
      return false;
    }
  }
  async  function  CheckUserAvailable(order,res,response) {
    try {
      let  pool = await  mysql.createConnection(config);
      console.log('order.body.Mobile  : ',order.body)
      var Mobile = order.body.Mobile ;
      console.log('pool : ',pool)
      pool.connect(async function(err) {
        
        if (err) throw err;
        console.log("Connected!");
      })
      pool.query("SELECT *  FROM Users where Mobile=?",[Mobile], function (err, result) {
        if (err) throw err;
        console.log( 'result :',result.length);
        if(result.length >0)
        {
            response.send({ 'data': '200'})
            console.log( 'data : ', result);
        }
        else
        {
          response.send({ 'data': '400'})
          console.log( 'Error :  Data not Found');
        }
       
    });
    }
    catch (error) {
      response.send({ 'data': '500'})
      console.log('error get',error);
      return false;
    }
  }



  async  function  UpdateUsers(order,res,response) {
    try {
      let  pool = await  mysql.createConnection(config);
      console.log('order.body.Mobile  : ',order.body)
      var Name = order.body.Name ;
      var Family = order.body.Family ;
      var Mobile = order.body.Mobile ;
      var Gender = order.body.Gender ;
      var Education = order.body.Education ;
      var Age = order.body.Age ;
      console.log('pool : ',pool)
      pool.connect(async function(err) {
        
        if (err) throw err;
        console.log("Connected!");
      })
      pool.query("SELECT COUNT(*) as Counts FROM Users where Mobile=?",[Mobile], function (err, result) {
        if (err) throw err;
        console.log( 'result :',result[0].Counts,Mobile);
        if(result[0].Counts == 1)
        {
          pool.query('Update Users set `Name`=?, `Family`=?,`Gender`=?,`Education`=?,`Age`=? Where `Mobile` =?'
          ,[Name,Family,Gender,Education,Age,Mobile], function (err, result) {
            if (err) throw err;
            response.send({ 'data': '200'})
            console.log( 'data : ', result);
          })
        }
        else
        {
          response.send({ 'data': '400'})
          console.log( 'Error :  Data Duplicated');
        }
       
    });
    }
    catch (error) {
      response.send({ 'data': '500'})
      console.log('error get',error);
      return false;
    }
  }

  async  function  UpdateUsersPassword(order,res,response) {
    try {
      let  pool = await  mysql.createConnection(config);
      console.log('order.body.Mobile  : ',order.body)
      var Password = order.body.Password ;
      var Mobile = order.body.Mobile ;
      console.log('pool : ',pool)
      pool.connect(async function(err) {
        
        if (err) throw err;
        console.log("Connected!");
      })
      pool.query("SELECT COUNT(*) as Counts FROM Users where Mobile=?",[Mobile], function (err, result) {
        if (err) throw err;
        console.log( 'result :',result[0].Counts);
        if(result[0].Counts == 1)
        {
          pool.query('Update Users set `Password`=? Where `Mobile` =?'
          ,[Password,Mobile], function (err, result) {
            if (err) throw err;
            response.send({ 'data': '200'})
            console.log( 'data : ', result);
          })
        }
        else
        {
          response.send({ 'data': '400'})
          console.log( 'Error :  Data Duplicated');
        }
       
    });
    }
    catch (error) {
      response.send({ 'data': '500'})
      console.log('error get',error);
      return false;
    }
  }





  module.exports = {
    AddUsers:  AddUsers,
    UpdateUsers:UpdateUsers,
    CheckUserLogin:CheckUserLogin,
    CheckUserAvailable:CheckUserAvailable,
    UpdateUsersPassword:UpdateUsersPassword
  }