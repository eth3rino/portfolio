import { ApplicationConfig, inject, provideBrowserGlobalErrorListeners } from '@angular/core';
import { isActive, provideRouter, Router, ViewTransitionInfo, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideMarkdown } from 'ngx-markdown';
import { CurrentTransitionSpy } from './services/current-transition-spy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    }), withViewTransitions({
      onViewTransitionCreated: (transitionInfo: ViewTransitionInfo) => {
        const currentTransitionSpy = inject(CurrentTransitionSpy)
        currentTransitionSpy.transition.set(transitionInfo)
        
        const router = inject(Router);
        const targetUrl = router.currentNavigation()!.finalUrl!;

        const config = {
          paths: "exact",
          matrixParams: "exact",
          fragment: "ignored",
          queryParams: "ignored"
        } as const;

        const isTargetRouteCurrent = isActive(targetUrl, router, config)
        if (isTargetRouteCurrent()) {
          transitionInfo.transition.skipTransition();
        }

        console.log(transitionInfo?.to.firstChild?.routeConfig?.path)
        console.log(transitionInfo?.from.firstChild?.routeConfig?.path)

        const isEntryToLab: boolean = transitionInfo.from.firstChild?.routeConfig?.path === 'lab/:id' && transitionInfo.to.firstChild?.routeConfig?.path === 'lab'
        if (isEntryToLab) {
          document.documentElement.classList.add('wipe-reverse');
          transitionInfo.transition.finished.finally(() => {
            document.documentElement.classList.remove('wipe-reverse')
          })
        }

        transitionInfo.transition.finished.finally(() => {
          currentTransitionSpy.transition.set(null)
        })
      },
      skipInitialTransition: true
    })),
    provideHttpClient(),
    provideMarkdown()
  ]
};
