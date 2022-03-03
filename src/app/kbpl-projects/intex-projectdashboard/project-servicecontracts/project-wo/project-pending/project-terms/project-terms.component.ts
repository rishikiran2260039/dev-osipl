import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-project-terms',
  templateUrl: './project-terms.component.html',
  styleUrls: ['./project-terms.component.scss']
})
export class ProjectTermsComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  back(){
    window.history.back();
    }

  allFields = [1];
  removeItem(index){
    this.allFields.splice(index, 1);
  }


   
  public narrationspoppoterms() {
    // let dialogRef = this.dialog.open(NarrationsPurchasePopupComponent, {
      
    //   height: 'auto',
    //   width: '700px'
    // });
    // dialogRef.afterClosed().subscribe(data => {
    // });
  } 
  items1 =[
    {subject:"ACKNOWLEDGEMENT COPY",narration:"Acceptance of a Purchase Order shall form a binding contract with the Vendor signing and returning the acknowledgement copy or by the timely delivery of the goods specified"},
    {subject:"DELIVERY DATE",narration:"Delivery Date to be understood as the time the goods have to be available at the location indicated under Delivery Terms."},
    {subject:"PAYMENT TERMS",narration:"Payment against the invoice referred to above will reflect any discount shown under the payment terms provided payment is made within the eriod shown in the payment terms of the contract."},
    {subject:"TAX EXEMPTION",narration:"Section 7 of the Convention on the Privileges and Immunities of the United  Nations provides, inter alia, that the UN, including its Subsidiary organs, as well  as specialized agencies, is exempt from all direct taxes and is exempt from customs duties in respect of articles imported or exported for its official use. "},
    {subject:"EXPORT LICENCE",narration:"The contract is subject to the obtaining of any export licence or other governmental authorization which may be necessary. "},
    {subject:"RISK OF LOSS",narration:"Risk of loss, injury or destruction to the goods shall be borne by the Vendor until physical delivery of the goods has been completed in accordance with the Purchase Order."},
    {subject:"FITNESS OF GOODS/PACKING",narration:"Vendor warrants that the goods, including adequate packaging, conform to the specifications and are fit for the purposes for which such goods are ordinarily used and for purposes expressly made known to the Vendor by WHO"},
    {subject:"WARRANTY CLAUSE",narration:"The Vendor warrants that the use or supply by WHO of the goods offered for sale under the Purchase Order do not infringe any patent, trade-name, or trade-mark. "},
    {subject:"FORCE MAJEURE",narration:"Neither party to the contract shall be held responsible for delay in the fulfilment thereof due to force majeure, strikes, lock-out, war, civil unrest, or other factors outside its control"},
    {subject:"INDEMNIFICATION",narration:"The Vendor shall indemnify and save harmless WHO and the Government who receives the items referred to herein from and against all claims, damages, losses, costs and expenses arising out of any injury, sickness or death to persons or any loss of or damage to property, caused by the fault or negligence of the Vendor"},
    {subject:"ASSIGNMENT AND INSOLVENCY",narration:") The Vendor shall not assign, transfer, pledge or make other disposition of this Contract or any part thereof, or any of the Vendor's rights, claims or  obligations under this Contract except with the prior written consent of the WHO."},
    {subject:"USE OF NAME, EMBLEM OR OFFICIAL SEAL OF THE WHO",narration:"The Vendor shall not advertise or otherwise make public the fact that it is a Vendor with the WHO, nor shall the Vendor, in any manner whatsoever use the name, emblem or official seal of the WHO, or any abbreviation of the name of the WHO in connection with its business or otherwise."},
    {subject:"ARBITRATION",narration:"Any matter relating to the interpretation or application of this Purchase Order  which is not covered by its terms shall be resolved by reference to Swiss law."},
    {subject:"PRIVILEGES AND IMMUNITIES",narration:"Nothing contained in or relating to this Purchase Order shall be deemed to constitute a waiver of any of the privileges and immunities enjoyed by WHO and/or as submitting WHO to any national court jurisdiction"},
  ]

  items2 =[
    {subject:"DEFINITIONS & INTERPRETATION",narration:"“Agreement” means the Work Order, all schedules and other attachments to it, and these terms and conditions;“Completion Date” means the completion date set out in the Work Order;“Contract Price” means the amount(s) payable for the Services as set out in the Work Order (as adjusted from time to time in accordance with this Agreement);"},
    {subject:"RELATIONSHIP OF THE PARTIES",narration:"The Service Provider is an independent contractor and nothing in this Agreement renders or deems the Service Provider or any of its Personnel to be an employee, agent or partner of Allity"},
    {subject:"SERVICES",narration:"The Service Provider agrees to provide the Services at the Home by the Completion Date in a proper and professional manner to the standard expected of a competent contractor, and to use materials that comply with this Agreement and which are of good quality, fit for the purpose for which they are used and which are new, unless this Agreement expressly provides otherwise"},
    {subject:"TAX EXEMPTION",narration:"Section 7 of the Convention on the Privileges and Immunities of the United  Nations provides, inter alia, that the UN, including its Subsidiary organs, as well  as specialized agencies, is exempt from all direct taxes and is exempt from customs duties in respect of articles imported or exported for its official use. "},
    {subject:"CONTRACT PRICE AND INVOICES",narration:"The Contract price is fixed and will not be subject to any adjustment for any variations except for an approved variation under clause"},
    {subject:"GST",narration:"Except where this Agreement specifies otherwise, an amount payable by a party under this agreement in respect of a taxable supply by the other party does not include GST"},
    {subject:"INDEMNITY",narration:"he Service Provider indemnifies Allity against liability, loss, cost, damage or expense suffered or incurred by Allity, directly or indirectly, as a consequence of any act or omission by the service provider or its personnel, except to the extent that the liability, loss, cost, damage or expense was caused or contributed to by the negligence or contractual breach of Allity"},
    {subject:"WARRANTIES",narration:"The Service Provider represents and warrants that it has the necessary skills, resources and experience to properly supply the Services in accordance with the Work Order"},
    {subject:"WARRANTY FOR BUILDING DEFECTS",narration:"The Service Provider warrants that it will promptly make good any defects or omissions in the Services that become apparent within 6 months of the Date of Completion at the Service Provider’s expense. "},
    {subject:"SUSPENSION OF SERVICES AND COMPLETION DATE",narration:"Unless otherwise agreed, Allity may suspend all or part of the provision of the Services at any time and for any period of time by notice in writing to the Service Provider. The Service Provider must comply with the notice and recommence provision of Services when notified by Allity"},
    {subject:"TERMINATION",narration:"Allity may terminate this Agreement at any time by giving notice in writing to the Service Provider. Subject to any set off or deduction rights that Allity may have, on termination Allity’s only obligation will be to pay the Service Provider for Services that have been provided in accordance with the Work Order prior to the date of termination."},
    {subject:"FORCE MAJEURE",narration:"A party will not be liable for any failure or delay in the performance of its obligations under this agreement to the extent that such failure or delay is caused, directly or indirectly, by a Force Majeure event, "},
    {subject:"INSURANCE",narration:"Prior to commencing the Services, and before entering any Allity premises, the Service Provider must effect with a reputable and financially sound insurer and maintain during the performance"},
    {subject:"CONFIDENTIALITY",narration:"This Agreement must be treated as confidential and must not be disclosed to any person, company or other supplier, or otherwise used for advertisement, display or publication without the prior written consent of Allity."},
  ]
  public potermspop() {
    // let dialogRef = this.dialog.open(SavenewtemplatePurchasePopupComponent, {
      
    //   height: 'auto',
    //   width: '700px'
    // });
    // dialogRef.afterClosed().subscribe(data => {
    // });
  }

  
}
