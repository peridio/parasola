/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  reference: [
    'reference/api-keys',
    'reference/authorization-policies',
    'reference/authorization-scopes',
    'reference/element-types',
    'reference/elements',
    'reference/accounts',
    'reference/members',
    'reference/nodes'
  ],
  guides: [
    'guides/accepting-an-invite',
    'guides/logging-in',
    'guides/creating-an-api-key',
    'guides/using-an-api-key'
  ],
  cli: [
    'cli/installation'
  ]
};

module.exports = sidebars;
