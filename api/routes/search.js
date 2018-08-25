// https://stackoverflow.com/questions/40755849/difference-between-api-calls-from-frontend-and-api-calls-from-backend-to-any-ext

var express = require('express');
var router = express.Router();
let fetch = require('node-fetch');
/* GET ebay items. */
router.get('/ebay', function (req, res, next) {

    fetch('https://api.sandbox.ebay.com/buy/browse/v1/item_summary/search?q=phone', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer v^1.1#i^1#I^3#r^0#f^0#p^1#t^H4sIAAAAAAAAAOVXbWwURRjutddqQ4saFQhSvC6SiLh7+3kfm97hlQ850i+9UqEgOLc72y69273szLY9/1hLStTgDyIxJqg0oIQPNYagQfzAYET+mIgRMJgYNWqhgYAS5Q8RZ/eOcq0GjtJGEvfPZmbeeed9nnneeWfYvorKhzYs3XCx2nNb6WAf21fq8XBT2MqK8vlTy0pnlpewBQaewb4H+rz9ZafqEEinMvLjEGVMA0FfbzplINntjFC2ZcgmQDqSDZCGSMaKnIg1Nsg8w8oZy8SmYqYoX3xRhEpCSRPDQFGFMAwIPCS9xhWfrWaECkkQBiVWCgM1GFBYZxwhG8YNhIGBIxTPciGaDdG81MoJssDKksgEeLGd8rVBC+mmQUwYloq64cruXKsg1muHChCCFiZOqGg8tiTRHIsvWtzUWucv8BXN85DAANtodGuhqUJfG0jZ8NrLINdaTtiKAhGi/NHcCqOdyrErwYwjfJdqTgQSHwAap4WAEuaVCaFyiWmlAb52HE6PrtKaaypDA+s4ez1GCRvJdVDB+VYTcRFf5HN+j9kgpWs6tCLU4vrYylhLCxVt0pVOMwUQHbOVTgcxnahfQbMqC6WgpAi0KEpAFDWQXyjnLU/zmJUWmoaqOy6Qr8nE9ZBEDcdywxdwQ4yajWYrpmEnokI7Kc+hFBbanU3N7aKNOw1nX2GaEOFzm9ffgZHZGFt60sZwxMPYAZeiCAUyGV2lxg66WszLpxdFqE6MM7Lf39PTw/QIjGl1+HmW5fwrGhsSSidMA4rYOrmes9evP4HWXSgKSVNiL+NshsTSS7RKAjA6qCgfCPIil+d9dFjRsb3/6CjA7B+dEROVIYoo8KpIUoOFAgtUbSIyJJoXqd+JAyZBlk4DqwviTAookFaIzuw0tHRVFiSNF0IapNVAWKPFsKbRSUkN0JwGIQthMqmEQ/+nRClW6gnFzMAWM6Ur2QkR/ISJXbDUFmDhbL2dJe0ETKXIr1jt/ytU5ECdRJBOro8DqOMDEScgozOOwhnFTPtNQI42p2utG7WvGCN/0s4yHTZEmEShkupS9CSdSIQhiaIWPyWXhgRA8VPI1UW1FTyuhdx8ZwiTekcnRje0Zu84SEFEbkzK7NAR1hXEZGzVvCnp6eRicktlFwGdQ6+ruRsF41LAoG6FsSAybYtcpphmp8C2ml3QIMcVtsxUClptRRegSS6t/1FZzbW9/aU/j0GmpHRC5dpbDd0N1qxx6hvgWws1JwkSzwohSbwpXAvdPW3NTmrdGAe8pSbCUJ2Em6B/9Ls0WuJ+XL/nY7bf8wF52rJBlubms/MqypZ7y6ooREoHg4ChJs1eRgcaQw5ogzy7LMh0wWwG6FZphWfVfcMLLhW8iAefZGeMvIkry7gpBQ9kdtbVkXLujunVXIgN8RInCKwktrNzro56uWneexYvmD7UeG7P7pp33rw4cGz2VvplXzdbPWLk8ZSXePs9JY9UoJLas1WrOg40nBkY2Dd9z+pfN289vuW5V4fTv0Tt00OR+Amh9qv5FcP2ieqqSunwpaH9tdu2f/i+hz5YeWRfcP3cu1sF71+X18zeMvyFGPyk+fifSxN7Th4OP7pt8+65l49WNwyGnq8pjdXs3fHe/jq8sWvanZvm/rbsfBr8eP7MR3Pup5/+/cuf4ivfeiHzbdXQml1T9fb4+YM/PLHF/ub2nn3Ll11Ytf3QQKVZfdfQp2+cjU7ZsMJoqHml/bPVsY0P1r34hzKv7d71Ut2hi3Xrzpnyw18HXnrq3cq21zYd6O7+nNmhHVFP7j3rnzWj4rtTG2uzM3c98/azy043vn50sGNnw+ydvu+PnVh/Qclt499cG/e1qxAAAA==',
            'Content-Type': 'application/json',
            'X-EBAY-C-ENDUSERCTX': 'contextualLocation=country=<2_character_country_code>,zip=<zip_code>,affiliateCampaignId=<ePNCampaignId>,affiliateReferenceId=<referenceId>'
        }
    }).then(response => {
        console.log(response);
        res.send(response.json);
    }).catch(err => {
        console.log(err);
    });
    
});

module.exports = router;