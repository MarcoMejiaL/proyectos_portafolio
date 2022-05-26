const numbers = [1,2,3,4,5];


const rta = numbers.some(item => item%2 ===0)


console.log(rta)



const arreglo = [
    {
        name: 'marco',
        total: 120,
        delivered: false
     
    },
    {
        name: 'yadira',
        total: 140,
        delivered: true
     
    },
    {
        name: 'barbara',
        total: 200,
        delivered: false
     
    },
    {
        name: 'elizabeth',
        total: 80,
        delivered: true
     
    },
]
const rta2 = arreglo.some(item => item.delivered)


console.log(rta2)


const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  