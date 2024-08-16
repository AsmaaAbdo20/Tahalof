export interface FacilitiesGetResponse {
  main_image: string;
  main_title: string;
  years: number[];
  hospitals: {
    count: number;
    next: null;
    previous: null;
    results: HospitalGetResponse[];
  };
}
export interface HospitalGetResponse {
  uuid: string;
  built_year: number;
  image: string;
  name: string;
  hospital_logo: string;
  info: [
    {
      svg: string;
      number: number;
      text: string;
    }
  ];
  country_title: string;
  country: string;
  contact_title: string;
  contact_svg1: string;
  contact_number1: string;
  contact_svg2: string;
  contact_number2: string;
  branch_title: string;
  branch: string;
  location_title: string;
  location_svg: string;
  location: string;
  location_iframe: null;
  description_title: string;
  description1: string;
  description_img1: string;
  description_img2: string;
  description2: string;
  media_title: string;
  media: [
    {
      image: string;
      description: string;
    }
  ];
}
