import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { AddProjectDialogComponent } from 'src/app/kbpl-projects/add-project-dialog/add-project-dialog.component';
import { ContractsDialogComponent } from 'src/app/kbpl-projects/contracts-dialog/contracts-dialog.component';
import { GridColumnsProjectsDialogComponent } from 'src/app/kbpl-projects/grid-columns-projects-dialog/grid-columns-projects-dialog.component';
import { MainProjectNotesComponent } from 'src/app/kbpl-projects/intex-projectdashboard/project-procurement/project-materialissue/project-notes/main-project-notes/main-project-notes.component';
import { AddNotesContractorsComponent } from 'src/app/kbpl-projects/projects-gridview/add-notes-contractors/add-notes-contractors.component';
import { ShowIssueComponent } from 'src/app/kbpl-projects/projects-gridview/show-issue/show-issue.component';
import { ProjectsHandoversComponent } from 'src/app/kbpl-projects/projects-handovers/projects-handovers.component';
import { ProjectsReportsComponent } from 'src/app/kbpl-projects/projects-reports/projects-reports.component';
import { UploadDocComponent } from 'src/app/shared/upload-doc/upload-doc.component';
import { AddVendorDialogSetupComponent } from './add-vendor-dialog-setup/add-vendor-dialog-setup.component';
import { AddvendordocsComponent } from './addvendordocs/addvendordocs.component';
import { PurchaseOrderDetailsPopupComponent } from './purchase-order-details-popup/purchase-order-details-popup.component';
import { WorkOrderDetailsPopupComponent } from './work-order-details-popup/work-order-details-popup.component';

