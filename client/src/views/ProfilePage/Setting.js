import React from 'react';
import { Button, Form, Input, Icon } from 'antd';

function Setting() {
    return (
      <div style={{ width: '80%', margin: '3rem auto ' }}>
        <div style={{ textAlign: 'left' }}>
            <h1>Change Password <Icon type="lock"/></h1>
        </div>
        <Form>
          <label>Old Password</label><Input/>
          <br/>
          <br/>
          <label>New Password</label><Input/>
          <br/>
          <br/>
          <label>Confirm New Password</label><Input/>
          <br/>
          <br/>
          <Button type="dashed" size="large">Change</Button>
        </Form>
      </div>
    );
  }

export default Setting;