define('my-stringifier', [], function() {
  Polymer({

    is: 'my-stringifier',

    properties: {
      label: String,
      item: {
        type: Object,
        value: ''
      },
      stringified: {
        type: String,
        computed: 'computeStringified(item)',
      },
    },

    computeStringified: function(item) {
      return JSON.stringify(item);
    }
  });
});
