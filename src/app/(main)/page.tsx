import { newsCategories } from "@/lib/newsCategories";
import LeftSidebar from "../../components/Homepage/news/LeftSidebar";

type categoriesType = {
  category_id: number
  category_name: string
}

export default async function Home() {

  const data = await newsCategories();

  const categories: categoriesType[] = data.data.news_category

  // console.log(categories);

  return (
    <div className="grid grid-cols-16 gap-5 my-10">

      {/* All categories */}
      <div className="col-span-3">
       <LeftSidebar categories={categories} activeId="4" />
      </div>

      <div className="bg-lime-100 col-span-8">News</div>
      <div className="bg-green-100 col-span-4">Social</div>
    </div>
  );
}
