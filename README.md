# companies-service
Este es un microservicio de companies para DBGERH_Talent


# Inicializa Node
npm init -y

Esto crea package.json.

# Instalación de dependencias de ejecución
npm install dotenv express msnodesqlv8 mssql reflect-metadata

# Instalación de herramientas de desarrollo (Babel, Nodemon)
npm install -D @babel/cli @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/preset-env nodemon

# Crea un archivo .env en la raíz del proyecto basándote en la siguiente plantilla:
PORT=3001
DB_SERVER=tu_server
DB_DATABASE=DBGERH_Talent
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_DOMAIN=tu_dominio