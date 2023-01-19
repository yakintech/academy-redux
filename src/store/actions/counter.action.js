export const COUNTER_ACTION = {
    INCREASE: () => {
        return { type: 'INCREASE' }
    },
    DECREASE: () => {
        return { type: 'DECREASE' }
    },
    INCREASE_BY_VALUE: (payload) => {
        return { type: 'INCREASE_BY_VALUE', payload: payload}
    }
}