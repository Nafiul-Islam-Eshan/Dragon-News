
type NewsCategory = {
    category_id: string;
    category_name: string;
};


type newsCategoriesType = {
    status: boolean
    data: {
        news_category: NewsCategory[]
    }
}


export const newsCategories = async (): Promise<newsCategoriesType> => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories ');
    const data = await res.json()
    return data;
}

type News = {
    _id: string
    category_id: string
    total_view: number
    title: string
    thumbnail_url: string
    image_url: string
    details: string
    others_info: {
        is_todays_pick: boolean
        is_trending: boolean
    }
    rating: {
        number: number,
        badge: string
    }
    author: {
        name: string
        published_date: string
        img: string
    },
}

type getNewsByCategoryIdType = {
    id: string
    name: string
    news: News[]
}


export async function getNewsByCategoryId(category_id: string): Promise<getNewsByCategoryIdType> {
    const url = `https://openapi.programming-hero.com/api/news/categories/${category_id}`
    const res = await fetch(url)
    const data = await res.json();
    return data;
}