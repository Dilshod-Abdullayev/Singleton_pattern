class manageSchool {
    constructor(name) {
        if (manageSchool.instance) {
            return manageSchool.instance
        }
        this.name = name,
            this.students = [],
            this.classroom = [
                {
                    id: 1,
                    name: "class 1",
                    seats: 30,
                    class: 1,
                    classStudents: [],
                }
            ],
            this.teachers = [],
            this.subjects = [],
            manageSchool.instance = this
    }
    addTeacher(teacher) {
        teacher.id = this.teachers.length + 1.
        if (teacher.age > 24 && teacher.bachelor === true && teacher.experience === true && teacher.english === true) {
            console.log(`teacher added: ${teacher.name}`)
            this.teachers.push(teacher)
        } else {
            console.log("sorry you are not allowed");
        }
    }
    addStudent(student) {
        student.id = this.students.length + 1
        if (student.age < 22) {
            this.students.push(student)
            console.log(`student added: ${student.name}`);
        } else {
            console.log("sorry you are not allowed");
        }
    }
    addClass(classroom) {
        classroom.id = this.classroom.length + 1;
        if (classroom.name.length > 5 && classroom.seats < 30 && (classroom.class >= 1 && classroom.class <= 11)) {
            this.classroom.push(classroom);
        } else {
            console.log("Sorry, you are not allowed.");
        }
    }
    addSubject(subject) {
        subject.id = this.subjects.length + 1
        this.subjects.push(subject)
        if (subject.name.length > 5 && subject.lectures > 30 && (subject.class >= 1 && subject.class <= 11)) {
            console.log(`subject added: ${subject.name}`)
        } else {
            console.log("sorry you are not allowed");
        }
    }
    updateStudent(id, updateInfo) {
        const student = this.students.find(student => student.id === id)
        if (student) {
            Object.assign(student, updateInfo)
        } else {
            console.log(`student with id ${id} not found`)
        }
    }
    removeStudent(id) {
        const index = this.students.findIndex(student => student.id === id)
        if (index !== -1) {
            const removed = this.students.splice(index, 1)
            console.log(`student removed: ${removed[0].name}`)
        } else {
            console.log(`student with id ${id} not found`)
        }
    }
    findStudent(id) {
        return this.students.find(student => student.id === id)
    }
    updateTeacher(id, updateInfo) {
        const teacher = this.teachers.find(teacher => teacher.id === id)
        if (teacher) {
            Object.assign(teacher, updateInfo)
        } else {
            console.log(`teacher with id ${id} not found`)
        }
    }
    removeTeacher(id) {
        const index = this.teachers.findIndex(teacher => teacher.id === id)
        if (index !== -1) {
            const removed = this.teachers.splice(index, 1)
            console.log(`teacher removed: ${removed[0].name}`)
        } else {
            console.log(`teacher with id ${id} not found`)
        }
    }
    findTeacher(id) {
        return this.teachers.find(teacher => teacher.id === id)
    }
    getAllStudents() {
        return this.students
    }
    getAllTeachers() {
        return this.teachers
    }
    getAllClassRoom() {
        return this.classroom
    }
    getClassStudents(classNumber) {
        const classroom = this.classroom.find(room => room.class === classNumber);
        if (classroom) {
            return classroom.classStudents;
        } else {
            console.log(`Class ${classNumber} not found`);
            return null;
        }
    }
    addStudentClass(student) {
        const classroom = this.classroom.find(classroom => classroom.class === student.class);
        if (classroom) {
            if (!classroom.classStudents) {
                classroom.classStudents = [];
            }
            classroom.classStudents.push(student);
            console.log(`Student ${student.name} added to class ${classroom.name}`);
        } else {
            console.log(`Class not found for student ${student.name}`);
        }
    }
    static getInstance(name) {
        if (!manageSchool.instance) {
            manageSchool.instance = new manageSchool(name)
        }
        return manageSchool.instance
    }
}
const school1 = manageSchool.getInstance('Data School');
school1.addStudent({
    name: 'Ahmedbe',
    age: 8,
    class: 2
})
school1.addStudent({
    name: 'Ahmed',
    age: 16,
    class: 7
})
school1.addStudent({
    name: 'John',
    age: 12,
    class: 5
})
school1.addTeacher({
    name: 'Dilshod',
    age: 29,
    bachelor: true,
    experience: true,
    english: true
})
school1.addTeacher({
    name: 'Sardor',
    age: 39,
    bachelor: true,
    experience: true,
    english: true
})
school1.addClass({
    name: 'redRoom',
    seats: 20,
    class: 1,
})

school1.addClass({
    name: 'redRoom',
    seats: 20,
    class: 2,
})
school1.addClass({
    name: 'redRoom',
    seats: 20,
    class: 3,
})
school1.addClass({
    name: 'redRoom',
    seats: 20,
    class: 4,
})
school1.addClass({
    name: 'redRoom',
    seats: 20,
    class: 5,
})
school1.addClass({
    name: 'redRoom',
    seats: 20,
    class: 6,
})
school1.addClass({
    name: 'redRoom',
    seats: 20,
    class: 7,
})
school1.addClass({
    name: 'redRoom',
    seats: 20,
    class: 8,
})
school1.addClass({
    name: 'redRoom',
    seats: 20,
    class: 9,
})
school1.addClass({
    name: 'redRoom',
    seats: 20,
    class: 10,
})


console.log(school1.getAllStudents());
console.log(school1.getAllTeachers());
console.log(school1.getAllClassRoom());
console.log(school1.getClassStudents(1));
const newStudent = school1.findStudent(3);
school1.addStudentClass(newStudent)