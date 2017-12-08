import { Component } from '@angular/core';
import { Proposal } from './proposal';


@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://jasondudley.com', 'Ruby on Rails', 150, 120, 15, 'jason@sagebin.com')
  proposalTwo: Proposal = new Proposal(16, 'Umbrella Company', 'http://jasondudley.com', 'Ruby on Rails', 150, 120, 15, 'jason@sagebin.com')
  proposalThree: Proposal = new Proposal(17, 'E Corp', 'http://jasondudley.com', 'Ruby on Rails', 150, 120, 15, 'jason@sagebin.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}