const http = require('http');
const port = 5000;
const homePage = require("./views/home");
const siteCss = require("./styles/site");
const addCat = require("./views/addCat");
const cats = require("./cats.json");


const catTemplate = (cat) => `
                <li>
                    <img src="${cat.imageUrl}" alt="Black Cat">
                    <h3>${cat.name}</h3>
                    <p><span>Breed: </span>${cat.breed}</p>
                    <p><span>Description: </span>${cat.description}</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="">Change Info</a></li>
                        <li class="btn delete"><a href="">New Home</a></li>
                    </ul>
                </li>
`;



const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    if (req.url == '/styles/site.css') {
        console.log('get css');
        res.writeHead(200, {
            'Content-Type': 'text/css'
        })
        res.write(siteCss);
    } else if (req.url == '/cats/add-cat') {
        res.write(addCat);
    } else {

        const homePageResult = homePage.replace('{{cats}}', cats.map(x => catTemplate(x)).join(''));
        res.write(homePageResult);
    }


    res.end();

});
server.listen(port, () => console.log(`Server is listening on port ${port}...`));