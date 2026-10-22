import Link from "next/link";

interface categoriesType {
  category_id: string,
  category_name: string
}

type LeftSidebarProps = { categories: categoriesType[], activeId: string }


const LeftSidebar = ({ categories, activeId }: LeftSidebarProps) => {
  // console.log(categories);
  return (
    <div>
      <h2 className="text-xl mb-5 font-bold">All Categories</h2>
      <ul className="flex flex-col gap-4">
        {
          categories.map(category =>
            <li
              key={category.category_id}
              className={`${activeId === category.category_id.toString()
                  ? "bg-slate-200 text-blue-500"
                  : ""
                } font-semibold hover:bg-slate-300 duration-200 px-3 py-1.5 text-center rounded-2xl`}
            >
              <Link className="block" href={`category/${category.category_id}`}> {category.category_name} </Link>
            </li>)
        }
      </ul>
    </div>
  );
};

export default LeftSidebar;