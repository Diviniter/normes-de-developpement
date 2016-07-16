Recommandations = new Mongo.Collection("recommandations");

Recommandations.allow({
  insert:function(){
    return true;
  }
});

RecommandationsSchema = new SimpleSchema({
  level:{
    type:String,
    label:"Niveau"
  },
  description:{
    type:String,
    label:"Description"
  },
  description_complement:{
    type:String,
    label:"Complément de description",
    optional:true
  },
  keyword:{
    type:[String],
    label:"Mots clés",
    optional:true
  }
});

RecommandationsSchema.messages({
  required: "Ce champ est requis"
});

Recommandations.attachSchema(RecommandationsSchema);
