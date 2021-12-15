import elementState from "../data/elementState"

const getParentElement = (id) =>{
    const element = elementState.find(e => e.state.childrenId.includes(id));
    return element;
}

export default getParentElement;