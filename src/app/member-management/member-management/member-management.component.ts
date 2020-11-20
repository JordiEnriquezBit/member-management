import { members } from './../../shared/data/members';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Member } from 'src/app/shared/classes/member';

@Component({
  selector: 'app-member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.scss']
})
export class MemberManagementComponent implements OnInit {

  formGroup: FormGroup;
  formGroup2: FormGroup;
  members: Member[]=[];

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    //let arrayMembers = members;
    this.members = members;
    /*for (let i = 0; i < members.length; i++) {
        this.members.push(arrayMembers[i]);
    }*/
    this.formGroup = this.fb.group({
      _name:'John',
      _dni:'1234567'
    })
    this.formGroup2 = this.fb.group({
      _name:'',
      _dni:''
    })
  }

  recibir(member){
    this.members.push(member);
  }
  deleteMember(memberToDelete){
    let index = this.members.findIndex(member => member.dni == memberToDelete.dni);
    this.members.splice(index, 1);
  }
  editMember(memberToDelete){
    let index = this.members.findIndex(member => member.dni == memberToDelete.dni);
    this.members.splice(index, 1,memberToDelete);
  }
}
