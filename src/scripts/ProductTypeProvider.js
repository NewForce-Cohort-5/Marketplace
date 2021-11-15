let types = []

export const useProductTypes = () => types.slice()

export const getProductTypes = () => fetch("http://localhost:8080/producttypes")
    .then(res => res.json())
    .then(parsedTypes => types = parsedTypes)

