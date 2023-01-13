import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  isLogin = false;

  constructor(private router: Router) {
    this.isLogin = router.url.includes('login');
  }
}
