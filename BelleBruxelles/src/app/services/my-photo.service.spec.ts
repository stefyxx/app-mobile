import { TestBed } from '@angular/core/testing';

import { MyPhotoService } from './my-photo.service';

describe('MyPhotoService', () => {
  let service: MyPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
