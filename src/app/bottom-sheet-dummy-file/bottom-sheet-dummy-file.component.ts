import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-dummy-file',
  templateUrl: './bottom-sheet-dummy-file.component.html',
  styleUrls: ['./bottom-sheet-dummy-file.component.scss']
})
export class BottomSheetDummyFileComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetDummyFileComponent>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
