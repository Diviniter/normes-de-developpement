Template.Recommandations.onCreated(function() {
  this.autorun(()=> {
    this.subscribe('recommandations');
  });
});

Template.Recommandations.events({
  'click .new-recommandation':function() {
    openForm('insertRecommandationForm');
  }
});
