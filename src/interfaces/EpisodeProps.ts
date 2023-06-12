export interface EpisodeProps {
    map(arg0: (episode: EpisodeProps) => import("react").JSX.Element): import("react").ReactNode;
    length: number;
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

export type Episodes = EpisodeProps[];
