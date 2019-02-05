let fileReader = require('./readFile.js'); //объект к-й получили при загрузке модуля - его св-во Reader этосв юю ф-я конструктор ReadFile

let reader = new fileReader.Reader(); // создали объект ридера

reader.readDataFromFile('file.js', function(response) {
    console.log(response);
});  //из файла file.js считали данные - response, и передали их в сb ф-ю function(response)...
