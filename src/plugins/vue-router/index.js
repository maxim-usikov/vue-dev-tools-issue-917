import Vue from 'vue';
import Router from 'vue-router';
import appRoutes from './appRoutes';

Vue.use(Router);

const appRouter = new Router({
  mode: 'history',
  // Note: showing in Routing tab: dev-tools@^5.0.1
  // routes: [ ...appRoutes ],
  routes: [{ path: '*', redirect: '/' }],
});

// Note: not showing in Routing tab: dev-tools@^5.0.1
appRouter.addRoutes(appRoutes);

export default appRouter;
