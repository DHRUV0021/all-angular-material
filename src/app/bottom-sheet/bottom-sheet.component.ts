import {Component} from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { BottomSheetDummyFileComponent } from '../bottom-sheet-dummy-file/bottom-sheet-dummy-file.component';


@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetDummyFileComponent);
  }
}



