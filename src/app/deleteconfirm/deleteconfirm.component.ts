import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrl: './deleteconfirm.component.css'
})
export class DeleteconfirmComponent {

  @Input() item:String|undefined

}
