import { Injectable } from '@angular/core';
import { Visite } from '../models/visite';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {
visites:Array<Visite> = [
  {leaders:['Burdy','Nono'], hote:'Soeur de Nono', date:new Date(), observations:'hospitalisé'},
  {leaders:['Ghislaine','Didier'], hote:'famille Noutuo', date:new Date(), observations:'R.A.S'}
]
  constructor() { }

}
