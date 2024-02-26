import { client } from "./client";

export async function getPortfolioItems() {
    const portfolioItems = await client.fetch(
        `*[_type == "portfolioItem"]{
            ...,
            categories[]->
        }`
    );
    return portfolioItems;
}
export async function getResume() {
    const resume = await client.fetch(
        `*[_type == "resume"][0]{
            ...,
            technicalSkills[]->,
            experience[]->,
            education[]->
        }`
    );
    return resume;
}
