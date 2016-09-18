import { observable, computed, action, autorun } from 'mobx'

export class UI {
  // Being used for setting nav-active class in SidebarLeft component.
  @observable navPath

  @observable pendingHttpCount = 0

  @observable sidebarLeftCollapsed = false
  @observable sidebarLeftOpened = false
  @observable sidebarRightOpened = false

  @observable notification = {
    title: '',
    message: '',
    level: ''
  }

  constructor () {
    autorun(() => console.log('pending http count:', this.pendingHttpCount))
  }

  @computed
  get isHttpPending () {
    return !!this.pendingHttpCount
  }

  @computed
  get hasNotification () {
    return !!this.notification.message
  }

  @action
  clearNotification () {
    Object.assign(this.notification, {
      title: '',
      message: '',
      level: ''
    })
  }

  @action
  incrementHttpCount () {
    this.pendingHttpCount += 1
  }

  @action
  decrementHttpCount () {
    this.pendingHttpCount -= 1
  }

  @action
  removeSidebarLeftCollapsedClass () {
    const element = this.getHtmlTag()
    if (element.classList.contains('sidebar-left-collapsed')) {
      this.sidebarLeftCollapsed = false
      element.classList.remove('sidebar-left-collapsed')
    }
  }

  @action
  removeSidebarLeftOpenedClass () {
    const element = this.getHtmlTag()
    if (element.classList.contains('sidebar-left-opened')) {
      this.sidebarLeftOpened = false
      element.classList.remove('sidebar-left-opened')
    }
  }

  @action
  setNavPath (path) {
    this.navPath = path
  }

  @action
  setNotification (notification) {
    Object.assign(this.notification, notification)
  }

  @action
  setTableRecord (tableRecord) {
    this.tableRecord = tableRecord
  }

  @action
  toggleSidebarLeftCollapsed () {
    const element = this.getHtmlTag()
    this.sidebarLeftCollapsed = !this.sidebarLeftCollapsed
    element.classList.toggle('sidebar-left-collapsed')
    this.removeSidebarLeftOpenedClass()
  }

  @action
  toggleSidebarLeftOpened () {
    const element = this.getHtmlTag()
    this.sidebarLeftOpened = !this.sidebarLeftOpened
    element.classList.toggle('sidebar-left-opened')
    this.removeSidebarLeftCollapsedClass()
  }

  @action
  toggleSidebarRightOpened () {
    const element = this.getHtmlTag()
    this.sidebarRightOpened = !this.sidebarRightOpened
    element.classList.toggle('sidebar-right-opened')
  }

  getHtmlTag () {
    return document.getElementsByTagName('html')[0]
  }

  toJS () {
    return {
      pendingHttpCount: this.pendingHttpCount,
      sidebarLeftCollapsed: this.sidebarLeftCollapsed,
      sidebarLeftOpened: this.sidebarLeftOpened,
      sidebarRightOpened: this.sidebarRightOpened,
      isTableRecordVisible: this.isTableRecordVisible,
      tableRecord: this.tableRecord
    }
  }
}

export default UI

