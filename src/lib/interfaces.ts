export interface NavbarLink {
  id: number;
  title: string;
  to: string;
}

export interface SocialLink {
  id: number;
  icon: JSX.Element;
  link: string;
}

export interface SkillItem {
  id: number;
  title: string;
  percentage: string;
}
