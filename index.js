const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()
const UserRoute=require('./router/UserRoute')
const AdminRoute=require('./router/AdminRoute')
const chatRoute=require('./router/ChatRoute')

app.use(express.json())
app.use(cors())
app.use('/api/user',UserRoute)
app.use('/api/admin',AdminRoute)
app.use('/api/chat',chatRoute)
io.on("connection",(socket)=>{
     console.log('conn')
     socket.on('msges',(data)=>{
         console.log(data)
     })
 })

mongoose.connect('mongodb+srv://admin:sunsetwest1234RRR@royoapi.3qmdrjq.mongodb.net/Doconnect123?retryWrites').then(()=>{

     console.log('db connected')
     app.listen(3000,()=>console.log('server running'))
})