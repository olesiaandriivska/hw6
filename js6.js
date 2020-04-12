// - создать массив с 20 числами.
// -- при помощи метода sort отсортировать массив.
// let number = [3, 1, -80, 5, 23, -5, 87, 4, -645, 3, 6, 456, 80, 0, -3, 43, 5670, 2, 45, 12];
// console.log(number);
// let sort = number.sort((a, b) => {
//     return a - b;
// })
// console.log(sort);
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let sort1 = number.sort((a, b) => {
//     return b - a;
// })
// console.log(sort1)
// -- при помощи filter получить числа кратные 3
// let multipleNumber = number.filter((value) => {
//     return value % 3 === 0;
// })
// console.log(multipleNumber);
// -- при помощи filter получить числа кратные 10
// let filterNumber = number.filter((value) => {
//     return value % 10 === 0;
// })
// console.log(filterNumber);
// -- перебрать (проитерировать) массив при помощи foreach()
// number.forEach(value => {
//     console.log(value);
// })
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let mapNumber = number.map(value => {
//     return 3 * value;
// })
// console.log(mapNumber);
//
// - создать массив со словами на 15-20 элементов.

// const string = ['ivan', 'natalya', 'banana', 'pineapple', 'apple', 'ira', 'js', 'java', 'owu', 'lpnu', 'math', 'filip', 'katya', 'age', 'name', 'status'];
// console.log(string);
// -- отсортировать его по алфавиту в восходящем порядке.
// string.sort();
// console.log(string);
// -- отсортировать его по алфавиту  в нисходящем порядке.
// let sortString = string.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     } else {
//         return 1;
//     }
// })
// console.log(sortString);
// -- отфильтровать слова длиной менее 4х символов
// let filterString = string.filter(value => {
//     return value.length < 4;
// })
// console.log(filterString);
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
//
// let mapString = string.map(value => {
//     return value + '!';
// })
// console.log(mapString);
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
console.log(users);
// - відсортувати його за  віком (зростання , а потім окремо спадання)
//
// let sortUsers = users.sort((a, b) => {
//     return a.age - b.age;
// })
// console.log(sortUsers);
//
// let sortUsers1 = users.sort((a, b) => {
//     return b.age - a.age;
// })
// console.log(sortUsers1);
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//
// let sortName=users.sort((a, b) => {
//     return a.name.length-b.name.length;
// })
// console.log(sortName);
//
// let sortName=users.sort((a, b) => {
//     return b.name.length-a.name.length;
// })
// console.log(sortName);
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// for (let newUser of users) {
//     let result=[];
//     newUser.id = Math.floor(Math.random() * 10);
//     //console.log(newUser);
// }
// let result=[];
// result=JSON.parse(JSON.stringify(users));
// let newUser=result.forEach(value => {
//     value.id = Math.floor(Math.random() * 10);
// })
//
// let sortResult=result.sort((a, b) => {
//     return a.id-b.id;
// })
// console.log(sortResult);
//
// -- наисать функцию калькулятора с 2мя числами и колбеком
// function calculate(a, b, callback) {
//     console.log(callback(a, b));
//
// }
//
// calculate(2, 3, function (a, b) {
//     return Math.pow(a, a) + Math.pow(b, b);
//
// })

// -- наисать функцию калькулятора с 3мя числами и колбеком
// function calculate(a,b,c,callback) {
//     console.log(callback(a, b,c));
//
// }
// calculate(2,3,4, function (a,b,c) {
//     return 0.5*a*b*c;
//
// })
//
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
//  let cars = [
//      {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//      {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//      {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//      {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//      {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//      {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//      {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//      {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//      {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//      {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//      {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//      {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//      {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
//      ];
//
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
// let filterVolume = cars.filter(value => {
//     return value.volume > 3;
// })
// console.log(filterVolume);
//
// - двигун = 2л
// let filterVolume = cars.filter(value => {
//     return value.volume === 2;
// })
// console.log(filterVolume);
//
// - виробник мерс
// let filterProducer = cars.filter(value => {
//     return value.producer ==='mercedes';
// })
// console.log(filterProducer);
//
// - двигун більше 3х літрів + виробник мерседес
// let filterProducerAndVolume = cars.filter(value => {
//     return value.producer === 'mercedes' && value.volume > 3;
// })
// console.log(filterProducerAndVolume);
//
// - двигун більше 3х літрів + виробник субару
// let filterProducerAndVolume = cars.filter(value => {
//     return value.producer === 'subaru' && value.volume > 3;
// })
// console.log(filterProducerAndVolume);
//
// - сили більше ніж 300
// let filterPower = cars.filter(value => {
//     return value.power > 300;
// })
// console.log(filterPower);
//
// - сили більше ніж 300 + виробник субару
// let filterPowerAndProducer = cars.filter(value => {
//     return value.power > 300 && value.producer==='subaru';
// })
// console.log(filterPowerAndProducer);
//
// - мотор серіі ej
// let filterEngine = cars.filter(value => {
//     return value.engine.startsWith('ej');
// })
// console.log(filterEngine);
//
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let filterPowerAndProducerAndEngine = cars.filter(value => {
//     return value.power > 300 && value.producer==='subaru' && value.engine.startsWith('ej');
// })
// console.log(filterPowerAndProducerAndEngine);
//
// - двигун меньше 3х літрів + виробник мерседес
// let filterVolumeAndProducer = cars.filter(value => {
//     return value.volume < 3 && value.producer === 'mercedes';
// })
// console.log(filterVolumeAndProducer);
//
// - двигун більше 2л + сили більше 250
// let filterVolumeAndPower = cars.filter(value => {
//     return value.power > 250 && value.volume > 2;
// })
// console.log(filterVolumeAndPower);
//
// - сили більше 250  + виробник бмв
// let filterPowerAndProducer = cars.filter(value => {
//     return value.power > 250 && value.producer === 'bmw';
// })
// console.log(filterPowerAndProducer);
//
//
//
// - взять слдующий массив
// let usersWithAddress = [{
//     id: 1,
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', street: 'Shevchenko', number: 16}
// }, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {
//     id: 3,
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Lviv', street: 'Shevchenko', number: 121}
// }, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {
//     id: 5,
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Lviv', street: 'Shevchenko', number: 115}
// }, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {
//     id: 7,
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Lviv', street: 'Shevchenko', number: 22}
// }, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {
//     id: 9,
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Lviv', street: 'Shevchenko', number: 12}
// }, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {
//     id: 11,
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Lviv', street: 'Shevchenko', number: 121}
// }];
// console.log(usersWithAddress);
// -- отсортировать его по id пользователей
//
// let sortID=usersWithAddress.sort((a, b) => {
//     return a.id-b.id;
// })
// console.log(sortID);
// -- отсортировать его по id пользователей в обратном опрядке
// let sortID=usersWithAddress.sort((a, b) => {
//     return b.id-a.id;
// })
// console.log(sortID);
// -- отсортировать его по возрасту пользователей
// let sortAge=usersWithAddress.sort((a, b) => {
//     return a.age-b.age;
// })
// console.log(sortAge);
// -- отсортировать его по возрасту пользователей в обратном порядке
// let sortAge=usersWithAddress.sort((a, b) => {
//     return b.age-a.age;
// })
// console.log(sortAge);
// -- отсортировать его по имени пользователей
// let sortName=usersWithAddress.sort((a, b) => {     //якщо по довжині
//     return a.name.length-b.name.length;
// })
// console.log(sortName);
// let sortName = usersWithAddress.sort((a, b) => {    //якщо по алфавіту
//     if (a.name > b.name) {
//         return 1;
//     } else {
//         return -1;
//     }
// })
// console.log(sortName);
// -- отсортировать его по имени пользователей в обратном порядке
// let sortName=usersWithAddress.sort((a, b) => {     //якщо по довжині
//     return b.name.length-a.name.length;
// })
// console.log(sortName);
// let sortName = usersWithAddress.sort((a, b) => {    //якщо по алфавіту
//     if (b.name > a.name) {
//         return 1;
//     } else {
//         return -1;
//     }
// })
// console.log(sortName);
// -- отсортировать его по названию улицы  в алфавитном порядке
// let sortStreet = usersWithAddress.sort((a, b) => {
//     if (a.address.street > b.address.street) {
//         return 1;
//     } else {
//         return -1;
//     }
// })
// console.log(sortStreet);
// -- отсортировать его по номеру дома по возрастанию
// let sortNumber=usersWithAddress.sort((a, b) => {
//     return a.address.number-b.address.number;
// })
// console.log(sortNumber);
// -- отфильтровать (оставить) тех кто младше 30
// let filterAge = usersWithAddress.filter(value => {
//     return value.age < 30;
// })
// console.log(filterAge);
// -- отфильтровать (оставить) тех у кого отрицательный статус
// let filterStatus = usersWithAddress.filter(value => {
//     return value.status === false;
// })
// console.log(filterStatus);
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let filterAgeAndStatus = usersWithAddress.filter(value => {
//     return value.age < 30 && value.status === false;
// })
// console.log(filterAgeAndStatus);
// -- отфильтровать (оставить) тех у кого номер дома четный
// let filterNumber = usersWithAddress.filter(value => {
//     return value.address.number % 2 === 0;
// })
// console.log(filterNumber);
//
//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
let cars = [
    {producer:"volkswagen",power: 400,owner:{name:'Oleg',age:34,experience:10},price:8000,year: 2010,},
    {producer:"lanos",power: 250,owner:{name:'Igor',age:56,experience:30},price:5000,year: 2007,},
    {producer:"subaru",power: 300,owner:{name:'Victor',age:33,experience:13},price:6000,year: 2011,},
    {producer:"skoda",power: 140,owner:{name:'Ira',age:36,experience:8},price:4000,year: 1998,},
    {producer:"suzuki",power: 200,owner:{name:'Nazar',age:29,experience:5},price:9000,year: 2014,},
    {producer:"opel",power: 160,owner:{name:'Yura',age:28,experience:3},price:10000,year: 2015,},
    {producer:"bmw",power: 120,owner:{name:'Ruslan',age:41,experience:15},price:11000,year: 2013,},
    {producer:"mini",power: 350,owner:{name:'Olya',age:31,experience:2},price:20000,year: 2019,},
    {producer:"renault",power: 180,owner:{name:'Vlad',age:45,experience:21},price:9000,year: 2009,},
    {producer:"mercedes",power: 230,owner:{name:'Vitalii',age:30,experience:7},price:15000,year: 2012,},
];
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.

let newOwner=[
    {name:'Vadym',age:51 , experience:23},
    {name:'Kolya',age:24 , experience:1},
    {name:'Nastya',age:34 , experience:4},
    {name:'Valentin',age:48 , experience:15},
    {name:'Roman',age:27 , experience:7},
]
let repair = cars.map((value, index) => {
    while (index < cars.length / 2) {
        let repairCars = value.power + value.power / 10;
        value.power=repairCars;
        // console.log(repairCars);
        value.owner=newOwner[index];
        // console.log(value.owner);
        return repairCars;
        index++;
    }
})
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
let increment=cars.map((value, index) => {
    if (index%2===0){
        let incrementPower=value.power+value.power/10;
        value.power=incrementPower;
        let incrementPrice=value.price+value.price/20;
        value.price=incrementPrice;
        return incrementPower,incrementPrice;
    }
    else return value.power;
})
for (const car of cars) {
    if (car.owner.experience < 5 && car.owner.age > 25) {
        car.owner.experience++;
    }
}
let sum=0;
for (const car of cars) {
    sum+=car.price;
}
console.log(`Sum:${sum}`);
console.log(cars);
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9]
// // 1. Key = 1
// // Answer: MinIndex = 0, MaxIndex = 0.
// // 2. Key = 4
// // Answer: MinIndex = 3, MaxIndex = 6.
let search=(key)=>{
    let minIndex=arr.indexOf(key);
    let maxIndex=arr.lastIndexOf(key);
    console.log(`MinIndex: ${minIndex}`);
    console.log(`MaxIndex: ${maxIndex}`);

}
search(4)


