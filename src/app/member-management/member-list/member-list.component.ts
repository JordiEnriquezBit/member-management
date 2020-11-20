import { FormGroup, FormBuilder } from '@angular/forms';
import { Member } from '../../shared/classes/member';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
@Input() members: Member[];
 @Output() delete = new EventEmitter<Member>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteMember(memberToDelete){
    this.delete.emit(memberToDelete);
  }
/*
  edit(member){
    this.formGroup.setValue(member);
  }*/


}
