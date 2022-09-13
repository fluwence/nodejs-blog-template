const fs = require('fs');
const _regEx = /(?:\.([^.]+))?$/;

const router = (app) => {
    fs.readdirSync(__dirname).forEach((file) => {
        const file_name = file.substring(0, file.lastIndexOf('.'));
        const file_extension = _regEx.exec(file);
        if(file_name == 'router' && file == 'router.js') return;
        const $data = require(`./${file_name}`);
        app.get(`${$data.route}`, (req, res) => {
            $data.exec(req, res);
        });
    });
}

module.exports = router;
