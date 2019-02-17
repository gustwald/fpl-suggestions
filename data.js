const fetch = require('node-fetch');
const fs = require('fs');

const url = 'https://fantasy.premierleague.com/drf/bootstrap-static';

fetch(url)
.then(res => res.json())
.then(json => {
    fs.writeFileSync('src/fplData.json', JSON.stringify(json.elements));
    console.log(JSON.stringify(json));
});