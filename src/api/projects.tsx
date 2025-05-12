import { nanoid } from "nanoid";

type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    url: string;
}

const projects: Project[] = [
    {
        id: nanoid(),
        title: "Project 1",
        description: "This is a description of project 1",
        image: "https://picsum.photos/200/300",
        url: "https://example.com/project1",
    }
]

export default projects;