var Helper = {
  clear: function(id) {
    $('.painel').remove();
  },

  create: function(id) {
    return $(
      '<div class="painel">' +
        '<div>' +
          '<input type="checkbox" name="checkbox-all" class="checky-all">' +
        '</div>' +

        '<div>' +
          '<input type="checkbox" name="checkbox-1" class="checky">' +
        '</div>' +

        '<div>' +
          '<input type="checkbox" name="checkbox-2" class="checky">' +
        '</div>' +
      '</div>'
    ).appendTo('body');
  }
};

function context(description, spec) {
  describe(description, spec);
}
