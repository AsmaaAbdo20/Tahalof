export interface ServiceDetailsGetResponse {
  main_image: string;
  name: string;
  overview: string;
  description: string;
  we_do_title: string;
  service_details_top_left_image: string;
  service_details_top_middle_description: string;
  service_details_top_right_description_image: string;
  service_details_bottom_left_description: string;
  service_details_bottom_middle_image: string;
  service_details_bottom_right_description: string;
  case_title: string;
  case_studies: [
    {
      image: string;
      title: string;
      description: string;
    }
  ];
  contact: {
    contact_title: string;
    contact_description: string;
    contact_button: string;
  };
}
