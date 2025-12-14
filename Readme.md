🛡️ Backend Safety Aaron##Project OverviewThis project serves as the robust backend service for the Safety Aaron application. It is built using **Node.js, Express.js, and TypeScript**, and is designed to manage safety event data efficiently using **TypeORM** integrated with a **PostgreSQL** database.

##🛠️ Technology Stack| Component | Technology | Role |
| --- | --- | --- |
| **Language** | TypeScript | Strong typing for reliability. |
| **Web Framework** | Express.js | Core API routing and handling. |
| **ORM** | TypeORM | Object-Relational Mapping for database interaction. |
| **Database** | PostgreSQL (`pg`) | Persistent data storage. |
| **Development** | `ts-node-dev` | Live server reload during development. |

##⚙️ Local Setup (Getting Started)This section provides the essential steps to get the server running on your local machine.

###1. PrerequisitesEnsure you have the following software installed:

* **Node.js** (Recommended Version: v18 or higher)
* **npm** (Node Package Manager)
* A running instance of **PostgreSQL**.

###2. InstallationFollow these commands to clone the repository and install all necessary dependencies:

```bash
# Clone the repository
git clone https://github.com/AaronMadar/backend-safetyAaron.git

# Navigate to the project directory
cd backend-safetyAaron

# Install dependencies from package.json
npm install

```

###3. Environment ConfigurationThe application relies on environment variables for sensitive data (database credentials, ports, etc.).

1. Create a file named **`.env`** in the root directory of the project.
2. Populate it with the configuration details required to connect to your local PostgreSQL instance:

```env
# Server Port
PORT=3000

# PostgreSQL Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DATABASE=your_database_name

```

###4. Running the Server####Development ModeUse the following command to start the server. The `ts-node-dev` utility will watch for changes to TypeScript files and automatically restart the server, providing a smooth development experience.

```bash
npm start

```

*The backend API will be accessible at: `http://localhost:PORT` (default: `http://localhost:3000`).*

##🌍 API Structure and EndpointsThe primary resource for this API is `safety-events`.

| Method | Route | Description | Requires Auth? |
| --- | --- | --- | --- |
| `POST` | `/safety-events` | Creates a new safety event record. | No |
| `GET` | `/safety-events` | Retrieves a list of all safety events. | No |
| `PUT` | `/safety-events/:id` | Updates a specific event identified by its ID. | No |
| `DELETE` | `/safety-events/:id` | Deletes a specific event identified by its ID. | No |

###`POST /safety-events` Validation Requirements**Crucial Note on Validation:** The API enforces strict validation. All fields listed below must be present in the request body, and **none** of them can be empty (`null`, `undefined`, an empty string `""`, or an empty array `[]`).

* **Required Request Body (JSON Example):**
```json
{
    "activity": "Maintenance",
    "damage": "Minor",
    "date": "2025-12-14T10:00:00Z",
    "description": "Minor leak in pipe 3B.",
    "kindOfIncident": "Fluid Leak",
    "place": ["Sector 3", "Building B"], 
    "severityIncident": "Low",
    "unitActivity": "Engineering",
    "unity": "HQ",
    "weather": "Sunny"
}

```


* **Specific Field Requirement (`place`):**
* The `place` field must be an **Array of values** (e.g., `["String 1", "String 2"]`).
* The array **must not be empty** (`[]`).


* **Error Handling:**
* A **`400 Bad Request`** status code will be returned if any required field is missing or contains an empty value (including an empty array).


