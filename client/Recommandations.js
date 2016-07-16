Template.Recommandations.onCreated(function(){
  this.autorun(()=> {
    this.subscribe('recommandations');
  });
});
