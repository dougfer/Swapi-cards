// Função genérica para fetch pois todos os endpoints são iguais

const fetchData = (param) => {
  return fetch(`https://swapi.dev/api/${param}`)
    .then((res) => res.json())
      .then((data) => data.results);
}

//Função genérica para a classificação por ordem crescente e decrescente das páginas

const orderAll = (value, array, callback1, callback2) => {
  callback1(value)
  if(value === 'A-Z') {
    const newPeople = array.sort((a,b) => {
      if (a.name > b.name || a.title > b.title) {
        return 1;
      }
      if (a.name < b.name || a.title < b.title) {
        return -1;
      }
      return 0;
    });

    callback2(newPeople);
  }
  if(value === 'Z-A') {
    const newPeople = array.sort((a,b) => {
      if (a.name < b.name || a.title < b.title) {
        return 1;
      }
      if (a.name > b.name || a.title > b.title) {
        return -1;
      }
      return 0;
    });
    callback2(newPeople);
  }
}

//Função genérica que renderiza a listagem ordenada;

const renderOrder = (array, callback1, callback2) => {
  return (
    <div>
      Classificar:
      <select style={{"marginLeft": "10px"}} onChange={(e) => orderAll(e.target.value, array, callback1, callback2)}>
        <option value=" " disabled hidden selected></option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
    </div>
  )
}

export {
  fetchData,
  renderOrder,
}
  
