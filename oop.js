// class Logger {
//     constructor() {
//         if (Logger.instance) {
//             return Logger.instance;
//         }
//         this.logs = [];

//         Logger.instance = this;
//     }
//     log(message) {
//         const timestamp = new Date().toISOString();
//         this.logs.push({ message, timestamp });
//         console.log(${timestamp} ${message});
//     }
//     getLogs() {
//         return this.logs;
//     }
//     static getInstance() {
//         if (!Logger.instance) {
//             Logger.instance = new Logger();
//         }
//         return Logger.instance;
//     }
// }

// const logger1 = Logger.getInstance();
// const logger2 = Logger.getInstance();

// console.log(logger1 === logger2); // true
// logger1.log('This is the first log message.');
// logger2.log('This is the second log message.');

// console.log(logger1.getLogs());
// console.log(logger2.getLogs());


// class UserSettings {
//     constructor(name) {
//         if (UserSettings.instance) {
//             return UserSettings.instance;
//         }
//         this.name = name;
//         this.settings = {};
//         UserSettings.instance = this;
//     }

//     updateSettings(key, value) {
//         this.settings[key] = value;
//     }
//     getSettings() {
//         return {
//             name: this.name,
//             settings: this.settings
//         };
//     }
//     static getInstance(name) {
//         if (!UserSettings.instance) {
//             UserSettings.instance = new UserSettings(name);
//         }
//         return UserSettings.instance;
//     }
// }

// const user1Settings = UserSettings.getInstance('John');
// const user2Settings = UserSettings.getInstance('Jane');
// console.log(user1Settings === user2Settings); // true
// user1Settings.updateSettings('language', 'English');
// user2Settings.updateSettings('theme', 'Dark');
// console.log(user1Settings.getSettings()); 
// console.log(user2Settings.getInsta)

// class UsersData {
//     constructor(name,year,gender) {
//         if (UsersData.instance) {
//             return UsersData.instance;
//         }
//         this.name = name;
//         this.year = year;
//         this.gender = gender;
//         UsersData.instance = this;
//     }
//     static getInstance(name,year,gender) {
//         if (!UsersData.instance) {
//             UsersData.instance = new UsersData(name,year,gender);
//         }
//         return UsersData.instance;
//     }

// }
// const user1 = UsersData.getInstance('John', 1990, 'male');
// const user2 = UsersData.getInstance('Jane', 1995, 'female');
// console.log(user1 === user2);
// console.log(user2);



//!Prototype Pattern -
// const myCar={
//     name:'BMW',
//     model:'X5',
//     year:2020,
//     drive(){
//         console.log('drive');
//     },
//     panic(){
//         console.log('panic');
//     }
// }

// const yourCar=Object.create(myCar);
// console.log(yourCar);


// class Vehicle {
//     constructor(name, model, year) {
//         this.name = name;
//         this.model = model;
//         this.year = year;
//     }
//     getModel() {
//         console.log(Model: ${this.model});
//     }
//     clone() { }
// }
// class Car extends Vehicle {
//     constructor(name, model) {
//         super(name, model);
//     }
//     clone() {
//         return new Car(this.name, this.model);
//     }
//     getModel() {
//         return Model: ${this.model}
//     }
// }


// const car = new Car('BMW', 'X5');
// const clone = car.clone();
// console.log(clone.getModel());


// class Singleton {
//     constructor() {
//         if (Singleton.instance) {
//             return Singleton.instance
//         }
//         this.data = "inital data"
//         Singleton.instance = this
//     }
//     getData() {
//         return this.data
//     }
//     setData(data) {
//         this.data = data
//     }
//     static getInstance() {
//         if (!Singleton.instance) {
//             Singleton.instance = new Singleton()
//         }
//         return Singleton.instance
//     }
// }

// const instance1 = Singleton.getInstance()
// instance1.setData('world')
// console.log(instance1.getData());
//!Notifaction 
// class NotificationManager {
//     constructor() {
//         if (NotificationManager.instance) {
//             return NotificationManager.instance;
//         }
//         this.notifications = [];
//         NotificationManager.instance = this;
//         console.log(this.notifications);
//     }

//     addNotification(message) {
//         const id = Date.now();
//         this.notifications.push({ id, message });
//         console.log(Notification added: ${message});
//         this.displayNotifications();
//     }

//     removeNotification(id) {
//         this.notifications = this.notifications.filter(notification => notification.id !== id);
//         console.log(Notification removed: ${id});
//         this.displayNotifications();
//     }
//     displayNotifications() {
//         this.notifications.forEach(notification => {
//             console.log(ID: ${notification.id}, Message: ${notification.message});
//         });
//     }

//     static getInstance() {
//         if (!NotificationManager.instance) {
//             NotificationManager.instance = new NotificationManager();
//         }
//         return NotificationManager.instance;
//     }
// }
// const notificationManager1 = NotificationManager.getInstance();
// console.log(notificationManager1);
// notificationManager1.addNotification('You have a new message!');
// const firstNotificationId = notificationManager1.notifications[0].id;
// notificationManager1.removeNotification(firstNotificationId);
// notificationManager1.displayNotifications();

// Assuming manageSchool class definition and export is correctly set up

// Ensure manageSchool class is correctly defined and exported