export interface ServiceGetResponse {
  page_title: string;
  main_title: string;
  main_description: string;
  services: {
    count: number;
    next: null;
    previous: null;
    results: [
      {
        uuid: string;
        main_image: string;
        svg: string;
        name: string;
        description: string;
      }
    ];
  };
  contact_title: string;
  contact_description: string;
  contact_button: string;
}
