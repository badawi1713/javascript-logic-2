// No 1. Update object property's value with ... (Spread Operators)

const Person = [
  {
    name: "Tatas",
    company: "Arkademy",
    job: "Trainer",
    status: "single",
    city: "Jogja"
  },
  {
    name: "Pratama",
    company: "Emago",
    job: "Trainer",
    status: "single",
    city: "Jakarta"
  }
];

const updatePerson = Person.map(i => {
  return { ...i };
});

const updateTatas = updatePerson.find(i => i.name == "Tatas");
updateTatas.city = "Jakarta";
updateTatas.status = "Marriage";

const updatePratama = updatePerson.find(i => i.name == "Pratama");
updatePratama.city = "Jogja";
updatePratama.company = "Arkademy";

console.log(updatePerson);
