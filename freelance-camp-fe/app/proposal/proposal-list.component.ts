import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';


@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  providers: [ProposalService]
})
export class ProposalListComponent implements OnInit {
  proposals: Proposal[];
  errorMessage: string;
  mode = "Observable"

  constructor(
    private proposalsService: ProposalService
  ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getProposals());

  }
  getProposals() {
    this.proposalsService.getProposals()
      .subscribe(
      documents => this.proposals = documents,
      error => this.errorMessage = <any>error
      )
  }
}