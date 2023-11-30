import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { tap, map } from 'rxjs';



const checkAuthentication = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.checkAuthentication()
    .pipe(
      tap((isAuthenticated) => {
        if (isAuthenticated) {
          router.navigate(['/heroes'])
        }
      }),
      map(isAuthenticated => !isAuthenticated)
    )
}

export const publicGuardCanActivate: CanActivateFn = (route, state) => {
  return checkAuthentication();

};

export const publicGuardCanMatch: CanMatchFn = (route, segments) => {
  return checkAuthentication();
}
