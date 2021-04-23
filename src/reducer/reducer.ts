export const initialNumber: { [index: string]: number } = {
    "0": 0,
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
}
export const numberSwitcher = (state: { [index: string]: number } = initialNumber, action: any) => {
    switch (action.type) {
        case "SELECT_NUMBER":
            return {
                ...state,
                [action.payload.number]:action.payload.section
            }
        case "REMOVE_SELECT":
            return{
                ...state,
                [action.payload]:0
            }
        default: return state
    }
}