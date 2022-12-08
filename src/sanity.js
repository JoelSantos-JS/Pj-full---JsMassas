import { createClient } from "next-sanity";


const client = createClient({
    projectId: `${process.env.SANITY_PROJECT_ID}`,
    dataset: `${process.env.SANITY_DATASET}`,
    apiVersion: '2022-10-11',
    useCdn: false,
})

export default client