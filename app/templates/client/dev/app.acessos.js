;(function(ng) {
    "use strict";
    
    ng.module('<%= appName %>')
      .provider('<%= appName %>Acessos', [function() {
          this.acessos = {
              FAZER_ALGO: "999999"
          };
          
          this.$get = [function() {
              return this.acessos;
          }];
      }])
}(window.angular));
