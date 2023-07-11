const { randomBytes } = await import('node:crypto')

// Type was inferred
export const serializeNonPOJOs = (/** @type {any} */ obj) => {
    return structuredClone(obj)
};


export const generateUsername = (/** @type {string | any[]} */ name) => {
    const id = randomBytes(2).toString('hex')
    return `${name.slice(0, 5)}${id}`
}

export const getImageURL = (/** @type {any} */ collectionId, /** @type {any} */ recordId, /** @type {any} */ fileName, size = '0x0') => {
    return `http://139.144.176.23:80/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};

