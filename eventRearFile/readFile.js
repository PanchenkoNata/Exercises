// для работы с событиями надо подкл модуль events, 
// все объекты событий должны быть созданы классом EventEmitter или его наследниками
let event = require('events'); 

// ф-я конструктор к-я создает объект для подключения к файлу и считывания из него данных
function ReadFile() {
    this.file = "";
} 

// эту ф-ю необх унаследовать от EventEmitter    
ReadFile.prototype = new event.EventEmitter();

// эта ф-я будет считывать данные,а ф-я cb будет вызвана после прочтения данных
ReadFile.prototype.readDataFromFile = function(path, cb) {
    this.file = path;
    if (typeof cb == 'function') {
        this.on('readData', cb); // на событие 'readData' устанавливаем колбэк ф-ю (ф-я обработчик) cb
    }
    this._read(); // метод чтения файла
};
ReadFile.prototype._read = function() {
    console.log('Loading...');
    let someDataFromFile = "lorem ipsum"; // иммитируем данные из файла
    console.log('Data was read.');
    this.emit('readData', someDataFromFile); // эмитируем (выпускаем, генерируем) событие 'readData' и переаем в колбэк ф-ю данные из файла someDataFromFile
}

module.exports.Reader = ReadFile; //экспортируем конструктор ReadFile