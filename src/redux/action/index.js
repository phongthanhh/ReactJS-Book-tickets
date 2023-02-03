import { SAVE_SEATS_SELECTED, SELECT_SEAT } from "redux/constants"

export const selectSeat = (payload) => {
    return {
        type: SELECT_SEAT,
        payload
    }
}


export const saveSeatsSelected = (payload) => {
    return {
        type: SAVE_SEATS_SELECTED,
        payload
    }
}