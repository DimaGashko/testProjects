import { List1Component } from './list1/list1.component';
import { List2Component } from './list2/list2.component';

export const routs = [
   { path: 'list1', component: List1Component },
   { path: 'list2', component: List2Component },
   { path: '', redirectTo: 'list1', pathMatch: 'full' },
];