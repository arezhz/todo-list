import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  isLogin = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(untilDestroyed(this))
      .subscribe((res: any) => {
        if (res instanceof NavigationEnd) {
          this.isLogin = res.url.includes('login');
        }
      })
  }
}
