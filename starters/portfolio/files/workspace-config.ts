import { WorkspaceContext } from '@teambit/generator';
import {
  getWorkspaceConfigTemplateParsed,
  stringifyWorkspaceConfig,
} from '@teambit/config';

export async function workspaceConfig({
  name,
  defaultScope,
}: WorkspaceContext) {
  const scope = defaultScope || 'org.scope-name';
  const configParsed = await getWorkspaceConfigTemplateParsed();
  configParsed['teambit.workspace/workspace'].name = name;
  configParsed['teambit.workspace/workspace'].defaultScope = scope;
  configParsed['showoff.personal-portfolio/apps/portfolio'] = {};
  configParsed['teambit.dependencies/dependency-resolver'] = {
    policy: {
      dependencies: {
        '@teambit/cloud-providers.deployers.netlify': "0.1.7",
        'core-js': "^3.29.0",
        'lodash': "^4.17.21",
        'cheerio': "1.0.0-rc.12",
        'webpack': "5.75.0",
        '@teambit/eslint-config-bit-react': '~0.0.367',
        '@typescript-eslint/eslint-plugin': '4.29.3',
        'eslint-import-resolver-node': '0.3.6',
        'eslint-plugin-import': '2.22.1',
        'eslint-plugin-jest': '24.4.0',
        'eslint-plugin-jsx-a11y': '6.4.1',
        'eslint-plugin-mdx': '1.15.0',
        'eslint-plugin-react': '7.25.1',
      },
      peerDependencies: {
        'react': '^18.0.0',
        'react-dom': '^18.0.0',
        '@mdx-js/react': '^1.6.22',
        '@teambit/mdx.ui.mdx-scope-context': '^0.0.496',
        '@mui/material': '^5.11.0',
        '@emotion/react': '^11.10.5',
        '@emotion/styled': '^11.10.5',
        '@mui/icons-material': '^5.11.0',
        '@mui/lab': '^5.0.0-alpha.57',
        '@apollo/client': '^3.7.7',
        'react-router-dom': '^6.0.2',
        'formik': '^2.2.9',
        'yup': '^1.0.0',
        'subscriptions-transport-ws': '^0.11.0',
        'graphql': '^16.6.0',
        '@testing-library/react': '^13.4.0',
        '@testing-library/react-hooks': '^8.0.1',
        '@teambit/community.ui.community-highlighter': '1.96.7',
      },
    },
    packageManager: "teambit.dependencies/pnpm",
    linkCoreAspects: true
  };

  return stringifyWorkspaceConfig(configParsed);
}
