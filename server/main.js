import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.startup(() => {
  Recommandations.remove({});
  Recommandations.insert({"level":"weak", "description":"Standard faiblement recommandé", "description_complement":"complément de la règle"});
  Recommandations.insert({"level":"weak", "description":"Standard faiblement recommandé 2", "description_complement":"complément de la règle 2"});
  Recommandations.insert({"level":"intermediate", "description":"Standard moyennement recommandé"});
  Recommandations.insert({"level":"strong", "description":"Standard fortement recommandé"});
});
