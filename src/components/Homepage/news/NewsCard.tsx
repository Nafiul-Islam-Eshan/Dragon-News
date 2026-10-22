import { Card, CardHeader } from "@/components/ui/card";
import { News } from "@/lib/newsCategories";
import Image from "next/image";


const NewsCard = ({news}:{news:News}) => {

    const { author} = news

    console.log(news);

    return (
        <Card>
            <CardHeader>
                <div className="">
                    <Image width={50} height={50 } src={author.img} alt={`Image of ${author.name}`}/>
                    <div className="">
                        <h4 className="">{author.name}</h4>
                        <p className="text-sm text-zinc-600">{author.published_date}</p>
                    </div>
                </div>

            </CardHeader>
        </Card>
    );
};

export default NewsCard;