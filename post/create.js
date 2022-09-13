const fs = require('fs');
const frixys = require('frixys');

module.exports = {
  route: '/blog/new',
  exec: async(req, res) => {
    const {title, body, tags, password} = req.body;
    if(!title||!body||!password) return;
    if(password !== process.env.PASS) return;
    const ttl = title.split(" ").join("-");
    const html = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <meta name="keywords" content="${tags}">
        <meta name="description" content="">
        <meta name="og:title" content="${title} - Blog">
        <meta name="og:description" content="">
        <meta name="og:site_name" content="">
        <meta name="og:image" content="">
        <meta name="image" content="">
        <meta name="og:theme-color" content="#7289da">
        <meta name="theme-color" content="#7289da">
        <meta name="main-color" content="#7289da">
        <link rel="shortcut icon" href="" type="image/x-icon">
        <link rel="stylesheet" href="/styles/blog.css">
    </head>
    <body>
        <main>
           <div class="center">
              <h1>${title}</h1>
              <section>
                 <hr>
                 ${body}
                 <br>
                 Published: ${new Date().toUTCString()}
                 <hr>
              </section>
           </div>
        </main>
    </body>
    </html>`
    fs.appendFile(`./public/blog/${ttl.toLowerCase()}.html`, html, err => {
      if (err) {
        console.error(err);
      }
      return res.redirect(`/blog/${ttl.toLowerCase()}.html`);
    });
  },
}
