export interface CharacterProps {
    map(arg0: (character: CharacterProps) => import("react").JSX.Element): import("react").ReactNode;
    length: number;
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export type Characters = CharacterProps[];
