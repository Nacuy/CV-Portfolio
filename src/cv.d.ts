export interface CV {
  basics: Basics;
  work: Array<Work>;
  education: Array<Education>;
  skills: Array<Skills>;
  languages: Array<Languages>;
  interests: Array<Interests>;
  projects: Array<Projects>;
  currently: Array<Currently>;
  volunteer?: Array<Volunteer>;
  awards?: Array<Awards>;
  certificates?: Array<Certificates>;
  publications?: Array<Publications>;
  references?: Array<References>;
}

interface Currently {
  title: string;
  description: string;
  skills?: Array<string>;
}

interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone?: string;
  url: string;
  summary: string;
  theme?: string;
  location: Location;
  profiles: Array<Profiles>;
}

interface Location {
  address?: string;
  postalCode?: string;
  city: string;
  countryCode: string;
  region: string;
}

interface Profiles {
  network: string;
  username: string;
  url: string;
}

interface Work {
  name: string;
  position: string;
  url?: string;
  location?: string;
  location_type?: string;
  startDate: DateStr;
  endDate: DateStr | null;
  summary: string;
  responsibilities?: Array<string>;
  skills?: Array<string>;
  highlights?: Highlight;
}

type DateStr = `${string}-${string}` | `${string}-${string}-${string}`;

interface Volunteer {
  organization: string;
  position: string;
  url: string;
  startDate: DateStr;
  endDate: DateStr;
  summary: string;
  highlights: Highlight;
}

interface Skills {
  name: string;
  level: string;
  keywords: Array<string>;
}

interface Awards {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

interface Certificates {
  name: string;
  date: DateStr;
  issuer: string;
  url: string;
}

interface Publications {
  name: string;
  publisher: string;
  releaseDate: DateStr;
  url: string;
  summary: string;
}

interface Education {
  institution: string;
  url: string;
  area: string;
  studyType?: string;
  location?: string;
  startDate: DateStr;
  endDate: DateStr | null;
  score?: string;
  courses?: Array<string>;
}

interface Languages {
  language: Language;
  fluency: string;
}

type Language =
  | "Spanish"
  | "English"
  | "German"
  | "France"
  | "Italian"
  | "Korean"
  | "Portuguese"
  | "Chinese"
  | "Arabic"
  | "Dutch"
  | "Finnish"
  | "Russian"
  | "Turkish"
  | "Hindi"
  | "Bengali"
  | string;

interface Projects {
  name: string;
  isActive: boolean;
  description: string;
  highlights: Highlight;
  url: string;
  github?: string;
}

interface Interests {
  name: string;
  keywords: Array<string>;
}

interface References {
  name: string;
  reference: string;
}

type Highlight = Array<string>;
