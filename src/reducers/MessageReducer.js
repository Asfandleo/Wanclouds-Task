export default function messageReducer(state=[], action) {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return[...state,
                Object.assign({}, action.message)

            ];
        default:
            return state;
    }
}