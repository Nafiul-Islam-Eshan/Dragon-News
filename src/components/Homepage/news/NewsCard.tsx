import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { News } from "@/lib/newsCategories";
import { format } from "date-fns/fp";
import { Bookmark, Share2 } from "lucide-react";
import Image from "next/image";


const NewsCard = ({ news }: { news: News }) => {

    const { author } = news

    const formatedDate = format('yyyy-MM-dd', new Date(author.published_date))

    return (
        <Card className=" overflow-hidden py-0">
            <CardHeader className="bg-zinc-200 py-2 flex justify-between">
                <CardTitle className="flex items-center gap-2">
                    <Image
                        width={50}
                        height={50}
                        src={author.img}
                        alt={`Image of ${author.name}`}
                        className="rounded-md object-cover"
                    />

                    <div>
                        <h4>{author.name}</h4>
                        <p className="text-sm text-zinc-600">
                            {formatedDate}
                        </p>
                    </div>
                </CardTitle>
                <CardAction className="flex gap-3 items-center my-auto">
                    <Button className={`bg-transparent text-black hover:bg-primary/10 `}><Bookmark className="size-6"  />  </Button>
                    <Button className={`bg-transparent text-black hover:bg-primary/10`}> <Share2  className="size-6" /> </Button>
                </CardAction>
            </CardHeader>

            <CardContent>

            </CardContent>
        </Card> 
    );
};

export default NewsCard;