import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'level3-task1';
  listItem = '';
  list = [];
  checked_id ='';
  checked_list = [];
  itemAdded = false;
  i=0;

  onAddItem(){
    this.itemAdded= true;
    
    this.list.push(this.listItem);
    this.listItem = "";
  }
  appendItem(event: any){
    
    if((<HTMLInputElement>event.target).checked){
      this.checked_id = (<HTMLInputElement>event.target).id;
      
      this.checked_list.push(this.checked_id);
    }
      
  }
  removeItems(){
      for(this.i=0;this.i<this.checked_list.length;this.i++){
        this.list.splice(parseInt(this.checked_list[this.i]),1);
        
      }
      this.checked_list.splice(0,this.checked_list.length);
  }

}
