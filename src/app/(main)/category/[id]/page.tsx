import LeftSidebar from "@/components/Homepage/news/LeftSidebar";
import RightSidebar from "@/components/Homepage/news/RightSidebar";
import { getNewsByCategoryId, newsCategories } from "@/lib/newsCategories";

type CategorizedNewsPageProps = {
    params: Promise<{ id: string }>
}

const CategorizedNewsPage = async ({ params }: CategorizedNewsPageProps) => {

     const data = await newsCategories();

  const categories = data.data.news_category

    const { id } = await params;

    const news = await getNewsByCategoryId(id)

    console.log(news);

    return (
        <div className="grid grid-cols-16 gap-5 my-10">

      {/* All categories */}
      <div className="col-span-3">
       <LeftSidebar categories={categories} activeId="4" />
      </div>

      <div className="bg-lime-100 col-span-10">News</div>


      <div className=" col-span-3">
        <RightSidebar/>
      </div>
    </div>
    );
};

export default CategorizedNewsPage;