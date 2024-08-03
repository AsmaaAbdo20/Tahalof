import { environment } from '../../environments/environment';

const basUrl = environment.baseUrl;
export class EndPoints {
  public static readonly HOME = `${basUrl}/api/home/`;
  public static readonly FOOTER = `${basUrl}/api/header-and-footer/`;
  public static readonly CONTACTUS = `${basUrl}/api/contact-us/`;
  public static readonly CAREER = `${basUrl}/api/career/`;
  public static readonly ABOUTUS = `${basUrl}/api/about-us/`;
  public static readonly NEWS = `${basUrl}/api/news/`;
  public static readonly SERVICE = `${basUrl}/api/service/`;
  public static readonly HOSPITAL = `${basUrl}/api/hospital/`;
  public static readonly NEWSLETTER = `${basUrl}/api/newsletter/`;
}
