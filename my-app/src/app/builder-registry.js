'use client'

import { BoxComponent } from "./components/Box";
import { CustomTabs } from "./components/Tab";
import { Table } from "./components/Table";

export const BlockComponent = {
  name: "CustomBox",
  component: BoxComponent,
  inputs: [
    {
      name: 'text',
      type: 'string',
      defaultValue: 'Hello world',
    },
  ],
};


export const TableComponent = {
  name: "CustomTable",
  component: Table,
  shouldReceiveBuilderProps: {
    builderBlock: true,
    builderComponents: true,
    builderContext: true,
  },
  inputs: [
    {
      name: 'column1',
      type: 'uiBlocks',
      hideFromUI: true,
      defaultValue: {
        blocks: [],
      },
      childRequirements: {
        query: {
          // The child of this element must be 
          // a 'Button' or 'Text' component
          'component.name': { $in: ['Button', 'Text'] }
        }
      },
    },
    {
      name: 'column2',
      type: 'uiBlocks',
      hideFromUI: true,
      defaultValue: {
        blocks: [],
      },
    },
    {
      name: 'column3',
      type: 'uiBlocks',
      hideFromUI: true,
      defaultValue: {
        blocks: [],
      },
    },
  ],
};

export const CustomTabsComponent = {
  name: "CustomTabs",
  component: CustomTabs,
  shouldReceiveBuilderProps: {
    builderBlock: true,
    builderComponents: true,
    builderContext: true,
  },
  inputs: [
    {
      name: 'tabList',
      type: 'list',
      subFields: [
        {
          name: 'tabName',
          type: 'string',
        },
        {
          name: 'blocks',
          type: 'uiBlocks',
          defaultValue: [],
        },
      ],
    },
  ],
};
