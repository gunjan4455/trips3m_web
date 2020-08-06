const { applyQuote, loanQuote, getCities} = require('./service');
export default (app) => {

    app.post('/exp/pb/getQuote', async (req, res, next) => {
        // console.log('req.body: ', req.body);
        const resp = await loanQuote(req.body)
        res.send(resp);
    });

    app.post('/exp/pb/submit', async (req, res, next) => {
        // console.log('req.body: ', req.body);
        const resp = await applyQuote(req.body);
        res.send(resp);
    });

    app.get('/exp/pb/getCities', async (req, res) => {
        const resp = await getCities();
        res.send(resp);
    })
}