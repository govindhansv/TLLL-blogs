const bcrypt = require('bcrypt')
var db = require('./connection')
var ObjectId = require('mongodb').ObjectId


module.exports={
    doSignup:(userdata)=>{
        return new Promise(async(resolve,reject)=>{
            let user= await db.get().collection('users').findOne({gmail:userdata.gmail})
            if (user) {
                let response = {}
                response.signupstatus = false
                resolve(response)
            } else {
                console.log(userdata);
                userdata.password=await bcrypt.hash(userdata.password,10)
                userdata.img = 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                db.get().collection('users').insertOne(userdata).then((response)=>{
                    response.signupstatus = true
                    response.user = userdata
                    resolve(response)
                })            
            }
        })
    }, 
    doLogin:(userdata)=>{
        return new Promise(async(resolve,reject)=>{
            let user= await db.get().collection('users').findOne({gmail:userdata.gmail})
            
            let response = {}
            if (user) {
                
                let validPassword = await bcrypt.compare(userdata.password,user.password)
                if(!validPassword){
                    console.log('login failed wrong password');
                    response.loginstatus = false
                    resolve(response)
                }else {
                    console.log('login success');
                    response.loginstatus = true
                    response.user = user
                    resolve(response)
                }
            }else{
                console.log('login failed');
                    response.loginstatus = false
                    resolve(response)
            }
            })  
    },
    imgUpload:(data)=>{
        return new Promise(async(resolve,reject)=>{
           
            console.log(data);
            let img = data.imgurl
            let id = data.userid
            console.log(img,id);
                cloudinary.v2.uploader.upload("https://media.istockphoto.com/photos/the-girl-standing-on-the-rocks-near-the-beach-with-beautiful-million-picture-id1142366551?b=1&k=20&m=1142366551&s=170667a&w=0&h=UI08guBTkXyI_C7R2pITkP6UB8qjk_YrFOfUTQ17mBM=",
                { public_id:"olympic_flagfgd" }, 
                function(error, result) {console.log(result); })

            })  
    },
    
}