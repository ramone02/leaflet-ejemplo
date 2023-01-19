const express = require("express");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4002;

const amqp = require("amqplib");
const { response } = require("express");
var channel, connection;
const FileService = require('./file');


connectQueue() // call connectQueue function
async function connectQueue() {
    let punto;
    //const file = new FileService();
    try {
        //const file = new FileService();
        connection = await amqp.connect("amqp://localhost:5672");
        channel = await connection.createChannel()
        
        // connect to 'test-queue', create one if doesnot exist already
        await channel.assertQueue("test-queue")
        
        channel.consume("test-queue", data => {
            console.log("Data received : ", `${Buffer.from(data.content)}`);
            punto = data.content.toString();
            channel.ack(data)
        })

    } catch (error) {
        console.log(error)
    }
    return punto;
}

/*const getData = async ()=>{
    let data;
    
    return data;
}

app.get("/get-msgs", async(req,res)=>{
    const data = await getData();
    console.log(data);
    res.send(data);
}) */



app.listen(PORT, () => console.log("Server running at port " + PORT));

