export type ContactHeroContent = {
  eyebrow?: string;
  title: string;
  description: string;
};

export type ProofMetric = {
  value: string;
  label: string;
  description: string;
};

export type ContactFormContent = {
  title: string;
  description: string;
  firmTypes: string[];
  intents: string[];
  submitLabel: string;
  helperText?: string;
};

export type LogoSectionContent = {
  eyebrow?: string;
  title: string;
  description?: string;
  logos: Array<{ name: string; src?: string }>;
};

export type OfficeInfoContent = {
  company: string;
  address: string;
  generalEmail: string;
  supportEmail: string;
  mapLink: string;
  mapEmbedSrc: string;
};

export type ContactContent = {
  hero: ContactHeroContent;
  metrics: ProofMetric[];
  form: ContactFormContent;
  logos: LogoSectionContent;
  office: OfficeInfoContent;
};
