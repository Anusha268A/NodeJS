const e=require('events');

const event=new e();
//multiple events
event.on('greet',()=>
{
  console.log("Hello Anshu");
});

event.on('greet',()=>
{
  console.log("Hello Anu");
});


event.emit('greet');

//passing data
event.on('welcome',(name)=>
{
  console.log(`welcome ${name}`);
});

event.emit('welcome','Ansh..!');

