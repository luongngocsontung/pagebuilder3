import { createSubscription } from "global-state-hook"

const element = [
    createSubscription({
        id: "0",
        type: 'Wrapper',
        name: 'Wrapper',
        style: {
            marginLeft: "120px",
            width: "100%",
            marginRight: "280px",
            minHeight: "100vh",
            backgroundColor: "#ffffff"
        },
        childrenType: ['rowdnd'],
        childrenId: [],
    }),
]

export default element