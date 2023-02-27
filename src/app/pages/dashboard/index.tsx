import Buttons from 'app/components/common/button';
import { InputSearch } from 'app/components/common/input';
import React from 'react';
import './style.scss';

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <div>
        <Buttons buttonType="primary">Primary Btn</Buttons>
        <Buttons buttonType="secondary">Secondary Btn</Buttons>
      </div>
      <div>
        <InputSearch />
      </div>
    </div>
  );
};

export default Dashboard;
