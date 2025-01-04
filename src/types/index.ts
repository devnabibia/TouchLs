export type SubmenuItem = {
  title: string;
  href: string;
  description: string;
};

export type NavWithSubItemProps = {
  className?: string;
  onClick?: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MainNavItem = any;

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
  };
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};
