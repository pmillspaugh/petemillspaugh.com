export enum PostFormat {
  Essay = "Essay",
  Brainstorm = "Brainstorm",
  TIL = "TIL",
  ShowNTell = "ShowNTell",
}

export const PostFormatDescription = {
  [PostFormat.Essay]: "Essay",
  [PostFormat.Brainstorm]: "Brainstorm",
  [PostFormat.TIL]: "TIL",
  [PostFormat.ShowNTell]: "Show ’n tell",
};

export enum PostStatus {
  Seedling = "Seedling",
  Budding = "Budding",
  Evergreen = "Evergreen",
}

export interface PostMetadata {
  slug: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  format: PostFormat;
  status: PostStatus;
}
