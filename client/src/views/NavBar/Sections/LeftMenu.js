import React from 'react';
import { Menu } from 'antd';

function LeftMenu(props) {
  return (
  <Menu mode={props.mode}>
    <Menu.Item key="books">
      <a href="/textbook">TextBooks</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu
