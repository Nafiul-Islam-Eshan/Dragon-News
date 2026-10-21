export const newsCategories = async () => {
    const categories = process.env.CATEGORIES as string;
    const res = await fetch(categories);
    const data = await res.json()
    return data;
}