import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart Uploads',
        desc: 'Drop your product images, links or creative briefs and watch AI create stunning ad variations in seconds.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'AI Creative Engine',
        desc: 'Powered by the latest AI models, our engine generates high-converting ad copy, visuals and video scripts tailored to your brand.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Multi-Format Output',
        desc: 'Get scroll-stopping ads in all key formats: 9:16 for stories/reels, 1:1 for feeds, and 16:9 for YouTube—all from a single upload.'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$10',
        desc: 'Perfect For small businesses & solopreneurs.',
        credits: 25,
        features: [
            '25 credits',
            'Standard quality 720p Ad Videos',
            'No watermark',
            'No add to our social media'
        ]
    },
    {
        id: 'pro',
        name: 'pro',
        price: '$50',
        desc: 'For growing teams and businesses.',
        credits: 90,
        features: [
            '90 credits',
            'High quality 1080p Ad Videos',
            'No watermark',
            'No add to our social media',
            'proiority service'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'ultra',
        price: '$100',
        desc: 'For brands ready to scale fast.',
        credits: 300,
        features: [
            '300 credits',
            'High quality 1080p Ad Videos',
            'No watermark',
            'No add to our social media',
            'priority service',
            '24/7 chat and email support'
        ]
    }
];

export const faqData = [
    {
        question: 'What is Vivid_Ad Generator?',
        answer: 'Vivid_Ad Generator is an AI-powered platform that helps you create high-quality video ads in seconds. Simply upload your product images, links or creative briefs and watch AI create stunning ad variations tailored to your brand.'
    },
    {
        question: 'How many ads can I create with each plan?',
        answer: 'Each plan comes with a set number of credits, and each credit lets you create one 15-second ad video. You can use your credits anytime and they never expire.'
    },
    {
        question: 'What video formats are supported?',
        answer: 'We support multiple formats including 9:16 for Stories/Reels, 1:1 for feeds, and 16:9 for YouTube. You can download and use your ads across all major social platforms.'
    },
    {
        question: 'Is there a watermark on the videos?',
        answer: 'No, all videos are completely watermark-free. You own the content and can use it freely for your brand.'
    },
    {
        question: 'Can I request custom features or integrations?',
        answer: 'Yes. For Enterprise plans or custom requests, contact our sales team and we’ll work with you to build a solution that meets your specific needs.'
    }
];

export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", url: "#" },
            { name: "Feature", url: "#" },
            { name: "Pricing", url: "#" },
            { name: "FAQ", url: "#" }
        ]
    },
    {
        title: "Resources",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];