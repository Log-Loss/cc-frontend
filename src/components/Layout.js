import React from 'react';
import { Link } from 'dva/router';
import { Popover,   Icon, BackTop } from 'antd';

import Search from './Search';
import styles from './Layout.less';

const content = (
  <div>
    <Search simple={true}/>
  </div>
);

const Layout = (props) => {
  const { loading } = props
  return (
    <div className={styles.normal}>
      <div className={styles.header}>
        <div className={styles.inner}>
          <Link className={styles.active} to="/">
            Distributed Order System - Cloud Computing
          </Link>
          <div className={styles.search}>
            <Link className={styles.active} to={'/new'}><Icon type="gift" /></Link>
              <Link className={styles.active} to={'/new_customer'}><Icon type="team" /></Link>
            <Popover content={content} placement="bottomRight" title="Search" trigger="click">
              <Link className={styles.active}><Icon type="search" /></Link>
            </Popover>
          </div>
        </div>
      </div>
      <div className={styles.view}>
        <BackTop />
        {loading?<div className={styles.loading}></div>:null}
        { props.children }
      </div>
    </div>
  );
};

export default Layout;
