const express = require("express");
const { createTodo,updateTodo } =  require("./type");
const {todo} = require("./DB") 
const app = express();

app.use(express.json());

app.post('/todos',async function(req, res){
   const userData = req.body;
   const parsedData = createTodo.safeParse(userData);

   if (!parsedData.success) {
      res.status(411).json({
         msg : "You have sent wrong input"
      })
   } 
   
   // put it in mongoDB database
   await todo.create({
      title : userData.title,
      description : userData.description,
      completed : false
   })

   res.status(200).json({
      msg : "Todo creted"
   })
})



app.get('/todos', async function(req,res){

   const data = await todo.find({})
   res.json({
      data
   })

})



app.put('/completed', async function(req,res){
   const updateData = req.body;
   const parsedData = updateTodo.safeParse(updateData);

   if (!parsedData.success) {
      res.status(411).json({
         msg : "You have sent wrong input"
      })
   }
   
   // put it in MongoDB database
   
   await todo.findByIdAndUpdate(
      req.body._id, 
      { completed: true } 
    );
    

   res.status(200).json({
      msg : "Todo marked completed"
   })

})

app.listen(3000, () => {
   console.log("Listning on port 3000");
   
})