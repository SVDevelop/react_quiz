import {NEXT} from './types'

export function toNext(payload) {
    return {
        type: NEXT,
        payload
    }
}