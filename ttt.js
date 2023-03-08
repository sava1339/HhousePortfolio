const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    database:"Houses",
    password:"Ysavely1229Ysavely1339"
})
connection.connect((err)=>{
    if(err){
        console.log(`Ошибка с подключением к базе!!!: ${err}`)
    }else{
        console.log('Подключена База!!!')
    }
})