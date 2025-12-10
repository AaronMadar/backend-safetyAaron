import express from 'express';
import { AppDataSource } from './data-source'; 

const server = express();
const PORT = 3000;

server.use(express.json());

// --- Le démarrage du serveur dépend de la connexion BDD ---
AppDataSource.initialize()
  .then(() => {
    console.log("🎉 Data Source a été initialisé avec succès !");

    // Définition des routes Express (peut être ici ou importées)
    server.get('/', (req, res) => {
      // 💡 Petite correction: .status(200) doit être avant .send() ou comme argument
      res.status(200).send('Server is running ohoh');
    });

    // 🚀 Démarrer le serveur UNIQUEMENT après l'initialisation de la BDD
    server.listen(PORT, () => {
      console.log(`⚡️ Server is listening on port ${PORT} ... `);
    });

  })
  .catch((err) => {
    console.error("❌ Error during Data Source initialization:", err);
  }); 

// Note: La ligne server.listen() a été déplacée dans le .then()