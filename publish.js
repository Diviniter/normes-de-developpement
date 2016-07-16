if(Meteor.isServer) {
    Meteor.publish('recommandations', function(){
        return Recommandations.find({});
    });
}
