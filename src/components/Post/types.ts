export enum PostFormat {
  Essay = "Essay",
  Brainstorm = "Brainstorm",
  TIL = "TIL",
  ShowNTell = "ShowNTell",
  Note = "Note",
  Clipping = "Clipping",
}

export const PostFormatDescription = {
  [PostFormat.Essay]: "Essay",
  [PostFormat.Brainstorm]: "Brainstorm",
  [PostFormat.TIL]: "TIL",
  [PostFormat.ShowNTell]: "Show ’n tell",
  [PostFormat.Note]: "Note",
  [PostFormat.Clipping]: "Clipping",
};

export enum PostStatus {
  Seedling = "Seedling",
  Budding = "Budding",
  Evergreen = "Evergreen",
}

export interface PostMetadata {
  slug: string;
  title: string;
  planted: string;
  watered: string;
  format: PostFormat;
  status: PostStatus;
}
