class Student {
  constructor(student) {
    this.student = student;
  }
  passingBlueBelt() {
    this.student.intermediateGrades = 0;
    this.student.jiujitsuBelt = jiujitsuFaixa.colors.blue;
    return console.log("HEY HO");
  }
  passingPurpleBelt() {
    this.student.intermediateGrades = 0;
    return this.student.jiujitsuBelt = jiujitsuFaixa.colors.purple;
  }
  passingCafeBelt() {
    this.student.intermediateGrades = 0;
    return this.student.jiujitsuBelt = jiujitsuFaixa.colors.cafe;
  }
  passingBlackBelt() {
    this.student.intermediateGrades = 0;
    return this.student.jiujitsuBelt = jiujitsuFaixa.colors.black;
  }
  passingIntermediateGrades() {
    if (this.student.intermediateGrades === 4) {
      switch(this.student.jiujitsuBelt){
        case (jiujitsuFaixa.colors.white): return this.passingBlueBelt();
        case (jiujitsuFaixa.colors.blue): return this.passingPurpleBelt();
        case (jiujitsuFaixa.colors.purple): return this.passingCafeBelt();
        case (jiujitsuFaixa.colors.cafe): return this.passingBlackBelt();
        default: return "you are a legend but wtf!?;";
      }
    }
    this.student.intermediateGrades += 1;
    return this;
  }
}

const etudiant = {
  first_name: "clement",
  last_name: "picard-zivy",
  age: 34,
  height: 170,
  weight: 60,
  kimonoSize: "A1",
  startingDate: "30/03/2019",
  jiujitsuBelt: "white",
  intermediateGrades: 0,
};

const jiujitsuFaixa = {
  colors: {
    white: "white",
    blue: "blue",
    purple: "purple",
    cafe: "cafe",
    black: "black"
  },
  grades: {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4
  }
};



const clement = new Student(etudiant);
// console.log(clement);
// clement.passingBlueBelt();
// console.log(clement);

clement.passingIntermediateGrades();
console.log(clement);
clement.passingIntermediateGrades();
console.log(clement);
clement.passingIntermediateGrades();
console.log(clement);
clement.passingIntermediateGrades();
console.log(clement);
clement.passingIntermediateGrades();
console.log(clement);













