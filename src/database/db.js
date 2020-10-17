//chamando o a biblioteca sqlite
const Database = require("sqlite-async");

function execute(db) {
  // console.log("entrei"); primeiro vc verifica se o database foi criado
  return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            latitude TEXT,
            longitude TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `); //template literos ou string= usase a craze
}
//primeira vez ele cria, segunda ele abre um aqruivo na pasta local, abrindo um diretorio e criando um arquivo /database.sqlite
//so pode continuar se o banco de dados estiver aberto
//o db é o resultado do then
module.exports = Database.open(__dirname + "/database.sqlite").then(execute);
