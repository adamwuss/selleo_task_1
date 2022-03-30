interface student {
  id: number
  firstName: string
  lastName: string
  marks: number[]
}

type students = student[]

const data: students = [
  {id:1, firstName:"Hobert", lastName:"Rarężlak", marks: [3,3.5,3,5]},
  {id:2, firstName:"Basia", lastName:"Kasińska", marks: [5,4.5,3,5]},
  {id:3, firstName:"Haciej", lastName:"Mubert", marks: [2,2.5,5,5]},
  {id:4, firstName:"Hawid", lastName:"Dolisz", marks: [5,4.5,5,5]},
  {id:5, firstName:"Dateusz", lastName:"Mobija", marks: [2,5,2,5]},
]

const average = (students: students): number => {
  const sum = students.reduce((acc, curr) => {
    let sumCurrMarks= 0
    for (const mark of curr.marks) {
      sumCurrMarks += mark
    }
    return acc + sumCurrMarks / curr.marks.length
  }, 0)
  return sum / students.length
}

console.log(average(data))