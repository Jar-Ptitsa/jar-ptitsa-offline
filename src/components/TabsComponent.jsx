import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Form from './Form';

const TabsComponent = ({ tabsContent }) => {
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

  const renderHiddenHTMLFormsForNetlify = (list) => {
    return list.map((tabContent, index) => {
      return (
        <Form
          key={index}
          formData={tabContent}
          formName={tabContent.form_name}
          formSubject={`JAR-PTITSA OFFLINE - ${tabContent.form_name}`}
          className='col-sm-8 col-md-12 mx-auto'
        />
      );
    });
  };

  return (
    <React.Fragment>
      <Tabs>
        <TabList>{renderTabsLabels(tabLabels)}</TabList>
        {renderTabContent(tabsContent)}
      </Tabs>
      <div
        style={{
          visibility: 'hidden',
          maxWidth: '1px',
          maxHeight: '1px',
        }}>
        {renderHiddenHTMLFormsForNetlify(tabsContent)}
      </div>
    </React.Fragment>
  );
};

export default TabsComponent;
