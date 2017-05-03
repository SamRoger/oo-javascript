


 // Exercise 1
 var multiplier = {
 	multiply: function(num) {
 		this.currentValue = num * this.currentValue
 	},

 getCurrentValue: function() {
 	return this.currentValue
 },

 currentValue: 1

 }

 console.log(multiplier.multiply(4))
 console.log(multiplier.getCurrentValue())
 console.log(multiplier.multiply(7))
 console.log(multiplier.getCurrentValue())


// Exercise 2
function Photo(fileName, location) {
 	this.fileName = fileName
 	this.location = location
 };

 function Album() {
 	this.photos = []

 	this.addPhoto = function(photo) {
 		this.photos.push(photo)
 	};

 this.litAllPhotos = function() {
 		for(i=0; i < this.photos.length; i++) {
 			console.log(this.photos[i].fileName)
 		};
 	};

 	this.getPhoto = function(position) {
 			return this.photos[position - 1]
 	};
 };

 var photo = new Photo ("example.jpg", "../images/exampler.jpg");
 var photo2 = new Photo ("example2.jpg", "../images/example2.jpg");
 var photo3 = new Photo ("example3.jpg", "../images/example3.jpg");
 var album = new Album();

 album.addPhoto(photo);
 album.addPhoto(photo2);
 album.addPhoto(photo3);

 console.log(album.getPhoto(3));

// Exercise 3
function Person(name, age) {
 	this.name = name
 	this.age = age
 }

 function Student(name, age, debt) {
 	Person.apply(this, arguments)
 	this.debt = debt
 }

 function Teacher(name, age, roomNumber) {
 	Person.apply(this, arguments)
 	this.roomNumber = roomNumber
 }

 function School() {
 	this.teachers = []
 	this.students = []
 }

 Student.prototype = new Person()
 Teacher.prototype = new Person()

 var student = new Student("Sam", "32", "20000")
 var teacher = new Teacher ("Mrs. Wiss", "65", "16B")
 var school = new School()

 console.log(school.teachers)
 school.teachers.push(teacher)
 console.log(school.teachers)


















