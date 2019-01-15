
db.getCollection("hornbach_components").find({}).forEach(function(doc){
         db.getCollection("hornbach_components").update({_id:doc._id}, {$set:{"article-link":"http://www.hornbach.at"}});
    });