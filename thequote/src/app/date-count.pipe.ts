import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date(); 
    let todayWithoutTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var dateDifference = Math.abs(todayWithoutTime - value);
    const secondsInDay = 86400;
    var differenceInSec = dateDifference*0.001;
    var durationCount = differenceInSec/secondsInDay;

    if(durationCount >= 1 && value < todayWithoutTime){
      return durationCount;
    }else{
      return 0;
    }
  }



}
