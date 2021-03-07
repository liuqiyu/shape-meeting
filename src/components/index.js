
// const AdvancedComponents = [ButtonList, UploadFile] // 高阶组件

// const AllComponents = [...Elements, ...AdvancedComponents] // 所有组件集合

// const install = (Vue, opts = {}) => {
//   AllComponents.filter(v => typeof v !== 'function').forEach(component => {
//     Vue.component(component.name, component)
//   })

//   Vue.prototype.$ASPWEBLIB = {
//     style: opts.style || ''
//   }
// }

// /* istanbul ignore if */
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

// export default {
//   version: '1.0.2',
//   install,
//   ButtonList,
//   UploadFile,
//   Elements
// }