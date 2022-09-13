const fs = require('fs');
const _regEx = /(?:\.([^.]+))?$/;

module.exports = {
  route: '/',
  exec: async(req, res) => {
    const blogs = [];
    fs.readdirSync("./public/blog/").forEach((file) => {
        const file_name = file.substring(0, file.lastIndexOf('.'));
        const file_extension = _regEx.exec(file);
        blogs.push(file_name);
    });
    res.status(200).render('blogs.ejs', { blogs: blogs });
  },
}
