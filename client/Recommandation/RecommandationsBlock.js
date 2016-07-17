Template.RecommandationsBlock.helpers({
  recommandations : function(level){
    return Recommandations.find({level:level});
  },
  hasRecommandations : function(level){
    return Recommandations.find({level:level}).count() > 0;
  }
});
