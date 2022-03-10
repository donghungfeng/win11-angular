import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-win11';

  icon_emr = "assets/images/icon_emr.png";

  app_window_multitask:any;
  app_unit:any;
  app_line:any;
  app_minus:any;
  app_content:any;

  constructor(){
   
  }
  ngAfterViewInit(): void {
    this.app_window_multitask = document.querySelector("#emr");
    this.app_unit = document.querySelector("#emr_unit");
    this.app_line = document.getElementById("#lineemr");
    this.app_minus = document.querySelector("#bxminusemr");
    this.app_content = document.getElementById("emr_content");
  }


  resize(type:string):void{
    
    if(type === "addleft50"){
      this.app_window_multitask.setAttribute('class','Window Active1');
      this.app_window_multitask.classList.add("addleft50");
    }
    if(type === "addright50"){
      this.app_window_multitask.setAttribute('class','Window Active1');
      this.app_window_multitask.classList.add("addright50");
    }
    if(type === "addleft33"){
      this.app_window_multitask.setAttribute('class','Window Active1');
      this.app_window_multitask.classList.add("addright33");
    }
    if(type === "addright33"){
      this.app_window_multitask.setAttribute('class','Window Active1');
      this.app_window_multitask.classList.add("addleft33");
    }
    if(type === "addcenter33"){
      this.app_window_multitask.setAttribute('class','Window Active1');
      this.app_window_multitask.classList.add("addcenter33");
    }
    if(type === "addright25"){
      this.app_window_multitask.setAttribute('class','Window Active1');
      this.app_window_multitask.classList.add("addright25");
    }
    if(type === "addleft75"){
      this.app_window_multitask.setAttribute('class','Window Active1');
      this.app_window_multitask.classList.add("addleft75");
    }
    if(type === "addright75"){
      this.app_window_multitask.setAttribute('class','Window Active1');
      this.app_window_multitask.classList.add("addright75");
    }
    if(type === "addleft25"){
      this.app_window_multitask.setAttribute('class','Window Active1');
      this.app_window_multitask.classList.add("addleft25");
    }
    if(type === "addcenter50"){
      this.app_window_multitask.setAttribute('class','Window Active1');
      this.app_window_multitask.classList.toggle("addcenter50");
    }
    if(type === "addright50"){
      this.app_window_multitask.setAttribute('class','Window Active1');
      this.app_window_multitask.classList.toggle("addright50");
    }
    if(type === "addrighttop"){
      this.app_window_multitask.setAttribute('class','Window Active1');
      this.app_window_multitask.classList.toggle("addright_top");
    }
    if(type === "addrightbottom"){
      this.app_window_multitask.setAttribute('class','Window Active1');
      this.app_window_multitask.classList.toggle("addright_bottom");
    }
    if(type === "addlefttop"){
      this.app_window_multitask.setAttribute('class','Window Active1');
      this.app_window_multitask.classList.toggle("addleft_top");
    }
    if(type === "addleftbottom"){
      this.app_window_multitask.setAttribute('class','Window Active1');
      this.app_window_multitask.classList.toggle("addleft_bottom");
    }

  }

  resizeQLHD(type:string):void{
    let app_qldh_window_multitask = document.querySelector("#store")!;

    if(type === "addleft50"){
      app_qldh_window_multitask.setAttribute('class','Window Active1');
      app_qldh_window_multitask.classList.add("addleft50");
    }
    if(type === "addright50"){
      app_qldh_window_multitask.setAttribute('class','Window Active1');
      app_qldh_window_multitask.classList.add("addright50");
    }
    if(type === "addleft33"){
      app_qldh_window_multitask.setAttribute('class','Window Active1');
      app_qldh_window_multitask.classList.add("addright33");
    }
    if(type === "addright33"){
      app_qldh_window_multitask.setAttribute('class','Window Active1');
      app_qldh_window_multitask.classList.add("addleft33");
    }
    if(type === "addcenter33"){
      app_qldh_window_multitask.setAttribute('class','Window Active1');
      app_qldh_window_multitask.classList.add("addcenter33");
    }
    if(type === "addright25"){
      app_qldh_window_multitask.setAttribute('class','Window Active1');
      app_qldh_window_multitask.classList.add("addright25");
    }
    if(type === "addleft75"){
      app_qldh_window_multitask.setAttribute('class','Window Active1');
      app_qldh_window_multitask.classList.add("addleft75");
    }
    if(type === "addright75"){
      app_qldh_window_multitask.setAttribute('class','Window Active1');
      app_qldh_window_multitask.classList.add("addright75");
    }
    if(type === "addleft25"){
      app_qldh_window_multitask.setAttribute('class','Window Active1');
      app_qldh_window_multitask.classList.add("addleft25");
    }
    if(type === "addcenter50"){
      app_qldh_window_multitask.setAttribute('class','Window Active1');
      app_qldh_window_multitask.classList.toggle("addcenter50");
    }
    if(type === "addright50"){
      app_qldh_window_multitask.setAttribute('class','Window Active1');
      app_qldh_window_multitask.classList.toggle("addright50");
    }
    if(type === "addrighttop"){
      app_qldh_window_multitask.setAttribute('class','Window Active1');
      app_qldh_window_multitask.classList.toggle("addright_top");
    }
    if(type === "addrightbottom"){
      app_qldh_window_multitask.setAttribute('class','Window Active1');
      app_qldh_window_multitask.classList.toggle("addright_bottom");
    }
    if(type === "addlefttop"){
      app_qldh_window_multitask.setAttribute('class','Window Active1');
      app_qldh_window_multitask.classList.toggle("addleft_top");
    }
    if(type === "addleftbottom"){
      app_qldh_window_multitask.setAttribute('class','Window Active1');
      app_qldh_window_multitask.classList.toggle("addleft_bottom");
    }

  }

  close():void{

    this.app_window_multitask.setAttribute('class','Window');
    
    this.app_line.classList.remove("notactive");
    this.app_line.classList.remove("active");

    this.app_unit.classList.remove("open1");

    this.app_unit.classList.add("display_hide");
    this.app_unit.classList.remove("display_show");

    this.app_content.innerHTML = '';
  }

  minus():void{
    this.app_window_multitask.style = "z-index: 99999999; transition: all 0.2s ease 0s;"
    this.app_window_multitask.classList.toggle("Active1");
    this.app_line.classList.toggle("notactive");
    this.app_line.classList.add("active");
    //settings.classList.toggle("open");
    this.app_window_multitask.style.borderRadius = null;
    this.app_unit.classList.remove("open1");

    this.app_content.innerHTML = '';
  }

  header():void{
    this.app_window_multitask.style.zIndex = "99999999";
    let app_qldh_window_multitask:any = document.querySelector("#store")!;
    app_qldh_window_multitask.style.zIndex = "1"
  }

  headerQLDH():void{
    let app_qldh_window_multitask:any = document.querySelector("#store")!;
    app_qldh_window_multitask.style.zIndex = "99999999"
    this.app_window_multitask.style.zIndex = "1"
    
  }

  small():void{
    this.app_window_multitask.style = "z-index: 99999999; transition: all 0.2s ease 0s;"
    this.app_window_multitask.classList.toggle("SmallScreen1");
  }
}
