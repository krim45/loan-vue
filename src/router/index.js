import { createRouter, createWebHistory } from 'vue-router';

// pages
import StartPage from '@/pages/StartPage';
const LimitCheckPage = () => import('@/pages/LimitCheckPage');
const LoanSetupPage = () => import('@/pages/LoanSetupPage');
const ConfirmationPage = () => import('@/pages/ConfirmationPage');
const CompletePage = () => import('@/pages/CompletePage');
const NotFoundPage = () => import('@/pages/NotFoundPage');

const routes = [
  {
    path: '/',
    redirect: '/start',
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
  routes,
});

export default router;
