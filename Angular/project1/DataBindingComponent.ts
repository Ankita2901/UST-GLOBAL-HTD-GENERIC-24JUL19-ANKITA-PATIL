import { Component } from "@angular/core";

@Component({
    selector: 'appdata-binding.component',
    templateUrl: `./data-binding.component.html`,
    styleUrls: [`./data-binding.component.css`],
    

})
export  class DataBindingComponent{
    name = `ankita`;
    textClasses = `bg-success text-white`;
    paragraphstyle = 'violet';
    imgURL = `https://cdn.pixabay.com/photo/2019/04/04/17/58/hong-kong-4103334_960_720.jpg`;

}






