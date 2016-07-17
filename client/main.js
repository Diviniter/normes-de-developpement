openForm = function (id){
  $('#'+id).removeClass('hidden');
  $(document.body).addClass('greyBackground');
}

closeForm = function () {
  $('.form').addClass('hidden');
  $(document.body).removeClass('greyBackground');
}

Template.body.events({
  'mousedown .closeForm' : function(event) {
    event.stopImmediatePropagation();
    closeForm();
  }
});
