export interface Post {
    id: string;
    title: string;
    content: string;
    date: string;
    userId?: string;
    reactions: Reactions;

}

export interface Reactions {
    thumbsUp: number,
    wow: number,
    heart: number,
    rocket: number,
    coffee: number
}

const reactionTypes = {
    thumbsUp: 'thumbsUp',
    wow: 'wow',
    heart: 'heart',
    rocket: 'rocket',
    coffee: 'coffee'
}

export type ReactionType = keyof typeof reactionTypes