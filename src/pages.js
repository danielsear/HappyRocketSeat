//orphanages = require("./database/fakeData.js");

const DataBase = require("./database/db");
const saveDataOrphanage = require("./database/saveDataOrphanage");

//criando rotas
module.exports = {
  index(request, response) {
    //const city = request.query.city;

    return response.render("index");
  },
  async orphanage(request, response) {
    const id = request.query.id;
    try {
      const db = await DataBase;
      const results = await db.all(
        `SELECT * FROM  orphanages WHERE id="${id}"`
      );
      const orphanage = results[0];
      //console.log(orphanage[0]);

      orphanage.images = orphanage.images.split(","); //transformando as string em um array, quando achar uma virgula cria uma casa do array
      orphanage.firstImage = orphanage.images[0];
      if (orphanage.open_on_weekends == "0") {
        orphanage.open_on_weekends = false;
      } else {
        orphanage.open_on_weekends = true;
      }

      return response.render("orphanage", { orphanage });
    } catch (error) {
      console.log(error);
      return response.send("Erro no banco de dados!");
    }
    //  return response.render("orphanage");
  },
  async orphanages(request, response) {
    // return response.render("orphanages", { orphanages }); foi usado com o fakeData
    try {
      const db = await DataBase;
      const orphanages = await db.all("SELECT * FROM  orphanages");
      return response.render("orphanages", { orphanages });
    } catch (error) {
      console.log(error);
      return response.send("Erro no banco de dados!");
    }
  },
  createOrphanage(request, response) {
    return response.render("create-orphanage");
  },
  async saveOrphanage(request, response) {
    console.log(request.body);
    const fields = request.body;
    //validar se todos os campos estao preenchidos
    //console.log(Object.values(fields)); ele pega os valores do objeto e retorna um array
    //se achar algo vazio entre
    if (Object.values(fields).includes("")) {
      return response.send("Todos os campos devem ser preenchidos!");
    }

    try {
      //salvar um orfanato
      const db = await DataBase;
      await saveDataOrphanage(db, {
        latitude: fields.latitude,
        longitude: fields.longitude,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      });
      //redirecionamento
      return response.redirect("/orphanages");
    } catch (error) {
      console.log("error");
      return response.send("Erro no banco de dados");
    }
  },
};
