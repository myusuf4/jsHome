let obj ={
    name : "zukkowducation" ,
    teachers : 10 ,
    location : "beruniy",
    id : 888,
  }

  for(let i in obj){
    if(typeof(obj[i])==="number"){
        console.log(`${i}:${obj[i]}`);
    }
  }