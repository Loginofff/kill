// Создайте на основе страрого массива новый массив объектов по образу: 
// [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];
const newCars = cars.map((car) => {
    return { brand: car.brand, isDiesel: car.isDiesel }
  });
   console.log(newCars);

//    Создайте новый массив, где оставьте только машины с дизельным двигателем.

const carDiesel = cars.filter((car) => 
car.isDiesel)
console.log(carDiesel);

// Создайте новый массив, где оставьте только машины не с дизельным двигателем.

const carNoDiesel = cars.filter((car) => !car.isDiesel)
console.log(carNoDiesel);

// Посчитайте общую стоимость всех машин не с дизельным двигателем.

const allPrices = cars
  .filter((car) => !car.isDiesel)
  .map((car) => car.price)
  .reduce((acc, price) => acc + price, 0);
console.log(allPrices);


    // Повысьте; цену; всех; машин; в; массиве; на; 20 %.

const prieceAdd = cars
.map((car) => car.price *= 1.2 )
console.log(prieceAdd);

// Создайте новый массив, где все дизельные машины 
// заменены на { brand: "Tesla", price: 25000, isDiesel: false }
    
const newModel = cars.map((car) => {
    if (car.isDiesel) {
      return { brand: "Tesla", price: 25000, isDiesel: false };
    }
    return car;
  });
  console.log(newModel);

//   Управление списком задач

// У вас есть список задач, и вы хотите добавить, удалить и извлечь задачи из этого списк
// с использованием методов splice() и slice().

// Создайте начальный массив toDoList, который будет содержать несколько задач
// Используя метод splice(), добавьте новую задачу в 
//середину списка (воспользуйтесь третьим опциональным параметром) mdn

// С помощью метода slice(), создайте копию списка задач на 
// определенный период времени (например, "Сегодняшние задачи").

// Используя метод splice(), удалите одну из задач из списка.
// Выведите в консоль исходный список задач и результаты изменений.

const toDoList = ["Рыть презренный лут", "Собрать хворост", "Сжать рукаять"];

toDoList.splice(3, 0, "Убить дракона");

console.log("Исходный список задач:");
console.log(toDoList);


const todayTasks = toDoList.slice(0, 2);

console.log("Сегодняшние задачи:");
console.log(todayTasks);


toDoList.splice(0, 2);

console.log("Список задач после удаления:");
console.log(toDoList);

