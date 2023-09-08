const express=require('express')
const app=express()
app.use(express.json())

app.get('/',(req,res)=>{
  res.send('BFHL')
})
app.get('/bfhl',(req,res)=>{
  res.status(200).json({operation_code:1})
})
app.post('/bfhl',(req,res)=>{
  const {data}=req.body
  // segregating the numbers from data
  let numbers=[]
  for(let i=0;i<data.length;i++){
    if(!isNaN(data[i])){
      numbers.push(data[i])
    }
  }
  //filtering the alphabets
  let alphabets=data.filter(alp=>!numbers.includes(alp))
  //finding the highest alphabet
  let highest_alphabet=alphabets.sort()
  res.json({is_success:true,user_id:"Sparsh_kumar_11022002",email:"sk9128@srmist.edu.in",roll_number:"RA2011003010446",numbers,alphabets,highest_alphabet:[highest_alphabet[highest_alphabet.length-1]]})
})
app.listen(7000,()=>{
  console.log('Listening to server....')
})