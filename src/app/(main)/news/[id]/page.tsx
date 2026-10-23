
type NewsDetailsPageType = {
    
    params:  {
        id: string;
    }
}

const NewsDetailsPage = async ({params}: NewsDetailsPageType) => {

    const {id} = await params
    console.log(id);
    
    return (
        <div>
            News Details Page
        </div>
    );
};

export default NewsDetailsPage;