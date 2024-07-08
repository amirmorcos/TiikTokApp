import { Video } from "./Video";

export interface User {
  username: string;
  createdAt: string;
  id: string;
  token: string;
  videos: Video[];
}
