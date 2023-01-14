import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  EventEmitter,
  Inject, Injector,
  OnInit,
  Output,
  Self, ViewContainerRef
} from '@angular/core';
import {NgControl} from "@angular/forms";
import {FORM_ERRORS} from "@shared/services/form-error-list";
import {ErrorComponent} from "@shared/components/error/error.component";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Directive({
  selector: '[appFormError]',
  standalone: true
})
export class FormErrorDirective implements OnInit {
  compRef!: ComponentRef<ErrorComponent> | undefined;
  @Output() errorStatusChanged: EventEmitter<string | null> = new EventEmitter<string | null>();

  constructor(@Self() private control: NgControl,
              private viewContainerRef: ViewContainerRef,
              private injector: Injector,
              @Inject(FORM_ERRORS) private error: any,) {
  }

  ngOnInit() {
    this.control.statusChanges?.pipe(untilDestroyed(this))
      .subscribe(() => {
        const controlErrors = this.control.errors;
        if (controlErrors) {
          const firstKey = Object.keys(controlErrors)[0];
          const getError = this.error[firstKey];
          const text = getError(controlErrors[firstKey]);
          this.formInvalid(text);
        } else if (this.compRef) {
          this.formValid();
        } else {
          this.formValid();
        }
      })

    this.control.valueChanges?.pipe(
      untilDestroyed(this)
    ).subscribe(() => {
      const controlErrors = this.control.errors;
      if (controlErrors) {
        const firstKey = Object.keys(controlErrors)[0];
        const getError = this.error[firstKey];
        const text = getError(controlErrors[firstKey]);
        this.formInvalid(text);
      } else if (this.compRef) {
        this.formValid();
      } else {
        this.formValid();
      }
    })
  }

  private formInvalid(text: any) {
    this.errorStatusChanged.emit(text);
    this.setError(text);
  }

  private formValid() {
    this.errorStatusChanged.emit(null);
    this.removeError();
  }

  removeError() {
    if (this.compRef) {
      this.compRef.destroy();
      this.compRef = undefined;
    }
  }

  setError(text: string) {
    if (!this.compRef) {
      this.compRef = this.viewContainerRef.createComponent(ErrorComponent, {injector: this.injector});
      const loaderComponentElement = this.compRef.location.nativeElement;
      let targetElement: HTMLElement;
      targetElement = loaderComponentElement.parentNode;
      targetElement.insertAdjacentElement('beforeend', loaderComponentElement);
    }
    this.compRef.instance.errorText = text;
  }
}
