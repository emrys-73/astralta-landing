/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import Pocketbase from 'pocketbase'
import { serializeNonPOJOs } from './lib/utils'

export const handle = async ({ event, resolve }) => {
    // Out-commented for localhost pocketbase setup
    // event.locals.pb = new Pocketbase('http://127.0.0.1:8090')
    event.locals.pb = new Pocketbase('https://base.astralta.com:443')
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')


    // The following try/catch block is a later addition because 
    // of a suggestion of one of the mantainers from pocketbase
    try {
        if (event.locals.pb.authStore.isValid) {
            await event.locals.pb.collection('users').authRefresh()
            event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model)
        }
        
    } catch (_) {
        event.locals.pb.authStpre.clear()
        event.locals.user = undefined
    }

    // We remove the following because of the same reasons
    // if (event.locals.pb.authStore.isValid) {
    //     event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model)
    // } else {
    //     event.locals.user = undefined
    // }


    const response = await resolve(event)

    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }))

    return response
}