class manageSchool {
    constructor(name) {
        if (manageSchool.instance) {
            return manageSchool.instance
        }
        this.name = name,
            this.students = [],
            this.classroom = [],
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
        if (student.age < 18) {
            console.log("sorry you are not allowed");
        } else {
            this.students.push(student)
        }
    }
    addClass(classroom) {
        classroom.id = this.classroom.length + 1
        if (classroom.name.length > 5 && classroom.seats > 30 && (classroom.class >= 1 && classroom.class <= 11)) {
            this.classroom.push(classs)
            console.log(`class added: ${classroom.name}`)
        } else {
            console.log("sorry you are not allowed");
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
    addStudentClass(student) {
        // student.class=this.classroom.
    }

    static getInstance(name) {
        if (!manageSchool.instance) {
            manageSchool.instance = new manageSchool(name)
        }
        return manageSchool.instance
    }
}
const school1 = manageSchool.getInstance('Data School');