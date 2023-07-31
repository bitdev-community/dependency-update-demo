---
Title: Portfolio Quick Starter
---

# Portfolio Quick Starter

This is a workspace which provides a foundational starter to build a portfolio application for yourself to showcase your work.

The original template has been developed and maintained by [@showoff](https://bit.cloud/showoff).

## Set up
After creating the starter, run a `bit install` to install the dependencies to ensure everything is running on the correct version.

If you run into an issue with a memory error, update the heap using the command - `export NODE_OPTIONS="--max-old-space-size=4096"`

Afterward, run `bit start` to launch the development server. 

## Component Walkthrough

The starter comprises of the following 
1. Development Components 
2. Portfolio Components
3. Contact Me Components 


### Development Components 

The development components comprises of two environments which power the capability of React 18 to your components. Additionally, the `react-with-mui` environment uses MUI to offer the use of a theme toggle, custom theming to your component visualization in the `Overview` and `Composition` view to help avoid code duplication (theme toggling).

If you are creating a new component, ensure that you use it with either the `react-18` or `react-with-mui` environment to offer support for React 18 and MUI. To create a component with the new environment, use the following command

```
bit create react <<NAMESPACE>>/<<COMPONENT-NAME> --env <<ORGNAME>>.<<SCOPE>>/<<NAMESPACE TO ENV>>
```

### Portfolio Components
This scope comprises of the components that you will need to build your portfolio. Locate the `constants` component. It will look as depicted below.

```
import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "@showoff/design.brand.logo";
import { HeaderProps } from "@showoff/design.navigation.header";
import { FooterProps } from "@showoff/design.navigation.footer";
import { IconsProps } from "@showoff/personal-portfolio.ui.social.icons";
import { History as HistoryEntity } from "@showoff/personal-portfolio.entities.history";
import { AboutPageProps } from "@showoff/personal-portfolio.pages.about-page";
import { Project } from "@showoff/personal-portfolio.entities.project";

const PERSON_IMAGE = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80";


export const CONTACT_ME_API_URL = "";

export const USER_PROFILE = {
  name: "Tobias Sundberg",
  bio: "Frontend developer, UX architect and Javascript engineer, Photochromic Lens enthusiast, practicing minimalist, and Pop Music & Jazz lover in search of flow.",
  tagline: "CREATIVE DEVELOPER WEB DESIGNER",
  imageUrl: PERSON_IMAGE,
  email: "Tobiassundberg@gmail.com"
}

export const ABOUT_ME: AboutPageProps = {
  headingText: "I’m Tobias Sundberg, a Creative web developer UX Engineer and a designOps. Working remotely from sunny Dublin, Ireland",
  body: {
    para1: "I’ve spent the past 12+ years working across different areas of digital design; front-end development, email design, marketing site pages, app UI/UX, to my current role designing products for mobile platforms.",
    para2: "These days my time is spent researching, designing, prototyping, and coding. I also help designers get started with their careers.",
    para3: "Out of the office you’ll find me dreaming of soccer, playing bass guitar, and petting all the good dogs."
  },
  avatarUrl: PERSON_IMAGE,
  cvLink: "https://enlear.com",
  history: [
    new HistoryEntity({
      designation: 'Software Engineer',
      company: 'ABC Company',
      yearsOfExperience: 3,
      period: '2019 - Present',
    }),
    new HistoryEntity({
      designation: 'Senior Software Engineer',
      company: 'ABC Company',
      yearsOfExperience: 3,
      period: '2019 - Present',
    }),
    new HistoryEntity({
      designation: 'Associate Technical Lead',
      company: 'ABC Company',
      yearsOfExperience: 5,
      period: '2020 - 2021',
    }),
  ]
}

export const PROJECTS: Project[] = [
  new Project({
    id: '1',
    description: 'An E-commerce Application For Buying Cotton Products.',
    image: 'https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage?dpr=2&auto=format&fit=crop&w=416&q=60',
    name: 'Project name',
    tags: ['React', 'Redux', 'Typescript', 'Node', 'Express', 'MongoDB'],
    type: 'component-based',
    links: {
      github: 'https://github.com',
      website: 'https://github.com',
      bit: 'https://github.com',
    },
    componentId: 'showoff.personal-portfolio/apps/portfolio@0.0.66'
  }),
  new Project({
    id: '2',
    description: 'An E-commerce Application For Buying Cotton Products.',
    image: 'https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage?dpr=2&auto=format&fit=crop&w=416&q=60',
    name: 'Project name',
    tags: ['React', 'Redux', 'Typescript', 'Node', 'Express', 'MongoDB'],
    type: 'component-based',
    links: {
      github: 'https://github.com',
      website: 'https://github.com',
      bit: 'https://github.com',
    },
    componentId: 'showoff.personal-portfolio/apps/portfolio@0.0.66'
  }),
  new Project({
    id: '3',
    description: 'An E-commerce Application For Buying Cotton Products.',
    image: 'https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage?dpr=2&auto=format&fit=crop&w=416&q=60',
    name: 'Project name',
    tags: ['React', 'Redux', 'Typescript', 'Node', 'Express', 'MongoDB'],
    type: 'monolithic',
    links: {
      github: 'https://github.com',
      website: 'https://github.com',
      bit: 'https://github.com',
    },
  }),
  new Project({
    id: '4',
    description: 'An E-commerce Application For Buying Cotton Products.',
    image: 'https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage?dpr=2&auto=format&fit=crop&w=416&q=60',
    name: 'Project name',
    tags: ['React', 'Redux', 'Typescript', 'Node', 'Express', 'MongoDB'],
    type: 'monolithic',
    links: {
      github: 'https://github.com',
      website: 'https://github.com',
      bit: 'https://github.com',
    },
  })
];

export const HEADER_LINKS: HeaderProps = {
  logo: <Link
    to="/"
  >
    <Logo />
  </Link>,
  navLinks: [
    { label: 'Projects', url: '/projects' },
    { label: 'Contact', url: '/contact' },
    { label: 'About me', url: '/about' },
  ]
}

export const FOOTER_META: FooterProps = {
  leftContent: 'Thanks for visiting.',
  rightContent: `© ${new Date().getFullYear()} Ober. All Rights Reserved.`
}

export const SOCIAL_LINKS: IconsProps = {
  links: [
    { name: 'github', url: 'https://github.com' },
    { name: 'linkedin', url: 'https://linkedin.com' },
    { name: 'twitter', url: 'https://twitter.com' },
    { name: 'website', url: 'https://enlear.com' },
  ]
}

```

The `constants` component offers complete customizability to your application. Update its values and build your reusable blog.

### Contact Me Components 

This scope contains the components required for the contact section.

## Deployment 

This starter offers deployment with Netlify. Locate the `portfolio` APP Component in the `apps` namespace in the `personal-portfolio` scope. Open the `portfolio.react-app.cjs` file.

```
const netlifyConfig = {
  accessToken: process.env.NETLIFY_AUTH_TOKEN,
  stagingSiteName: "portfolio-showoff-staging",
  productionSiteName: "portfolio-showoff-production",
  team: "enlear",
  redirects: "_redirects",
  webpackTransformers: [
    splitChunks,
    (config, context) => addSitemap(config, context, [...prerenderRoutes]),
  ],
};
```

Update the netlify config with your required paramters. Hereafter, run `bit tag --skip-tests` to trigger a deployment on netlify.