const fs = require('fs');
const BaseRoute = require(appRoot + '/routing/BaseRoute');

class SearchRoute extends BaseRoute {
    constructor(core, req, res, params) {
        super(core, req, res, params);
    }

    get paramNames() {
        return ['oldPath', 'login', 'password', 'age', 'gender'];
    }

    async handle() {
        try {
            console.log(this.params.login, this.params.password)
            if (!(await this.core.db.users.getUser(this.params.login, this.params.password)))
                return this.complete('Error: incorrect login or password');

            const extension = this.params.oldPath.slice(this.params.oldPath.indexOf('.'), this.params.oldPath.length);
            const filePath = `${this.params.login}/${+(new Date())}-${this.params.age}-${this.params.gender}${extension}`;
            fs.createReadStream('./frontend/dist/' + this.params.oldPath).pipe(fs.createWriteStream('./frontend/dist/assets/' + filePath));
            this.complete('1');
        } catch (err) {
            this.complete(null, err, 'SavePhoto error!');
        }
    }
}

module.exports = SearchRoute;