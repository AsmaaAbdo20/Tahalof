import { Directive, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Directive()
export abstract class BaseComponent implements OnDestroy {
  form!: FormGroup;
  fb = inject(FormBuilder);
  destroy$ = new Subject<void>();
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadForm(controlls: {}) {
    this.form = this.fb.group(controlls);
  }
  abstract onSubmit(): void;
}
