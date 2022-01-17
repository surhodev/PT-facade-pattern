/** Create a first class that do "mess" */
class Mess1 {
  doOneThing() {
    console.log("I am Mess1")
  }
}

/** Create a second class that do other "mess" using the "mess" of the first class */
class Mess2 {
  mess1 = null

  constructor(mess1) {
    this.mess1 = mess1
  }

  doTwoThings() {
    this.mess1.doOneThing()
    console.log("I am Mess2")
  }
}

/** We can create a lot of "mess" with other classes */
// ...

/** The Facade gathered all the "mess" in one point that clients can use easily */
class Facade {
  doALotOfThings() {
    const mess2 = new Mess2(new Mess1())
    mess2.doTwoThings()
  }
}

// Client use
const facade = new Facade()
facade.doALotOfThings()