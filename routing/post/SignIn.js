const fs = require('fs');
const BaseRoute = require(appRoot + '/routing/BaseRoute');

class AddWordRoute extends BaseRoute {
    constructor(core, req, res, params) {
        super(core, req, res, params);
    }

    get paramNames() {
        return ['login', 'password'];
    }

    async handle() {
        try {
            if (!(await this.core.db.users.getUser(this.params.login, this.params.password)))
                return this.complete('Error: incorrect login or password');

            let result = [];
            const files = fs.readdirSync(`./frontend/dist/assets/${this.params.login}`);

            for (let i = 0; i < files.length; i++) {
                const splitedFile = files[i].split('-');

                result.push({
                    path: `assets/${this.params.login}/` + files[i],
                    age: splitedFile[1],
                    gender: splitedFile[2]
                });
            }

            this.complete(result);
        } catch (err) {
            this.complete(null, err, 'SignIn error');
        }
    }
}

module.exports = AddWordRoute;