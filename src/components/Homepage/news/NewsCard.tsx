import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { News } from "@/lib/newsCategories";
import { format } from "date-fns/fp";
import { Bookmark, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const NewsCard = ({ news }: { news: News }) => {

    const { author, title, details, image_url, _id } = news

    const formatedDate = format('yyyy-MM-dd', new Date(author.published_date))

    return (
        <Card className="mb-5 pt-0">
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
                <CardDescription className="line-clamp-3">
                    {details}
                </CardDescription>

                
                <Link href={`/news/${_id}`}  
                 className='relative bg-linear-to-r from-[#FF8C47] to-[#F75B5F] font-bold bg-clip-text text-transparent after:absolute after:bottom-0 after:left-0 after:origin-center after:h-0.5 after:w-full after:bg-linear-to-r after:from-[#FF8C47] after:to-[#F75B5F] after:scale-0 hover:after:scale-100 after:transition-all duration-250 ease-in'>Read More</Link>


            </CardContent>
        </Card>
    );
};

export default NewsCard;