@Component({
  selector: 'app-vendors-setup',
  templateUrl: './vendors-setup.component.html',
  styleUrls: ['./vendors-setup.component.scss']
})
export class VendorsSetupComponent implements OnInit {

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  constructor(public dialog: MatDialog,private titleService: Title) { }
  innerscreenname: string = "Overview"
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle("Om Sai Intex | Projects");

  }
  status = "";
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;

  // values = [
  //   {gst:"27AASCU9603R1ZN",sow:"Add",sopo:"2022324/1",Id:"27AASCU9603R1ZN",BG:"Add",BOCW:"Add",handover:"3/5",reports:"11",contracts:"5",projectmanager:"Raj", stageColour: '#00ff0040',"Status": 1,projectname:"Raheja",projectcode:"EAI",contractor:"GV Contracors",contact:"Anup",email:"anup@eai.com",phone:"9978515470",address:"Sector 42",startDate:"02-09-2020",targetDate:"02-09-2020",budget:"$7,000",state:"Haryana",city:"Faridabad",contratcs:"8",date:"15-Dec-2019",status:"Initial"},
  //   {gst:"57AABDS5603R1ZN",sow:"View",sopo:"2342324/2",Id:"27AASCU34403R1ZN",BG:"View",BOCW:"View",handover:"3/5",reports:"11",contracts:"5",projectmanager:"Teja", stageColour: '#C0C0C0',"Status": 2,projectname:"Dr.Reddy's",projectcode:"VSF",contractor:"HBVC Systems",contact:"Angad",email:"angad@vsf.com",phone:"9976829180",address:"Vijay Nagar",startDate:"02-09-2020",targetDate:"02-09-2020",budget:"$7,000",state:"Karnataka",city:"Bangalore",contratcs:"15",date:"19-Nov-2019",status:"On Hold"},
  //   {gst:"47AABCU9603R1ZN",sow:"Add",sopo:"252364/3",Id:"27AAS453303R1ZN",BG:"Add",BOCW:"Add",handover:"3/5",reports:"11",contracts:"5",projectmanager:"Krishna", stageColour: '#87CEFA',"Status": 3,projectname:"Reva Group",projectcode:"RVG",contractor:"ABC Contractors",contact:"Arnab",email:"arnab@rvg.com",phone:"7760002206",address:"Bandra",startDate:"02-09-2020",targetDate:"02-09-2020",budget:"$7,000",state:"Maharastra",city:"Mumbai",contratcs:"12",date:"04-Nov-2019",status:"Completed"},
  //   {gst:"67ASBCS9603R1ZN",sow:"View",sopo:"2022124/1",Id:"27A456339603R1ZN",BG:"View",BOCW:"View",handover:"3/5",reports:"11",contracts:"5",projectmanager:"Sai", stageColour: '#FFA50069',"Status": 4,projectname:"Dr.Reddy's",projectcode:"VSF",contractor:"HBVC Systems",contact:"Angad",email:"angad@vsf.com",phone:"9976829180",address:"Vijay Nagar",startDate:"02-09-2020",targetDate:"02-09-2020",budget:"$7,000",state:"Karnataka",city:"Hubballi",contratcs:"15",date:"19-Nov-2019",status:"On Hold"},
  //   {gst:"87AASCU9603R1ZN",sow:"Add",sopo:"2022314/5",Id:"27AASCU5343503R1ZN",BG:"Add",BOCW:"Add",handover:"3/5",reports:"11",contracts:"5",projectmanager:"Neeraja", stageColour: '#C0C0C0',"Status": 2,projectname:"Reva Group",projectcode:"RVG",contractor:"ABC Contractors",contact:"Arnab",email:"arnab@rvg.com",phone:"7760002206",address:"Bandra",startDate:"02-09-2020",targetDate:"02-09-2020",budget:"$7,000",state:"Maharastra",city:"Pune",contratcs:"12",date:"04-Nov-2019",status:"Completed"}



  // ]

  values = [
    {docs:"3",orgstatus:"Good",qhs:"3/6",reports:"12",ProjectArea:"4000",VendorName:"Sandeep Kumar",GSTNumber:"27AASCU9603R1ZN",ProjectName:"Dr.Reddys",POReference:"27AASCU9603R1ZN",POReceivedDate:"12/11/2021",POLOIDate:"13/11/2021",POValue:"???2,50,00,000",InsuranceDetails:"DDAASCU9603R1ZN",StartDate:"13/11/2021",TargetDate:"14/11/2021",ScopeofWork:"Supply of Milliken carpet and LVT",PMCName:"Unispace Architects",ArchitectName:"Unispace Architects",ProjectAddress:"Ground floor,  Luxor - South tower, Doddanekkundi,",ProjectCity:"Hyderabad",ProjectState:"Telangana",ProjectPIN:"500072",BillingAddress:"-",BillingCity:"Hyderabad",BillingState:"Telangana",BillingPIN:"50072",BillingNotes:"-",ShippingAddress:"Ground floor, Bagmane Luxor - South tower, Doddanekkundi,",ShippingCity:"Hyderabad",ShippingState:"Telangana",ShippingPIN:"500086",CostConsultantName:"NA",CostConsultantEmail:"NA",CostConsultantLandline:"040-45355",CostConsultantMobile:"9989764532",ClientName:"Mr. Sandeep ",VendorEmail:"sandeep@exoticinnovations.in",ClientLandline:"91 080-41206629",ClientMobile:"9900086643",ProjectDirector:"Mr. Venkatesh",ProjectManager:"Mr. Lance/Mr. Dinesh.K",VendorCode:"QW5FA10012",SOW:"Add",BG:"View",BOCW:"Add"},
    {docs:"1",orgstatus:"Strong",qhs:"4/6",reports:"4",ProjectArea:"2000",VendorName:"Suresh Reddy",GSTNumber:"57AABDS5603R1ZN",ProjectName:"Raheja",POReference:"37A456339603R1ZN",POReceivedDate:"13/11/2021",POLOIDate:"14/11/2021",POValue:"???1,40,00,000",InsuranceDetails:"44AASCU9603R1ZN",StartDate:"14/11/2021",TargetDate:"15/11/2021",ScopeofWork:"Supply of Wood carpet and PVT",PMCName:"Unispace Architects",ArchitectName:"Unispace Architects",ProjectAddress:"First floor, Bagmane Luxor -  tower, Doddanekkundi,",ProjectCity:"Warangal",ProjectState:"AP",ProjectPIN:"500072",BillingAddress:"-",BillingCity:"Hyderabad",BillingState:"Telangana",BillingPIN:"50072",BillingNotes:"-",ShippingAddress:"Ground floor, Bagmane Luxor - South tower, Doddanekkundi,",ShippingCity:"Hyderabad",ShippingState:"Telangana",ShippingPIN:"500086",CostConsultantName:"NA",CostConsultantEmail:"NA",CostConsultantLandline:"040-45355",CostConsultantMobile:"9989764532",ClientName:"Mr. Sandeep ",VendorEmail:"sandeep@exoticinnovations.in",ClientLandline:"91 080-41206629",ClientMobile:"9900086643",ProjectDirector:"Mr. Venkatesh",ProjectManager:"Mr. Lance/Mr. Dinesh.K",VendorCode:"K095KA10012",SOW:"View",BG:"View",BOCW:"Add"},
    {docs:"1",orgstatus:"Medium",qhs:"3/6",reports:"1",ProjectArea:"5000",VendorName:"Sandeep ",GSTNumber:"47AABCU9603R1ZN",ProjectName:"TATA",POReference:"47A456339603R1ZN",POReceivedDate:"14/11/2021",POLOIDate:"15/11/2021",POValue:"???1,50,00,000",InsuranceDetails:"27AASCU9603R1ZN",StartDate:"16/11/2021",TargetDate:"17/11/2021",ScopeofWork:"Supply of Milliken carpet and LVT",PMCName:"Unispace Architects",ArchitectName:"Unispace Architects",ProjectAddress:"Ground floor,  Luxor - South tower, ,",ProjectCity:"Hyderabad",ProjectState:"Telangana",ProjectPIN:"500072",BillingAddress:"-",BillingCity:"Hyderabad",BillingState:"Telangana",BillingPIN:"50072",BillingNotes:"-",ShippingAddress:"Ground floor, Bagmane Luxor - South tower, Doddanekkundi,",ShippingCity:"Hyderabad",ShippingState:"Telangana",ShippingPIN:"500086",CostConsultantName:"NA",CostConsultantEmail:"NA",CostConsultantLandline:"040-45355",CostConsultantMobile:"9989764532",ClientName:"Mr. Sandeep ",VendorEmail:"sandeep@exoticinnovations.in",ClientLandline:"91 080-41206629",ClientMobile:"9900086643",ProjectDirector:"Mr. Venkatesh",ProjectManager:"Mr. Lance/Mr. Dinesh.K",VendorCode:"L705KA10012",SOW:"View",BG:"View",BOCW:"Add"},
    {docs:"3",orgstatus:"Good",qhs:"3/6",reports:"11",ProjectArea:"6000",VendorName:"Suresh",GSTNumber:"87AASCU9603R1ZN",ProjectName:"Amul",POReference:"57A456339603R1ZN",POReceivedDate:"12/01/2021",POLOIDate:"12/11/2021",POValue:"???2,50,00,000",InsuranceDetails:"27AASCU9603R1ZN",StartDate:"17/11/2021",TargetDate:"18/11/2021",ScopeofWork:"Supply of Milliken carpet and LVT",PMCName:"Unispace Architects",ArchitectName:"Unispace Architects",ProjectAddress:"First floor, Bagmane Luxor - South tower, ,",ProjectCity:"Hyderabad",ProjectState:"AP",ProjectPIN:"500072",BillingAddress:"-",BillingCity:"Hyderabad",BillingState:"Telangana",BillingPIN:"50072",BillingNotes:"-",ShippingAddress:"Ground floor, Bagmane Luxor - South tower, Doddanekkundi,",ShippingCity:"Hyderabad",ShippingState:"Telangana",ShippingPIN:"500086",CostConsultantName:"NA",CostConsultantEmail:"NA",CostConsultantLandline:"040-45355",CostConsultantMobile:"9989764532",ClientName:"Mr. Sandeep ",VendorEmail:"sandeep@exoticinnovations.in",ClientLandline:"91 080-41206629",ClientMobile:"9900086643",ProjectDirector:"Mr. Venkatesh",ProjectManager:"Mr. Lance/Mr. Dinesh.K",VendorCode:"L#05KA10012",SOW:"Add",BG:"Add",BOCW:"View"},
    {docs:"2",orgstatus:"Strong",qhs:"2/6",reports:"11",ProjectArea:"7000",VendorName:"Rajesh ",GSTNumber:"67ASBCS9603R1ZN",ProjectName:"Relience",POReference:"77A456339603R1ZN",POReceivedDate:"11/11/2021",POLOIDate:"13/11/2021",POValue:"???1,70,00,000",InsuranceDetails:"27ASERRU9603R1ZN",StartDate:"13/11/2021",TargetDate:"14/11/2021",ScopeofWork:"upply of Wood carpet and PVT",PMCName:"Unispace Architects",ArchitectName:"Unispace Architects",ProjectAddress:"Ground floor,  Luxor - South tower, Doddanekkundi,",ProjectCity:"Warangal",ProjectState:"Telangana",ProjectPIN:"500072",BillingAddress:"-",BillingCity:"Hyderabad",BillingState:"Telangana",BillingPIN:"50072",BillingNotes:"-",ShippingAddress:"Ground floor, Bagmane Luxor - South tower, Doddanekkundi,",ShippingCity:"Hyderabad",ShippingState:"Telangana",ShippingPIN:"500086",CostConsultantName:"NA",CostConsultantEmail:"NA",CostConsultantLandline:"040-45355",CostConsultantMobile:"9989764532",ClientName:"Mr. Sandeep ",VendorEmail:"sandeep@exoticinnovations.in",ClientLandline:"91 080-41206629",ClientMobile:"9900086643",ProjectDirector:"Mr. Venkatesh",ProjectManager:"Mr. Lance/Mr. Dinesh.K",VendorCode:"ED05KA10012",SOW:"Add",BG:"View",BOCW:"Add"},
    {docs:"3",orgstatus:"Good",qhs:"3/6",reports:"13",ProjectArea:"4000",VendorName:"Sandeep ",GSTNumber:"27AASCU9603R1ZN",ProjectName:"Dr.Reddys",POReference:"27AASCU9603R1ZN",POReceivedDate:"12/11/2021",POLOIDate:"13/11/2021",POValue:"???2,50,00,000",InsuranceDetails:"DDAASCU9603R1ZN",StartDate:"13/11/2021",TargetDate:"14/11/2021",ScopeofWork:"Supply of Milliken carpet and LVT",PMCName:"Unispace Architects",ArchitectName:"Unispace Architects",ProjectAddress:"Ground floor, Bagmane  - South tower, ,",ProjectCity:"Hyderabad",ProjectState:"Telangana",ProjectPIN:"500072",BillingAddress:"-",BillingCity:"Hyderabad",BillingState:"Telangana",BillingPIN:"50072",BillingNotes:"-",ShippingAddress:"Ground floor, Bagmane Luxor - South tower, Doddanekkundi,",ShippingCity:"Hyderabad",ShippingState:"Telangana",ShippingPIN:"500086",CostConsultantName:"NA",CostConsultantEmail:"NA",CostConsultantLandline:"040-45355",CostConsultantMobile:"9989764532",ClientName:"Mr. Sandeep ",VendorEmail:"sandeep@exoticinnovations.in",ClientLandline:"91 080-41206629",ClientMobile:"9900086643",ProjectDirector:"Mr. Venkatesh",ProjectManager:"Mr. Lance/Mr. Dinesh.K",VendorCode:"E405FA10012",SOW:"Add",BG:"View",BOCW:"Add"},
    {docs:"2",orgstatus:"Medium",qhs:"1/6",reports:"7",ProjectArea:"2000",VendorName:"Suresh",GSTNumber:"57AABDS5603R1ZN",ProjectName:"Raheja",POReference:"37A456339603R1ZN",POReceivedDate:"13/11/2021",POLOIDate:"14/11/2021",POValue:"???1,50,00,000",InsuranceDetails:"44AASCU9603R1ZN",StartDate:"14/11/2021",TargetDate:"15/11/2021",ScopeofWork:"upply of Wood carpet and PVT",PMCName:"Unispace Architects",ArchitectName:"Unispace Architects",ProjectAddress:"Ground floor,  Luxor - South tower, Doddanekkundi,",ProjectCity:"Warangal",ProjectState:"AP",ProjectPIN:"500072",BillingAddress:"-",BillingCity:"Hyderabad",BillingState:"Telangana",BillingPIN:"50072",BillingNotes:"-",ShippingAddress:"Ground floor, Bagmane Luxor - South tower, Doddanekkundi,",ShippingCity:"Hyderabad",ShippingState:"Telangana",ShippingPIN:"500086",CostConsultantName:"NA",CostConsultantEmail:"NA",CostConsultantLandline:"040-45355",CostConsultantMobile:"9989764532",ClientName:"Mr. Sandeep ",VendorEmail:"sandeep@exoticinnovations.in",ClientLandline:"91 080-41206629",ClientMobile:"9900086643",ProjectDirector:"Mr. Venkatesh",ProjectManager:"Mr. Lance/Mr. Dinesh.K",VendorCode:"FD05KA10012",SOW:"View",BG:"View",BOCW:"Add"},
  
  ]
 
  openGridColumnsDialog(){
    this.dialog.open(GridColumnsProjectsDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }
  
  uploaddoc()
  {
    let dialogRef = this.dialog.open(UploadDocComponent, {
      data: null,
      height:'auto',
      width:'600px'
    });
    dialogRef.afterClosed().subscribe(data => {
     // this.getAllUsers();
    });
  }
  daily(item)
{
this.innerscreenname = item;
}
  openAddProjectDialog(id: any){
    this.dialog.open(AddVendorDialogSetupComponent,{
      data:id,
      width:"70%",
      height:"auto"
    })
  }
 
  showmoredetails(items)
  {
    this.innerscreenname = "Overview";
    if (items.VendorCode.toString() != this.status)
    {
      this.status = items.VendorCode;  
    }
    else{
      this.status = '';
    }

   
 
  }

  docs()
  {
    this.dialog.open(ContractsDialogComponent,{
      width:"500px",
      height:"auto"
    })
  }


  AddProjectNotes() {
    const dialogRef = this.dialog.open(AddNotesContractorsComponent, {
      
      autoFocus: false,
      height: 'auto',
      width: '600px',
      
    });
  }

  openContractsDialog(){
    this.dialog.open(ContractsDialogComponent,{
      width:"500px",
      height:"auto"
    })
  }
  statusOptions = [
    {value:1, name: 'Initiated', colorCode: '#00ff0040'},
    {value:2, name: 'Awarded', colorCode: '#C0C0C0'},
    {value:3, name: 'In Process', colorCode: '#87CEFA'},
    {value:4, name: 'On Hold', colorCode: '#FFA50069'},
  ]

   opendocs() {
    let dialogRef = this.dialog.open(AddvendordocsComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  opennewdocs(a,b) {
    let dialogRef = this.dialog.open(AddVendorDialogSetupComponent, {
        data: {Data:a,Data2:b},
        width:"70%",
        height:"auto"
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
    
  changeProgress( value: number,i: string | number) {


    if (!value || value == 0) {
      this.values[i]['focus'] = 25;
    } else if (value == 25) {
      this.values[i]['focus'] = 50;
    } else if (value == 50) {
      this.values[i]['focus'] = 75;
    } else if (value == 75) {
      this.values[i]['focus'] = 100;
    } else {
      this.values[i]['focus'] = 0;
    }
  }
  notes() {
    this.dialog.open(WorkOrderDetailsPopupComponent, {
     height:'auto',
      width:'700px'
    })
  }
}
