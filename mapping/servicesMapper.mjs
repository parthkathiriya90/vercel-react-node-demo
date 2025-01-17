import { services } from "../Static/index.mjs";

const staticServices = [
    {
        title: "Instagram Services",
        image: "https://famoid.com/assets/social/instagram.svg",
        serviceListTitle: "Discover our Instagram Services!",
        description: "Enjoy Famoid's specially crafted Instagram services now!",
        services: [
            {
                name: "Buy Instagram Followers",
                icon: "fa-user-plus",
                "serviceId": "678",
                slug: "buy-instagram-followers"
            },
            {
                name: "Buy Instagram Likes",
                icon: "fa-user-plus",
                "serviceId": "593",
                slug: "buy-instagram-likes"
            },
            {
                name: "Buy Instagram Video Views",
                icon: "fa-user-plus",
                "serviceId": "710",
                slug: "buy-instagram-video-views"
            },
            {
                name: "Buy Instagram Reels",
                icon: "fa-user-plus",
                "serviceId": "665",
                slug: "instagram-reels"
            },
            {
                name: "Buy Automatic Instagram Likes",
                icon: "fa-user-plus",
                "serviceId": "625",
                slug: "buy-automatic-instagram-likes"
            }
        ]
    },
    {
        title: "TikTok Services",
        image: "https://famoid.com/assets/social/tiktok.svg",
        serviceListTitle: "Discover our TikTok Services!",
        description: "Enjoy Famoid's specially crafted TikTok services now!",
        services: [
            {
                name: "Buy TikTok Followers",
                icon: "fa-user-plus",
                serviceId: "593",
                slug: "buy-tiktok-followers"
            },
            {
                name: "Buy TikTok Likes",
                icon: "fa-user-plus",
                serviceId: "593",
                slug: "buy-tiktok-likes"
            },
            {
                name: "Buy TikTok Views",
                icon: "fa-user-plus",
                serviceId: "593",
                slug: "buy-tiktok-views"
            }
        ]
    },
    {
        title: "Youtube Services",
        image: "https://famoid.com/assets/social/youtube.svg",
        serviceListTitle: "Discover our Youtube Services!",
        description: "Enjoy Famoid's specially crafted Youtube services now!",
        services: [
            {
                name: "Buy Real Youtube Views",
                icon: "fa-user-plus",
                serviceId: "593",
                slug: "buy-real-youtube-views"
            },
            {
                name: "Buy Real Youtube Subscribers",
                icon: "fa-user-plus",
                serviceId: "593",
                slug: "buy-real-youtube-subscribers"
            },
            {
                name: "Buy Real Youtube Likes",
                icon: "fa-user-plus",
                serviceId: "593",
                slug: "buy-youtube-likes"
            }
        ]
    },
    {
        title: "Facebook Services",
        image: "https://famoid.com/assets/social/facebook.svg",
        serviceListTitle: "Discover our Facebook Services!",
        description: "Enjoy Famoid's specially crafted Facebook services now!",
        services: [
            {
                name: "Buy Facebook Likes",
                icon: "fa-user-plus",
                serviceId: "593",
                slug: "buy-facebook-likes"
            },
            {
                name: "Buy Facebook Fanpage Likes",
                icon: "fa-user-plus",
                serviceId: "593",
                slug: "buy-facebook-fanpage-likes"
            }
        ]
    }
]

export const mapServices = () => {
    return staticServices
};

export const mapSlugServices = (slug) => {
    for (const category of services) {
        const foundService = category.services.find(item => item.slug === slug);

        if (foundService) {
            return {
                ...foundService,
                categoryTitle: category.title
            };
        }
    }

    return null;
};

export const mapServiceList = (users) => {
    return users.map(mapServices);
};