import React from 'react';
import {Icon} from 'antd';

export default () => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container" style={{textAlign:'center'}}>
      <h1 className="display-3"><Icon type="meh" />404 Page Not Found</h1>
      <p className="lead">We couldn't find the page you requested. Try access other content.</p>
    </div>
  </div>
);