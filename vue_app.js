(function () {
  var app = new Vue({
    el: '#app',
    data: {
      attendees: [{ name: '', email: '' }],
      cost: 9.99,
    },
    computed: {
      quantity: function () {
        return this.attendees.length;
      },
      checkoutTotal: function () {
        return this.cost * this.quantity;
      }
    },
    methods: {
      addAttendee: function (event) {
        this.attendees.push({
          name: '',
          email: '',
        });
      },
      removeAttendee: function (index) {
        this.attendees.splice(index, 1);
      }
    }
  });
})();
