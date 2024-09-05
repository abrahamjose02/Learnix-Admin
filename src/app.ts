import { connectDB } from "./config/db";
import RabbitMQClient from './rabbitMQ/client';

class App{
    constructor(){
        RabbitMQClient.initialize();
        connectDB();
    }
}

export default App;