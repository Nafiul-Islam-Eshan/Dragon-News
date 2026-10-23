import { getNewsDetailsById } from "@/lib/newsCategories";

type NewsDetailsPageType = {
    
    params:  {
        id: string;
    }
}

const NewsDetailsPage = async ({params}: NewsDetailsPageType) => {

    const {id} = await params

    const data = await getNewsDetailsById(id);

    const newsDetails = data?.data[0]
    
    console.log(newsDetails);
    
    return (
        <div>
            News Details Page
        </div>
    );
};

export default NewsDetailsPage;