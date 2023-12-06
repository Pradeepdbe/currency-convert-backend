const fs = require('fs');
module.exports={   
     fetchData:function(callback){
      fs.readFile('../currency-convert-backend/src/constants/exchange-rates.json', 'utf8', (err, data) => {
          if (err) {
              return callback({err});
          }                
          try {
              const jsonData = JSON.parse(data);
              return callback(jsonData);
          } catch (parseError) {
               return callback({parseError});
          }
      });      
     },
}

