const app = Vue.createApp({
    data() {
      return {
        AXS_currQuote: 0,
        AXS_price_change_perc_1h: 0,
        AXS_price_change_perc_24h: 0,
        AXS_price_change_perc_7d: 0,
        
        
        BTC_currQuote: 0,
        BTC_price_change_perc_1h: 0,
        BTC_price_change_perc_24h: 0,
        BTC_price_change_perc_7d: 0,
        
        
      };
    },

    mounted: function () {
      this.getQuotes()
    },

    methods: {
  
      getQuotes() {
        this.AXS_quote();
        setInterval(this.AXS_quote,60000);
        this.BTC_quote();
        setInterval(this.BTC_quote, 60000);
      },
  

      async AXS_quote() {
        try {
          let Aresponse = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=axie-infinity&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d");
          this.AXS_APIresponse = await Aresponse.json();
          this.AXS_currQuote = this.AXS_APIresponse[0].current_price.toFixed(2);
          this.AXS_price_change_perc_1h = this.AXS_APIresponse[0].price_change_percentage_1h_in_currency.toFixed(2);
          this.AXS_price_change_perc_24h = this.AXS_APIresponse[0].price_change_percentage_24h_in_currency.toFixed(2);
          this.AXS_price_change_perc_7d = this.AXS_APIresponse[0].price_change_percentage_7d_in_currency.toFixed(2);
          console.log(this.AXS_APIresponse);
        } catch (error) {
          console.log(error);
        }
      },
  
      async BTC_quote() {
        try {
          let Bresponse = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d");
          this.BTC_APIresponse = await Bresponse.json();
          this.BTC_currQuote = this.BTC_APIresponse[0].current_price.toFixed(2);
          this.BTC_price_change_perc_1h = this.BTC_APIresponse[0].price_change_percentage_1h_in_currency.toFixed(2);
          this.BTC_price_change_perc_24h = this.BTC_APIresponse[0].price_change_percentage_24h_in_currency.toFixed(2);
          this.BTC_price_change_perc_7d = this.BTC_APIresponse[0].price_change_percentage_7d_in_currency.toFixed(2);
          console.log(this.BTC_APIresponse);
        } catch (error) {
          console.log(error);
        }
      },
  
      reduce() {
        this.counter--;
      },
    }
  });
  
  app.mount('#events');
  