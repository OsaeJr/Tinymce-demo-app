import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { TaskComponent } from './list/task.component';
import { TaskDetailComponent } from './detail/task-detail.component';
import { TaskUpdateComponent } from './update/task-update.component';
import { TaskDeleteDialogComponent } from './delete/task-delete-dialog.component';
import { TaskRoutingModule } from './route/task-routing.module';
import { EditorWidgetModule } from 'app/shared/editor-widget/editor-widget.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [SharedModule, TaskRoutingModule, EditorWidgetModule, RouterModule],
  declarations: [TaskComponent, TaskDetailComponent, TaskUpdateComponent, TaskDeleteDialogComponent],
  entryComponents: [TaskDeleteDialogComponent],
})
export class TaskModule {}
