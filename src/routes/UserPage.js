import React from 'react';
import {connect} from 'dva';
import {Button} from 'antd';
import styles from './SearchPage.less';
import Layout from '../components/Layout';
import OrderList from "../components/OrderList";


class SearchPage extends React.Component {
  ondel () {
    this.props.dispatch({
      type: 'customer/del',
      payload: this.props.params.customerId,
    })
  }
  render() {
    const {orders, dispatch, params} = this.props;
    return (
      <Layout loading={this.props.loading}>
        <div className={styles.card}>
          <h2>{params.customerId}'s Orders <Button onClick={() => this.ondel()} type='danger' icon='delete'></Button></h2>

          <OrderList productId={-2} customerId={params.customerId} orders={orders} dispatch={dispatch}/>
        </div>



      </Layout>
    );
  }
}

SearchPage.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.loading.global,
    orders: state.order.list,
  };
}

export default connect(mapStateToProps)(SearchPage);
