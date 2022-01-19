var express = require('express');
var router = express.Router();
var db = require('../connection')
// var fun = require('../functions')
// var ObjectId = require('mongodb').ObjectId


// /* GET users listing. */
// // const requiredlogin = (req,res)=>{
// //   if (req.session.user) {
// //       req.session.userstatus = true
// //   }else{
// //     req.session.userstatus = false
// //   }
// // }
// router.get('/', async function (req, res) {
//   if (req.session.loggedIN) {
//     let id = req.session.user
//     let user =  await db.get().collection('users').findOne({ _id: ObjectId(id) })
//     let blogs = await db.get().collection('blogs').find().toArray()
//     let newblog = blogs[0]
//     res.render('index', { blogs,user,newblog });
//   } else {
//     res.redirect('/')
//   }

// });


// router.get('/signup', (req, res) => {

//   if (req.session.signupstatusfalse) {
//     res.render('signup', { err: true })
//   } else
//     res.render('signup')
// })

// router.get('/blog/:id', async (req, res) => {
//   let id = req.params.id
//   let user =  await db.get().collection('users').findOne({ _id: ObjectId(req.session.user) })
//   let blog = await db.get().collection('blogs').findOne({ _id: ObjectId(id) })
//   let blogs = await db.get().collection('blogs').find().toArray()
//   res.render('blog', { blogs,user,blog })
// })

// router.post('/signup', (req, res) => {
//   fun.doSignup(req.body).then((response) => {
//     if (response.signupstatus) {
//       session = req.session;
//       session.user = response.insertedId
//       session.loggedfalse = false
//       session.loggedIN = true
//       res.redirect('/users/')
//     } else {
//       req.session.signupstatusfalse = true
//       res.redirect('/users/signup/')
//     }

//   })

// })
// router.get('/login', function (req, res) {
//   console.log(req.session);
//   if (req.session.loggedIN) {
//     res.redirect('/users/')
//   }
//   if (req.session.loggedfalse) {
//     res.render('login', { err: true });
//   } else {
//     res.render('login');
//   }
// });

// router.post('/login', (req, res) => {
//   fun.doLogin(req.body).then((response) => {
//     if (response.status) {
//       req.session.user = String(response.user._id)
//       req.session.loggedfalse = false
//       req.session.loggedIN = true
//       res.redirect('/users/')
//     } else {
//       req.session.loggedfalse = true

//       res.redirect('/users/login');
//     }
//   })
// })

// router.get('/logout', function (req, res) {
//   req.session.destroy()
//   res.redirect('/');
// });


// router.get('/myprofile', async function (req, res) {
//   let user = await db.get().collection('users').findOne({ _id: ObjectId(req.session.user) })
//   let blogs = await db.get().collection('blogs').find({ "userid": req.session.user }).toArray()
//   res.render('profile', { user, blogs })
// });
 


// router.get('/profile/:id', async function (req, res) {
//   let userid = req.params.id
//   let user = await db.get().collection('users').findOne({ _id: ObjectId(req.session.user) })
//   let bloguser = await db.get().collection('users').findOne({ _id: ObjectId(userid) })
//   let blogs = await db.get().collection('blogs').find({ "userid": userid }).toArray()
//   res.render('userprofile', { blogs, bloguser,user })
// });

// router.get('/newblog', async function (req, res) {
//   let user = await db.get().collection('users').findOne({ _id: ObjectId(req.session.user) })
//   res.render('newblog', { user })
// });
// router.post('/newblog', async function (req, res) {
//   let blogdata = req.body
//   if (!blogdata.imgurl) {
//     blogdata.imgurl = 'https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-3293148.jpg&fm=jpg'
//   }
//   db.get().collection('blogs').insertOne(blogdata).then((response)=>{
//     console.log(response.insertedId);
//     let blog =blogdata;
//     let user = db.get().collection('users').findOne({ _id: ObjectId(req.session.user) })
//     res.render('blog',{blog,user})
//   })
// });

// router.post('/search', async function (req, res) {
//   console.log(req.body);
// });


// router.get('/edit/:id', async function (req, res) {
//   let blogid = req.params.id
//   let user = await db.get().collection('users').findOne({ _id: ObjectId(req.session.user) })
//   let blog = await db.get().collection('blogs').findOne({ _id: ObjectId(blogid) })
//   res.render('newblog', { user,blog })
// });
// router.post('/edit/', async function (req, res) {
//   console.log(req.body);
//   let blogdata = req.body
//   if (!blogdata.imgurl) {
//   }
//   // fun.imgUpload(blogdata).then((response)=>{ //for cloudinary 
//   // })
  
//   let blogid = blogdata.blogid
//   console.log(blogid);
//   let myquery = {_id:ObjectId(blogid)}
//   let newvalues = { $set: {"name":req.body.name,"title":req.body.title,"blog":req.body.blog,"imgurl":blogdata.imgurl,"section":req.body.section}}
//   db.get().collection('blogs').updateOne(myquery,newvalues).then((resp)=>{
//     console.log(resp);
//   })
//   res.redirect('/users/myprofile')

// });


// router.get('/delete/:id', (req, res) => {
//   id = req.params.id
//   db.get().collection('blogs').deleteOne({ _id: ObjectId(id) })
//   res.redirect('/users/')
// })

// router.post('/dp', function (req, res) {
//   dp = req.files
//   console.log(dp);
//   res.redirect('/');
// });

// router.post('/updateprofile/:id', async function (req, res) {
//   let id = req.params.id
//   let myquery = {_id:ObjectId(id)}
//   let newvalues = { $set: {"about":req.body.about,"name":req.body.name}}
//   db.get().collection('users').updateOne(myquery,newvalues)
//   res.redirect('/users/myprofile')
// });


module.exports = router;