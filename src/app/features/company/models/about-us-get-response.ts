export interface AboutUsGetResponse {
  page_title: string;
  main_image1: string;
  main_title1: string;
  sub_title1: string;
  description1: string;
  main_header2: string;
  main_title2: string;
  experience_years2: string;
  experience_title2: string;
  left_description2: string;
  image2: string;
  right_svg2: string;
  right_title2: string;
  right_description: string;
  main_title3: string;
  sub_title3: string;
  main_background3: string;
  achievements: [
    {
      svg: string;
      number: string;
      title: string;
    }
  ];
  main_title4: string;
  history: [
    {
      month: string;
      year: string;
      description: string;
      logo: string;
    }
  ];
  vision_title: string;
  vision_description: string;
  vision_image: string;
  mission_image: string;
  mission_title: string;
  mission_descriptions: [
    {
      description: string;
    }
  ];
  main_title6: string;
  values: [
    {
      svg: string;
      title: string;
      description: string;
    }
  ];
}
