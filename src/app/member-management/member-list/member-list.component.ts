import { FormGroup, FormBuilder } from '@angular/forms';
import { Member } from '../../shared/classes/member';
import { Component, Input, OnInit, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  @Input() members: Member[];
  @Input() formGroup2: FormGroup;

  @Output() delete = new EventEmitter<Member>();
  @Output() edit = new EventEmitter<Member>();
  panelOpenState = false;

  constructor() { }
  ngOnInit(): void {
  }

  deleteMember(memberToDelete){
    this.delete.emit(memberToDelete);
  }

  changeMemberToEdit(member){
    console.log(member);
    this.formGroup2.setValue(member);
  }

  editMember(member){
    this.edit.emit(member);
  }


}
