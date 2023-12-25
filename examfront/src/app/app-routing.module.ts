import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from 'src/services/admin.guard';
import { UserGuard } from 'src/services/user.guard';
import { LoginGuard } from 'src/services/login.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuestionComponent } from './pages/admin/view-question/view-question.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';

const routes: Routes = [
  {path:'signup', component:SignupComponent, pathMatch:'full'},
  {path:'login', component:LoginComponent, pathMatch:'full',canActivate : [LoginGuard]},
  {path:'', component:HomeComponent, pathMatch:'full'},

  {path : 'admin',component : AdminDashboardComponent,canActivate : [AdminGuard],
      children :[
        {
          path : '',
          component : WelcomeComponent
        },
        {
          path : 'profile',
          component:ProfileComponent
        },
        {
          path:"categories",
          component:ViewCategoriesComponent
        },
        {
          path:"add-category",
          component:AddCategoryComponent
        },
        {
          path : "update-category/:id",
          component : UpdateCategoryComponent
        },
        {
          path : "quizzes",
          component : ViewQuizzesComponent
        },
        {
          path : "add-quiz",
          component : AddQuizComponent
        },
        {
          path : "update-quiz/:qid",
          component: UpdateQuizComponent
        },
        {
          path : "view-question/:qid/:title",
          component: ViewQuestionComponent
        },
        {
          path : "add-question/:qid/:title",
          component : AddQuestionComponent
        },
        {
          path : "update-question/:qid",
          component : UpdateQuestionComponent
        }
        
      
      ]
      // We configure all routes of admin here
  },
  {
    path : 'user-dashboard',
    component : UserDashboardComponent,
    canActivate : [UserGuard],
    children :[
      {
        path:':catId',
        component: LoadQuizComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
