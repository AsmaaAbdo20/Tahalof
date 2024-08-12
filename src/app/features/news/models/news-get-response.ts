export interface NewsGetResponse {
  years: number[];
  news: {
    count: number;
    next: null;
    previous: null;
    results: [
      {
        id: string;
        created_at: string;
        main_image: string;
        news_svg: string;
        main_title: string;
        main_description: string;
      }
    ];
  };
}
