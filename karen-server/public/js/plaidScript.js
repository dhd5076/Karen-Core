(function($) {
    var handler = Plaid.create({
      clientName: 'Karen',
      countryCodes: ['US'],
      env: 'development',
      key: 'b7b198bd44563eed034cc18e19bb04',
      product: ['transactions'],
      language: 'en',
      userLegalName: 'Dylan Dunn',
      userEmailAddress: 'robodylan123@gmail.com',
      onLoad: function() {

      },
      onSuccess: function(public_token, metadata) {
        $.post('/api/banking/addBankAccount', {
          public_token: public_token,
        });
      },
      onExit: function(err, metadata) {
        if (err != null) {
            console.log(err);
        }
      },
      onEvent: function(eventName, metadata) {
      }
    });
  
    $('#link-button').on('click', function(e) {
      handler.open();
    });
  })(jQuery);