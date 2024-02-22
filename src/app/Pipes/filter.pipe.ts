import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText:string): any[] {
    if (!items) {
      return[];
    }
    if (searchText=== undefined) {
      return items;
    }
    searchText= searchText.toLocaleLowerCase();
    return items.filter((obj)=>{
      return (obj.teamOne.toLowerCase().includes(searchText.toLowerCase()) 
      || obj.teamTwo.toLowerCase().includes(searchText.toLowerCase())
      ||obj.name.toLowerCase().includes(searchText.toLowerCase()) 
      || obj.position.toLowerCase().includes(searchText.toLowerCase())
      ||obj.name.toLowerCase().includes(searchText.toLowerCase()) 
      || obj.stadium.toLowerCase().includes(searchText.toLowerCase())
      || obj.owner.toLowerCase().includes(searchText.toLowerCase())
      || obj.foundation.toLowerCase().includes(searchText.toLowerCase())
      || obj.firstName.toLowerCase().includes(searchText.toLowerCase()) 
      || obj.lastName.toLowerCase().includes(searchText.toLowerCase())
      || obj.email.toLowerCase().includes(searchText.toLowerCase())
      )
    });
  }

}
