import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseRelatedInfoComponent } from './course-related-info/course-related-info.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { StudentProfileComponent } from './student-profile.component';

/**
 * Module for student profile component.
 */
@NgModule({
  declarations: [
    StudentProfileComponent,
    MoreInfoComponent,
    CourseRelatedInfoComponent,
  ],
  exports: [
    StudentProfileComponent,
    MoreInfoComponent,
    CourseRelatedInfoComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
  ],
})
export class StudentProfileModule { }
