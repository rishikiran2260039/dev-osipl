import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-correspondence-dialog',
  templateUrl: './add-correspondence-dialog.component.html',
  styleUrls: ['./add-correspondence-dialog.component.scss']
})
export class AddCorrespondenceDialogComponent implements OnInit {

  constructor( public dialogRef : MatDialogRef<AddCorrespondenceDialogComponent>) { }

  ngOnInit() {
  }

  close(): void{
    this.dialogRef.close();
  }

  @ViewChild('fileInput')
  fileInput;

  file: File | null = null;

  public filterToggle: boolean;

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
  }

}
