import { async, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { OwnersComponent } from './owners.component'
import { OwnersModule } from './owners.module'

describe('OwnersComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ OwnersModule, RouterTestingModule ],
    })
    .compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(OwnersComponent)
    const component = fixture.componentInstance
    expect(component).toBeTruthy()
  })
})
