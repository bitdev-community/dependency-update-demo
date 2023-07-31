import { WorkspaceContext, Starter } from '@teambit/generator';
import { workspaceConfig } from './files/workspace-config';
import { readme } from './files/readme-file';
import { gitIgnore } from './files/git-ignore';
import { assetTypes } from './files/types/asset';
import { styleTypes } from './files/types/style';
import { eslintConfig } from './files/eslint-config';
import { tsConfig } from './files/ts-config';
import { prettierConfig } from './files/prettier-config';
import { launchJson } from './files/launch-json';

export const starter: Starter = {
  name: 'portfolio',
  description: 'a workspace for the portfolio app',
  appName: 'portfolio',
  generateFiles: async (context: WorkspaceContext) => [
    {
      relativePath: 'workspace.jsonc',
      content: await workspaceConfig(context),
    },
    {
      relativePath: '.gitignore',
      content: gitIgnore(),
    },
    {
      relativePath: 'README.md',
      content: readme(),
    },
    {
      relativePath: '.vscode/launch.json',
      content: launchJson,
    },
    {
      relativePath: `README.md`,
      content: readme(),
    },
    {
      relativePath: `.eslintrc.js`,
      content: eslintConfig,
    },
    {
      relativePath: `tsconfig.json`,
      content: tsConfig,
    },
    {
      relativePath: `.prettierrc.js`,
      content: prettierConfig,
    },
    {
      relativePath: `types/asset.d.ts`,
      content: assetTypes,
    },
    {
      relativePath: `types/style.d.ts`,
      content: styleTypes,
    },
  ],

  fork: () => [
    { id: 'showoff.dev/envs/react-with-mui' },
    { id: 'showoff.dev/envs/react-18' },
    { id: 'showoff.personal-portfolio/constants/data' },
    { id: 'showoff.personal-portfolio/theme/dark-portfolio-theme' },
    { id: 'showoff.personal-portfolio/theme/light-portfolio-theme' },
    { id: 'showoff.personal-portfolio/apps/portfolio' },
    { id: 'showoff.personal-portfolio/navigation/appbar' },
    { id: 'showoff.personal-portfolio/navigation/appfooter' },
    { id: 'showoff.personal-portfolio/pages/about-page' },
    { id: 'showoff.personal-portfolio/pages/individual-project-page' },
    { id: 'showoff.personal-portfolio/pages/landing-page' },
    { id: 'showoff.personal-portfolio/pages/projects-page' },
    { id: 'showoff.contact-me/pages/contact-page' },
  ],
};

export default starter;
