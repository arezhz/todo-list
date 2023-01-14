import {Component, Input} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";

@Component({
  standalone: true,
  selector: 'app-error',
  templateUrl: './error.component.html',
  imports: [
    MatFormFieldModule
  ],
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  @Input() errorText!: string;
}
