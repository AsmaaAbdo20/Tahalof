export interface CareerGetResponse {
  count: number;
  next: string;
  previous: null;
  results: CareerDetailsGetResponse[];
}
export interface CareerDetailsGetResponse {
  id: string;
  job_title: string;
  job_description: string;
}
