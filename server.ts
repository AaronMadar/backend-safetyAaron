import express from 'express';
import { AppDataSource } from './data-source'; 
import safetyEventRouter from '@/routes/safety-event-route';
import cors from 'cors';

const server = express();
const PORT = 3000;

server.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));
server.use(express.json());
server.use('/safety-event', safetyEventRouter);


// --- Le démarrage du serveur dépend de la connexion BDD ---
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized with success !");

    server.listen(PORT, () => {
      console.log(` Server is listening on port ${PORT} ... `);
    });

  })
  .catch((err) => {
    console.error("❌ Error during Data Source initialization:", err);
  }); 

