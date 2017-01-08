/**
 * Created by bruce on 2017/1/9.
 */

const STORAGE_KEY='todo-vuejs';

export default {
  get(){
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]')
  },
  save(items){
    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
  }
}
