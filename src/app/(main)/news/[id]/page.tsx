import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getNewsDetailsById } from "@/lib/newsCategories";
import { format } from "date-fns/fp";
import { ArrowLeft, Bookmark, Share2 } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaRegStar, FaStar } from "react-icons/fa";

type NewsDetailsPageType = {
    
    params:  {
        id: string;
    }
}

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata ({params}:Props){

    const {id} = await params

    const data = await getNewsDetailsById(id)
    const news = data?.data[0]

    return {
    title: news?.title,
    description: news?.details,
  }
    
}


const NewsDetailsPage = async ({params}: NewsDetailsPageType) => {

    const {id} = await params

    const data = await getNewsDetailsById(id);

    const newsDetails = data?.data[0]
    
    const {author, details, image_url, total_view, title, rating, category_id} = newsDetails

    const formatedDate = format('yyyy-MM-dd', new Date(author.published_date))
    
    return (
        <Card className="mb-5 pt-0 max-w-4xl mx-auto my-10">
            <CardHeader className="bg-zinc-200 py-2 flex justify-between">
                <CardTitle className="flex items-center gap-2">
                    <Image
                        width={50}
                        height={50}
                        src={author.img}
                        alt={`Image of ${author.name}`}
                        className="rounded-full object-cover"
                    />

                    <div>
                        <h4>{author.name}</h4>
                        <p className="text-sm text-zinc-600">
                            {formatedDate}
                        </p>
                    </div>
                </CardTitle>
                <CardAction className="flex gap-3 items-center my-auto">
                    <Button className={`bg-transparent text-black hover:bg-primary/10 `}><Bookmark className="size-6" />  </Button>
                    <Button className={`bg-transparent text-black hover:bg-primary/10`}> <Share2 className="size-6" /> </Button>
                </CardAction>
            </CardHeader>

            <CardContent className="space-y-5 ">
                <CardTitle className="text-xl font-bold">{title}</CardTitle>
                <Image
                    src={image_url}
                    alt={title}
                    width={350}
                    height={350}
                    className="w-[95%] mx-auto max-h-135 object-fill" />
                <CardDescription className="">
                    {details}
                </CardDescription>


                <Button render={<Link href={`/category/${category_id}`} />}
                    variant={'destructive'} className={`group`}
                > <ArrowLeft className="group-hover:-translate-x-0.5 transition-all duration-150"/> All news in this category</Button>


            </CardContent>

            <CardFooter className="flex justify-between">
                {/* Stars */}
                <div className="flex gap-1 items-center">
                    {
                        Array.from(
                            { length: 5 },
                            (_, i) => Math.ceil(rating.number) >= i + 1 ? <FaStar key={i} size='17' className="text-orange-400 font-bold mr-1" /> : <FaRegStar key={i} size='17' className="text-orange-400 font-bold mr-1" />
                        )

                    }


                    <span className="">{rating.number}</span>
                </div>

                {/* Views */}
                <div className="flex gap-1 items-center">
                    <FaEye size='17' />
                    {total_view}
                </div>
            </CardFooter>
        </Card>
    );
};

export default NewsDetailsPage;