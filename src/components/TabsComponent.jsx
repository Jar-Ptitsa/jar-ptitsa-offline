import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Form from './Form';

const TabsComponent = ({ tabsContent }) => {
  console.log(tabsContent);

  const tabLabels = tabsContent.map((tab) => tab.tab_label);

  const renderTabsLabels = (list) => {
    return list.map((tabLabel, index) => {
      return <Tab key={index}>{tabLabel}</Tab>;
    });
  };

  const renderTabContent = (list) => {
    return list.map((tabContent, index) => {
      return (
        <TabPanel key={index}>
          <Form
            formData={tabContent}
            formName={tabContent.form_name}
            formSubject={`JAR-PTITSA OFFLINE - ${tabContent.form_name}`}
            className='col-sm-8 col-md-12 mx-auto'
          />
        </TabPanel>
      );
    });
  };

  return (
    <Tabs>
      <TabList>{renderTabsLabels(tabLabels)}</TabList>
      {renderTabContent(tabsContent)}
    </Tabs>
  );
};

export default TabsComponent;
