import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _3be068bc = () => interopDefault(import('../pages/api.vue' /* webpackChunkName: "pages/api" */))
const _471bd0f7 = () => interopDefault(import('../pages/api/_slug.vue' /* webpackChunkName: "pages/api/_slug" */))
const _4473bf97 = () => interopDefault(import('../pages/examples.vue' /* webpackChunkName: "pages/examples" */))
const _236950dc = () => interopDefault(import('../pages/examples/_slug.vue' /* webpackChunkName: "pages/examples/_slug" */))
const _2b379bb8 = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _2367d6f3 = () => interopDefault(import('../pages/faq/_slug.vue' /* webpackChunkName: "pages/faq/_slug" */))
const _bd0063c4 = () => interopDefault(import('../pages/guide.vue' /* webpackChunkName: "pages/guide" */))
const _d10ab96c = () => interopDefault(import('../pages/guide/release-notes.vue' /* webpackChunkName: "pages/guide/release-notes" */))
const _6203b64e = () => interopDefault(import('../pages/guide/_slug.vue' /* webpackChunkName: "pages/guide/_slug" */))
const _27af2fa6 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _14c8b7a8 = () => interopDefault(import('../pages/home/_slug.vue' /* webpackChunkName: "pages/home/_slug" */))
const _25bc3e18 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

const scrollBehavior = function(to, from, savedPosition) {
      // savedPosition is only available for popstate navigations (back button)
      if (savedPosition) {
        return savedPosition
      }
      return { x: 0, y: 0 }
    }

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/api",
      component: _3be068bc,
      name: "api",
      children: [{
        path: ":slug?",
        component: _471bd0f7,
        name: "api-slug"
      }]
    }, {
      path: "/examples",
      component: _4473bf97,
      name: "examples",
      children: [{
        path: ":slug?",
        component: _236950dc,
        name: "examples-slug"
      }]
    }, {
      path: "/faq",
      component: _2b379bb8,
      name: "faq",
      children: [{
        path: ":slug?",
        component: _2367d6f3,
        name: "faq-slug"
      }]
    }, {
      path: "/guide",
      component: _bd0063c4,
      name: "guide",
      children: [{
        path: "release-notes",
        component: _d10ab96c,
        name: "guide-release-notes"
      }, {
        path: ":slug?",
        component: _6203b64e,
        name: "guide-slug"
      }]
    }, {
      path: "/home",
      component: _27af2fa6,
      name: "home",
      children: [{
        path: ":slug?",
        component: _14c8b7a8,
        name: "home-slug"
      }]
    }, {
      path: "/",
      component: _25bc3e18,
      name: "index"
    }],

    fallback: false
  })
}
