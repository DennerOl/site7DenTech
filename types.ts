
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface FounderInfo {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  qualifications: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
