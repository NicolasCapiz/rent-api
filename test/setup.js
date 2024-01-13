// setup.js
module.exports = async () => {
  const { execSync } = require('child_process');

  const resetDatabase = () => {
    // Ejecutar el comando para reiniciar la base de datos
    execSync('npx prisma migrate reset --force');
  };

  // Llamar a la función para reiniciar la base de datos
  resetDatabase();
};
