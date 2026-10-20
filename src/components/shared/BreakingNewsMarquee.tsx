import { Button } from "@/components/ui/button";
import Link from "next/link";
import Marquee from 'react-fast-marquee';

const news = [
    {
        id: 1,
        title: "Amazon Introduces TorchNeuron to Challenge Nvidia",
        summary:
            "Amazon introduced a tool that lets developers run PyTorch-based AI code on its Trainium chips with minimal code changes.",
        category: "AI",
        source: "Reuters",
        publishedAt: "2026-10-19",
        imageUrl: "",
        url: "https://www.reuters.com/business/retail-consumer/amazon-says-its-ai-chips-will-work-with-popular-coding-language-challenging-nvidia-2026-10-19/",
        isBreaking: true,
    },
    {
        id: 2,
        title: "US Orders Removal of DeepSeek from Civilian Government Systems",
        summary:
            "The US Department of Homeland Security restricted DeepSeek products in civilian government IT systems over security concerns.",
        category: "Security",
        source: "Reuters",
        publishedAt: "2026-10-19",
        imageUrl: "",
        url: "https://www.reuters.com/technology/us-banning-chinese-ai-deepseek-government-agency-it-systems-2026-10-19/",
        isBreaking: true,
    },
    {
        id: 3,
        title: "Nvidia CEO Urges German Industry to Adopt AI",
        summary:
            "Jensen Huang encouraged German manufacturers to use AI in robotics, vehicles, and industrial production.",
        category: "Technology",
        source: "Associated Press",
        publishedAt: "2026-10-19",
        imageUrl: "",
        url: "https://apnews.com/article/f024c1e0d181677a19468657907a9025",
        isBreaking: false,
    },
    {
        id: 4,
        title: "Software Upgrades Consume a Significant Share of IT Budgets",
        summary:
            "A survey found that large US and UK companies spend an average of 28% of software budgets on vendor-driven upgrades, migrations, and licensing changes.",
        category: "Business",
        source: "Reuters",
        publishedAt: "2026-10-20",
        imageUrl: "",
        url: "https://www.reuters.com/business/software-upgrades-eat-nearly-third-companies-it-budgets-survey-finds-2026-10-20/",
        isBreaking: false,
    },
];




const BreakingNewsMarquee = () => {
    return (
        <div className='flex gap-2 p-4 bg-gray-100'>
            <Button variant={'destructive'} >
                Latest
            </Button>
            <Marquee pauseOnHover={true} className='font-medium text-lg'>
                {
                    news.map(n => {
                        return <span key={n.id} >
                            <Link
                                className="mx-4 md:mx-6 lg:mx-10"
                                href={n.url}>
                                {n.title}  {"  "}
                            </Link>
                        </span>
                    })
                }
            </Marquee>
        </div>
    );
};

export default BreakingNewsMarquee;