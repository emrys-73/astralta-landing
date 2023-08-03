/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { redirect } from '@sveltejs/kit'
import { generateUsername } from '$lib/utils.js'

export const load = async ({ locals }) => {
    // if (!locals.pb.authStore.isValid) {
    //     throw redirect(303, '/my/ai')
    // }

    // try {
    //     const bgs = await locals.pb.collection('backgrounds').getFullList({
    //         sort: '-created',
    //     });
    //     backgrounds = await bgs.json();
        
    // } catch (err) {
    //     throw error(err.status, err.message)
    // }


    
}

export const actions = {
    join: async ({ locals, request }) => {
        
        // This gives us an object with all of the fields mapped
        const body = Object.fromEntries(await request.formData())

        let username = generateUsername(body.name.split(' ').join('')).toLowerCase()
        body.password = `${username}astralta`;
        body.passwordConfirm = `${username}astralta`;
        body.role = 'waitlist'
        body.access = false;

        try {
            await locals.pb.collection('users').create({ username, ...body})

            // No need to send a verification Email just yet
            // await locals.pb.collection('users').requestVerification(body.email)
            
        } catch (err) {
            console.log('Error: ', err)
            throw redirect(303, '/whoops')    
            // throw error(err.status, err.message) 
        }
        throw redirect(303, '/thanks-bro')
    }
}