import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestDirective } from './test.directive';
import { EventDirective } from './event.directive';
import { PrefixDirective } from './prefix.directive';
import { InputbgComponent } from './inputbg/inputbg.component';
import { BgDirective } from './bg.directive';
import { ContainerComponent } from './container/container.component';
import { IfDirective } from './if.directive';
import { IfComponent } from './if/if.component';
import { AddIntervalDirective } from './add-interval.directive';
import { DelayComponent } from './delay/delay.component';
import { ReverseStrPipe } from './reverse-str.pipe';
import { ReverseComponent } from './reverse/reverse.component';
import { ReverseWordsPipe } from './reverse-words.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    EventDirective,
    PrefixDirective,
    InputbgComponent,
    BgDirective,
    ContainerComponent,
    IfDirective,
    IfComponent,
    AddIntervalDirective,
    DelayComponent,
    ReverseStrPipe,
    ReverseComponent,
    ReverseWordsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
