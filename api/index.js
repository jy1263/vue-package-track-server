const app = require('express')();
const axios = require('axios');
module.exports = { path: '/api', handler: app }
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

app.get('/cainiao', (req, res) => {0
    const query = req.query;
    axios.get('https://global.cainiao.com/detail.htm?mailNoList='+query.search).then(e => {
        const dom = new JSDOM(e.data);
        const textArea = (JSON.parse(dom.window.document.querySelector("textarea").value).data)[0]
        res.send(textArea)
    })
})

app.get('/pog', (req, res) => {0
    const query = req.query;
    axios.get('https://global.cainiao.com/detail.htm?mailNoList='+query.search).then(e => {
        const dom = new JSDOM(e.data);
        const textArea = (JSON.parse(dom.window.document.querySelector("textarea").value).data)[0]
        res.send(textArea)
    })
})

app.get('/auspost', (req, res) => {
    const query = req.query;

    const instance = axios.create({
        baseURL: 'http://auspost.com.au/track/track.html?exp=b&id='+query.search,
        timeout: 5000,
        headers: {
            'Accept-Version': 1,
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json; charset=utf-8',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:83.0) Gecko/20100101 Firefox/83.0',
            'Connection': "keep-alive",
        },
    })
    instance.get().then(e => {
        const dom = new JSDOM(e.data);
        console.log(dom.window.document.body.innerHTML)
        res.send(dom.window.document.body)
    })

})


