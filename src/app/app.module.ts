import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgeComponent } from './badge/badge.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import { ButtonComponent } from './button/button.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { BottomSheetDummyFileComponent } from './bottom-sheet-dummy-file/bottom-sheet-dummy-file.component';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card'
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CheckBoxComponent } from './check-box/check-box.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { ChipsComponent } from './chips/chips.component';
import { CoreComponent } from './core/core.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    BadgeComponent,
    ButtonComponent,
    BottomSheetComponent,
    BottomSheetDummyFileComponent,
    ButtonToggleComponent,
    CardComponent,
    CheckBoxComponent,
    ChipsComponent,
    CoreComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatBadgeModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatListModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonToggleModule,
    FormsModule,
    MatCardModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
   
    

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
