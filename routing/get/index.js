const fs = require('fs');
const BaseRoute = require(appRoot + '/routing/BaseRoute');

class IndexRoute extends BaseRoute{
    constructor(core, req, res, params) {
        super(core, req, res, params);
    }

    handle() {
        const path = (this.req.url === '/')? 'index.html' : this.req.url;
        const html = fs.readFileSync(`./frontend/dist/${path}`, 'utf-8');

        this.res.writeHeader(200, {"Content-Type": "text/html"});
        this.res.write(html);
        this.res.end();
    }
}

module.exports = IndexRoute;