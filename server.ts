import express from 'express';
import { AppDataSource } from './data-source'; 

const server = express();
const PORT = 3000;

server.use(express.json());

// --- Le démarrage du serveur dépend de la connexion BDD ---
AppDataSource.initialize()
  .then(() => {
    console.log(" Data Source a été initialisé avec succès !");

    server.get('/', (req, res) => {
      res.status(200).send('Server is running ohoh');
    });

    server.listen(PORT, () => {
      console.log(` Server is listening on port ${PORT} ... `);
    });

  })
  .catch((err) => {
    console.error("❌ Error during Data Source initialization:", err);
  }); 

