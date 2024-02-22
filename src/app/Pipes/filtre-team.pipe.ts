import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtreTeam'
})
export class FiltreTeamPipe implements PipeTransform {

  transform(objs:any, term:any): any {
    if (term === undefined) {
    return objs;
    }
    return objs.filter((obj)=> {
    return (obj.name.toLowerCase().includes(term.toLowerCase()) 
    || obj.stadium.toLowerCase().includes(term.toLowerCase())
    || obj.owner.toLowerCase().includes(term.toLowerCase())
    || obj.foundation.toLowerCase().includes(term.toLowerCase()));
    })
    }


}
