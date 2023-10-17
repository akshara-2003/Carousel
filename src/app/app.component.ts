import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  images = [{url:"https://th.bing.com/th/id/OIP.Hw6j4YmPpOmspix7dAlmmAHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            alt:"Image1"},
            {url:"https://th.bing.com/th/id/OIP.lNhRyJKSNg6846229D4oAwHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            alt:"Image2"},
          {url:"https://th.bing.com/th/id/OIP.Gf-l00JYdnK51yuK6r6X6AHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            alt:"Image3"}];
  index=0;
  src=this.images[0].url;
  alt=this.images[0].alt;
  next()
  {
    this.index+=1
    this.index=(this.index)%3;
    this.src=this.images[this.index].url;
    this.alt=this.images[this.index].alt;
  }
  prev()
  {
    this.index-=1
    if(this.index<0)
    {
      this.index=this.images.length - 1;
    }
    this.index=(this.index)%3;
    this.src=this.images[this.index].url;
    this.alt=this.images[this.index].alt;
  }
  setCurrent(id: number): void {
    this.index = id;
    this.src=this.images[this.index].url;
    this.alt=this.images[this.index].alt;
  }
}
