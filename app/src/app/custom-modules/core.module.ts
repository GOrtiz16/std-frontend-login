import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

const modules = [BrowserAnimationsModule, BrowserModule, HttpClientModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class CoreModule {}
