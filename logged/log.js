
let date = new Date();
let currentHour = date.getHours();
console.log(currentHour)
let currentDay = date.getDay();
console.log(currentDay)

function logger(req,res,next){
 if(currentHour < 17 && currentHour >9 && currentDay < 6 && currentDay > 0 ){
  next()
 }else{
    res.send(`<h3>
    </br>
    </br>
    ===> This web application is only available during working hours (Monday to Friday,  from 9 to 17).</h3>`)
 }
 

}

module.exports=logger;