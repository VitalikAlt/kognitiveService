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
            const exist = await this.core.db.users.getUserLoginExist(this.params.login);

            if (exist)
                return this.complete('Error: user already exist!');

            await this.core.db.users.addUser({login: this.params.login, password: this.params.password});
            this.createDirectoryIfNotExist(`./frontend/dist/assets/${this.params.login}`);
            this.complete('1');
        } catch (err) {
            this.complete(null, err, 'SignIn error');
        }
    }

    createDirectoryIfNotExist(path) {
        try {
            fs.mkdirSync(path, (err) => {});
        } catch (err) {}
    }
}

module.exports = AddWordRoute;