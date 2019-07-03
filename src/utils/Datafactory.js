import _products from 'assets/data/menu.json';
const TIMEOUT = 100

export default {
  getMenus: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT)
}
