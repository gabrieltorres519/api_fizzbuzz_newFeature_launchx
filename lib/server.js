const ExplorerController = require("./controllers/ExplorerController");

const express = require("express");

const app = express()
app.use(express.json());
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello future api')
})

app.listen(port,()=>{
    console.log("App escuchando el puerto "+ port);
})


//Endpoint para recibir parámetros por query params, la misión y devolver los explorers en la misión
app.get('/v1/explorers/:mission',(request,response)=>{

    //La parte de la url :mission es un query params
    //Este es un método GET que va a decolver iniformación cuando se consulte   

    const mission = request.params.mission; //Recibimos el query params que nos envia el cliente

    const explorersInMission = ExplorerController.getExplorersByMission(mission); // Usando en método de la clase que contruí para usar los services

    response.json(explorersInMission);

})




//Endpoint para recibir parámetros por query params, la misión y devolver la cantidad de personas en la misión
app.get('/v1/explorers/amount/:mission',(request,response)=>{
    const mission = request.params.mission; //Recibimos el query params que nos envia el cliente

    const explorersAmountInMission = ExplorerController.getExplorersAmonutByMission(mission);

    response.json({mission: request.params.mission, quantity: explorersAmountInMission});
})



//Endpoint para recibir por query params la misión y devolver usernames de los explorers en la misión
app.get('/v1/explorers/usernames/:mission',(request,response)=>{

    const mission = request.params.mission;

    const usernamesByMission = ExplorerController.getExplorersUsernamesByMission(mission);

    response.json(usernamesByMission);

})



