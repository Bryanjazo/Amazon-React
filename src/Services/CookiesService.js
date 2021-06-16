import React from 'react'
import PropTypes from 'prop-types'
import Cookie from 'universal-cookie';

const cookie = new Cookie();
class CookiesServices extends React.Component {
  get(key: string){
    return cookie.get(key)
  }

  set(key: string, value: string, options: Object){
    cookie.set(key, value, options);
  }


  remove(key: string){
    cookie.remove(key)
  }
}

export default new CookiesServices;
