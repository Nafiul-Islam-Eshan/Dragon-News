import { newsCategories } from "@/lib/newsCategories";
import LeftSidebar from "../../components/Homepage/news/LeftSidebar";
import RightSidebar from "@/components/Homepage/news/RightSidebar";


export default async function Home() {

  const data = await newsCategories();

  const categories = data.data.news_category

  

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
}
