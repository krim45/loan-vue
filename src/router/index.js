import { createRouter, createWebHistory } from "vue-router";

// pages
import StartPage from '@/pages/StartPage';
import LimitCheckPage from '@/pages/LimitCheckPage';
import LoanSetupPage from '@/pages/LoanSetupPage';
import ConfirmationPage from '@/pages/ConfirmationPage';
import CompletePage from '@/pages/CompletePage';
import NotFoundPage from '@/pages/NotFoundPage';

const routes = [
  {
    path: '/',
    redirect: '/start'
  },
  {
    path: '/start',
    name: 'start',
    component: StartPage,
  },
  {
    path: '/limit-check',
    name: 'limit-check',
    component: LimitCheckPage,
  },
  {
    path: '/loan-setup',
    name: 'loan-setup',
    component: LoanSetupPage,
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: ConfirmationPage,
  },
  {
    path: '/complete',
    name: 'complete',
    component: CompletePage,
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
