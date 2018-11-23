db.hornbach_components.find().forEach(
  function (e) {
    // update document, using its own properties
    

    // remove old properties
    e.image = 'https://www.hornbach.at' + e.image

    // save the updated document
    db.hornbach_components.save(e);
  }
)