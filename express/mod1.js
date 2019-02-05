let express = require('express');
let app = express(); // создали приложение

//создаем маршруты - обработчики GET запросов
//для localhost:8080/ 
app.get('/', function(request, response) {
    console.log(request.url);
    response.send('<h1>Hello World!</h1>');
});
//для localhost:8080/about,
app.get('/about', (request, response) => {
    console.log(request.url);
    response.send('<h2>About page</h2>');
});
//для localhost:8080/products
app.get('/products', (request, response) => {
    console.log(request.url);
    response.send('<h2>Products page</h2>');
});

//чтоб приложение слушало порт 8080, запустим его с параметром 8080, и можем добавить колбєк ф-ю
app.listen(8080, function(){
    console.log('server start on port 8080');
});

//запускаем модуль в терминале, а в браузере приложение localhost:8080, 
//и при разных запросах localhost:8080/, localhost:8080/about, localhost:8080/products будем видеть разную его рекцию
