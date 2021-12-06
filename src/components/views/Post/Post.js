import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Post.module.scss';

const Component = ({className,
  id,
  title,
  content,
  datePublished,
  dateUpdated,
  authorEmail,
  status,
  picture,
  price,
  phoneNumber,
  location,
}) => (
  <div className={clsx(className, styles.root)}>
    <h2>Post</h2>
    {console.log('id: ', id)}
    {console.log('title: ', title)}
    {console.log('content: ', content)}
    {console.log('datePublished: ', datePublished)}
    {console.log('dateUpdated: ', dateUpdated)}
    {console.log('authorEmail: ', authorEmail)}
    {console.log('status: ', status)}
    {console.log('picture: ', picture)}
    {console.log('price: ', price)}
    {console.log('phoneNumber: ', phoneNumber)}
    {console.log('location: ', location)}
  </div>
);

Component.propTypes = {
  id: PropTypes.any,
  title: PropTypes.string,
  content: PropTypes.string,
  /*datePublished: PropTypes.instanceOf(Date),
  dateUpdated: PropTypes.instanceOf(Date), */
  datePublished: PropTypes.any,
  dateUpdated: PropTypes.any,
  authorEmail: PropTypes.string,
  status: PropTypes.string,
  /* optional below */
  picture: PropTypes.string,
  price: PropTypes.number,
  phoneNumber: PropTypes.string,
  location: PropTypes.string,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Post,
  // Container as Post,
  Component as PostComponent,
};
