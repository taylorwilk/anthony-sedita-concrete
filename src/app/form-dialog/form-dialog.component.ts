import { Component, ViewChild, ElementRef} from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent {
  @ViewChild('formDialog', { static: false}) formDialog: ElementRef;
  @ViewChild('content', { static: false}) content: ElementRef;

  constructor(private formBuilder: UntypedFormBuilder) {}
  
  public firstName: FormControl<string>
  public lastName: FormControl<string>
  public email: FormControl<string>
  public phoneNumber: FormControl<string>
  public location: FormControl<string>
  public description: FormControl<string>

  public ngOnInit(): void {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.phoneNumber = new FormControl('', Validators.required);
    this.location = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
  }
  
  open(): void {
    this.formDialog.nativeElement.style.display = 'block';
  }

  close(): void {
    this.formDialog.nativeElement.style.display = 'none';
  }

  tryClose($event: any): void {
    const clickTarget = $event.target as HTMLElement;
    if (!(this.content.nativeElement as HTMLElement).contains(clickTarget)) {
      this.close();
    }
  }

  // onSubmit() {
  
  // }
}
