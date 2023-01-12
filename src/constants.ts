export type HumanType = {
  Age: number;
  Card_Display?: boolean;
  Created_at: string;
  Framework: string[];
  Gender: string;
  InterviewUrl: string;
  Name: string;
  Nickname: string;
  Picture: PictureType[];
  Position: string;
  Projects: string;
  "Reason of resignation": string;
  Resume: string;
  Skills: string[];
  WorkHistory: string;
  WorkLocation: string;
};

type PictureType = {
  filename: string;
  height: number;
  id: string;
  size: number;
  thumbnails: {
    full: DetailImgType;
    large: DetailImgType;
    small: DetailImgType;
  };
  type: string;
  url: string;
  width: number;
};

type DetailImgType = {
  url: string;
  width: number;
  height: number;
};
