import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { CardComponent } from './card/card.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { ChipsComponent } from './chips/chips.component';
import { CoreComponent } from './core/core.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

const routes: Routes = [
  {
    path:'Autocomplete',
    component:AutocompleteComponent
  },
  {
    path:'Badge',
    component:BadgeComponent
  },
  {
    path:'Bottomsheet',
    component:BottomSheetComponent 
   },
  {
    path:'Button',
    component:ButtonComponent
  },
  {
    path:'ButtonToggle',
    component:ButtonToggleComponent
  },
  {
    path:'card',
    component:CardComponent
  },
  {
    path:'checkBox',
    component:CheckBoxComponent
  },
  {
    path:'chips',
    component:ChipsComponent
  },
  {
    path:'core',
    component:CoreComponent
  },
  {
    path:'datePicker',
    component:DatePickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
