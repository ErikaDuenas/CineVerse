import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  isCaptchaValid = false;
  @ViewChild('rechaptchaDiv') rechaptchaDiv!: ElementRef;

  constructor() {}

  ngOnInit(){
  }

  get siteKey(){
    return environment.recaptcha.siteKey;
  }

  captchaResolved(ev:any){
    this.isCaptchaValid = true;
    this.rechaptchaDiv.nativeElement.remove();
  }

}
