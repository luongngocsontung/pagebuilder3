import elementData from "./elementData";

const elementSideBarGroup = [
    {
        id: 1,
        name: 'Layout',
        childrenId: [11],
    }
]

const elementSideBar = [
    {
        id: 11,
        name: 'Layout1',
        data: [
            elementData.find(e => e.name === 'RowDnd'),
            elementData.find(e => e.name === 'ColDnd'),
        ]
    }
]

export {elementSideBar, elementSideBarGroup};