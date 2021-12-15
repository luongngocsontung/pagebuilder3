import elementState from "../data/elementState"

const getElement = (id) =>{
    const element = elementState.find((element) => element.state.id === id);
    return element;
}

export default getElement;