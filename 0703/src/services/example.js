import request from '../utils/request';

export function query() {
  const listArr = localStorage.getItem('TodoList') || ''
  return listArr
}

