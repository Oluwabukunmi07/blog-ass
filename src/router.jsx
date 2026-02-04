import React, { lazy, Suspense } from 'react';
import {
  createRouter,
  createRootRoute,
  createRoute
} from '@tanstack/react-router';
import { ErrorBoundary } from './components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home'));
const PostDetail = lazy(() => import('./pages/PostDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

const rootRoute = createRootRoute({
  component: () => (
    <ErrorBoundary>
      <Suspense
  fallback={
    <div className="min-h-screen flex items-center justify-center">
      <p className="animate-pulse text-gray-500">Loading…</p>
    </div>
  }
>

        <Outlet />
      </Suspense>
    </ErrorBoundary>
  )
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home
});

const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/post/$postId',
  component: PostDetail
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFound
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  postRoute,
  notFoundRoute
]);

export const router = createRouter({ routeTree });
