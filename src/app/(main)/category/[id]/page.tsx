import LeftSidebar from "@/components/Homepage/news/LeftSidebar";
import NewsCard from "@/components/Homepage/news/NewsCard";
import RightSidebar from "@/components/Homepage/news/RightSidebar";
import { getNewsByCategoryId, newsCategories } from "@/lib/newsCategories";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Daily News ',
  description: 'Explore what is happening over the world with Dragon News. Get the latest news, updates, and insights on various topics from around the globe.',
}

type CategorizedNewsPageProps = {
    params: Promise<{ id: string }>
}

const CategorizedNewsPage = async ({ params }: CategorizedNewsPageProps) => {

    const data = await newsCategories();

    const categories = data.data.news_category

    const { id } = await params;

    const news = await getNewsByCategoryId(id)


    return (
        <div className="grid grid-cols-16 gap-5 my-10">

            {/* All categories */}
            <div className="col-span-3">
                <LeftSidebar categories={categories} activeId={id} />
            </div>

            {/* News */}
            <div className="col-span-10">

                <h2 className="text-xl mb-4 font-semibold">Dragon News Home</h2>

                <ul className="flex flex-col gap-3">

                    {
                        news?.news?.length > 0 ? (
                            news.news.map((n, i) => <NewsCard key={i} news={n} />)
                        ):(
                            <p className="font-semibold text-2xl text-rose-600">No news found 🥲 </p>
                        )       
                    }

                </ul>

            </div>


            <div className=" col-span-3">
                <RightSidebar />
            </div>
        </div>
    );
};

export default CategorizedNewsPage;