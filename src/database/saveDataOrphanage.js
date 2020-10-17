function saveDataOrphanage(db, orphanage) {
  return db.run(`
    INSERT INTO orphanages(
        latitude,
        longitude,
        name,
        about,
        whatsapp,
        images,   
        instructions ,
        opening_hours ,
        open_on_weekends
    ) VALUES(
        "${orphanage.latitude}",
        "${orphanage.longitude}",
        "${orphanage.name}",
        "${orphanage.about}",
        "${orphanage.whatsapp}",
        "${orphanage.images}",
        "${orphanage.instructions}",
        "${orphanage.opening_hours}",
        "${orphanage.open_on_weekends}"
      );
`);
}

module.exports = saveDataOrphanage;
