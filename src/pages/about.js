import React, { Component } from 'react';

import Layout from '../components/Layout';
import FadeInUp from '../components/FadeInUp';

export default class About extends Component {
  render() {
    return (
      <Layout>
        <FadeInUp>
          <div>
            <h1>About me</h1>
            <p>
              Tempor elit qui tempor Lorem pariatur dolore adipisicing nostrud.
              Proident velit do irure dolor incididunt cupidatat officia fugiat
              voluptate aute mollit est mollit. Ipsum Lorem eu esse dolore dolor
              ipsum ullamco nisi dolor nostrud anim excepteur deserunt ullamco.
            </p>
          </div>
        </FadeInUp>
      </Layout>
    );
  }
}
