import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetDummyFileComponent } from './bottom-sheet-dummy-file.component';

describe('BottomSheetDummyFileComponent', () => {
  let component: BottomSheetDummyFileComponent;
  let fixture: ComponentFixture<BottomSheetDummyFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheetDummyFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetDummyFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
