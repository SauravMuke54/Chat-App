import {io} from 'socket.io-client'
import { API } from '../variables'

export const initSocket= async()=>{
    const options={
        'force new connection':true,
        reconnectionAttempt:'Infinity',
        timeout:10000,
        transports:['websocket'],
    }
    console.log(API)
    return io(API,options)
}