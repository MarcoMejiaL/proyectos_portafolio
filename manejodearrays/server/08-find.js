const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  /**
   * @name METODO find
   * 
   * @description TRAE EL ELEMENTO QUE SE ESTA BUSCANDO SIN GENERAR UN NUEVO ARRAY
   */
  const rta = products.find(item => item.name === "Burger" );
  console.log(rta);

  /**
   * @name METODO findIndex
   * 
   * @description TRAE LA POSICION DE UN ELEMENTO DENTRO DE UN ARRAY SIN GENERAR UNO NUEVO
   */
  const rta2 = products.findIndex(item => item.name === "Burger" );
  
  console.log(rta2);