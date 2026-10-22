import { getNewsByCategoryId } from "@/lib/newsCategories";

type CategorizedNewsPageProps = {
    params: Promise<{ id: string }>
}

const CategorizedNewsPage = async ({ params }: CategorizedNewsPageProps) => {

    const { id } = await params;

    const news = await getNewsByCategoryId(id)

    console.log(news);

    return (
        <div>
            <h1>News in Category {id}</h1>
            <p>{news.length} articles found.</p>
            {/* {news.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            ))} */}
        </div>
    );
};

export default CategorizedNewsPage;