class Person {
	var name: String
	var age: Int
    var location: String

	init(name: String, age: Int) {       
        self.name = name
        self.age = age
    }
}

let user = Person(name: "Ipsum", age: 26)

print(user.location)
//      ^?

