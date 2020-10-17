const Database = require("./db");
const saveDataOrphanage = require("./saveDataOrphanage");

//.toString(),salvando o array como sttring
//o async possibilita usar o await=espera enquanto nao acabar >  da pra evitar de
//ficar usando   o .then()=enquanto , poluindo menos o codigo
Database.then(async (db) => {
  //inserir dados na tabela
  await saveDataOrphanage(db, {
    latitude: "-19.6786559",
    longitude: "-43.2279211",
    name: "lar dos meninos",
    whatsapp: "8744554",
    about:
      "Presta assistência para meninas crianças de 06 à 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    images: [
      "https://images.unsplash.com/photo-1580516091765-3978351061b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1567791124560-c60b7d227623?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1562790519-76a1627de754?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha se sentir a vontade e traga muito amor e paciência para dar",
    opening_hours: "Horário de visítas Das 8h até às 18h",
    open_on_weekends: "1",
  });
  //consultar dados na tabela
  const selectedOrphanages = await db.all("SELECT * FROM  orphanages");
  console.log(selectedOrphanages);
  //consultar apenas um orphanato de apenas um oprhanage
  // const orphanage = await db.all('SELECT * FROM  orphanages  WHERE id="3"');
  // console.log(orphanage);
  //deletar dado da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id > 4"));
  // await db.run('DELETE FROM orphanages WHERE id= "4"');
});
