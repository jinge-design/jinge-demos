import {
  vm,
  uid
} from 'jinge';

export default class Todo {
  static fromSaved(savedData) {
    return new Todo(savedData.title, savedData.done, savedData.id);
  }
  constructor(title, done = false, id = null) {
    this.id = id || uid();
    this.title = title;
    this.done = done;
    /*
     * this code is important. we must convert object to ViewModel,
     *   as todo model will be used in view of Component.
     */
    return vm(this);
  }
}