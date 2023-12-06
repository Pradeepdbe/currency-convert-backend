var userModel= require('../models/userModel');
module.exports={ 
    fetchData:function(req, res){    
      
        const sourceCurrency= req.query.sourceCurrency;
        const targetCurrency= req.query.targetCurrency;
        const amount= req.query.amount;

        if (!sourceCurrency || !targetCurrency || !amount) {
          return res.status(400).json({ error: 'Missing required parameters' });
        }
        try{
          userModel.fetchData(function(exchangeRates){ 
            const exchangeRate = exchangeRates[`${sourceCurrency}_to_${targetCurrency}`];             
            if (!exchangeRate) {
              return res.status(400).json({ error: 'Invalid currency codes' });
            }
            let convertedAmount = amount * exchangeRate;
            res.send({convertedAmount : convertedAmount,
              exchangeRate: exchangeRate});            
          })
        } catch (error) {
          res.status(500).json({ error: 'Internal server error' });
        }
    }
}