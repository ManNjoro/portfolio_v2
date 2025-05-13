import { nanoid } from "nanoid";
import { federated,game,mkulima,portfolio1,portfolio2,zoomeek } from "@/logos";

type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    url: string;
    technologies: Array<string>;
}

const projects: Project[] = [
    {
        id: nanoid(),
        title: "Zoommeek",
        description: "A tech company that offers solutions including internet, security and gas",
        image: zoomeek,
        url: "https://zoommeekafrica.co.ke",
        technologies: ['react','javascript', 'tailwind', 'django', 'mysql']
    },
    {
        id: nanoid(),
        title: "Diabetes Detector",
        description: "A privacy-preserving AI system for early diabetes prediction using distributed machine learning across healthcare institutions.",
        image: federated,
        url: "https://github.com/ManNjoro/federated_learning",
        technologies: ['react','javascript', 'tailwind','python', 'flask', 'flower', 'federated learning']
    },
    {
        id: nanoid(),
        title: "M-kulima",
        description: "A Farm Management Mobile Application designed to help farmers track and manage their agricultural operations",
        image: mkulima,
        url: "https://drive.google.com/file/d/1Lzk7rp9iZWKZRcF8lbnPVGeVT90agaar/view?usp=drive_link",
        technologies: ['react native','javascript', 'expo','sqlite']
    },
    {
        id: nanoid(),
        title: "Game Hub",
        description: "A Video Game Discovery App",
        image: game,
        url: "https://game-hub-eli.vercel.app/",
        technologies: ['react','typescript', 'chakra ui','RAWG API']
    },
    {
        id: nanoid(),
        title: "Portfolio V1",
        description: "My portfolio version 1 😅",
        image: portfolio1,
        url: "https://elimyportfolio.netlify.app/",
        technologies: ['react','javascript', 'css']
    },
    {
        id: nanoid(),
        title: "Portfolio V2",
        description: "My portfolio version 2 😎",
        image: portfolio2,
        url: "#",
        technologies: ['react','typescript', 'tailwind', 'framer-motion']
    },
]

export default projects;