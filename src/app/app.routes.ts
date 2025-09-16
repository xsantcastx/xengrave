import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage) },
  { path: 'collections', loadComponent: () => import('./pages/collections/collections.page').then((m) => m.CollectionsPage) },
  { path: 'collections/:slug', loadComponent: () => import('./pages/collections/collection-detail/collection-detail.page').then((m) => m.CollectionDetailPage) },
  { path: 'product/:slug', loadComponent: () => import('./pages/product/product.page').then((m) => m.ProductPage) },
  { path: 'custom', loadComponent: () => import('./pages/customizer/customizer.page').then((m) => m.CustomizerPage) },
  { path: 'pricing', loadComponent: () => import('./pages/pricing/pricing.page').then((m) => m.PricingPage) },
  { path: 'gallery', loadComponent: () => import('./pages/gallery/gallery.page').then((m) => m.GalleryPage) },
  { path: 'about', loadComponent: () => import('./pages/about/about.page').then((m) => m.AboutPage) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.page').then((m) => m.ContactPage) },
  { path: '**', redirectTo: '' },
];
