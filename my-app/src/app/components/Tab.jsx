'use client'

import { Blocks } from '@builder.io/sdk-react';
import { useState } from 'react';

export const CustomTabs = ({ tabList, builderBlock }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!tabList?.length) return <></>;

  return (
    <div className="px-20">
      <div className="tab-buttons">
        {tabList?.map((tab, index) => (
          <button
            key={index}
            className={`border px-4 py-1 mt-2 ${activeTab === index ? 'border-black' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.tabName}
          </button>
        ))}
      </div>

      <div className="border py-10">
        <Blocks
          parent={builderBlock?.id}
          path={`tabList.${activeTab}.blocks`}
          blocks={tabList[activeTab].blocks}
        />
      </div>
    </div>
  );
};
