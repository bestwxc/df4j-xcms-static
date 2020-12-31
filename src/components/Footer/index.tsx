import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright="2020 DF4J XCMS"
    links={[
      {
        key: 'DF4J XCMS',
        title: 'DF4J XCMS',
        href: 'https://github.com/bestwxc/df4j-xcms',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/bestwxc/df4j-xcms',
        blankTarget: true,
      },
    ]}
  />
);
