/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import OpenAI from "openai";
import Configuration from "openai"

// const configuration = new Configuration({
//     organization: "org-t45fDMAKPpFTBSRIwllfgAHt",
//     apiKey: process.env.OPENAI_KEY,
// });

// const openai = new OpenAI(configuration);


const serializeNonPOJOs = (/** @type {any} */ obj) => {
    return structuredClone(obj)
};

export const load = async ({ locals }) => {

    const getGpts = async () => {
        try {
            const gpts = serializeNonPOJOs(await locals.pb.collection('gpts').getFullList());

            // console.log(gpts)

            locals.gpts = gpts;

            return gpts;
        } catch (err) {
            console.log("Error retrieving GPTs")
        }
    }

    return {
        gpts: getGpts()
    }
    
}

export const actions = {
    searchGpts: async ({ request, locals }) => {

        // console.log(locals.gpts)

        // const completion = await openai.chat.completions.create({
        //     messages: [{ role: "system", content: "You are a helpful assistant." }],
        //     model: "gpt-3.5-turbo",
        //   });
        
        //   console.log(completion.choices[0]);
    }
}