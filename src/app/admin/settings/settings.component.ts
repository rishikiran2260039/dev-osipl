import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AlertService } from "../../shared/services/alert.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
  providers: [AlertService],
})
export class SettingsComponent implements OnInit {
  public popoverStatusTitle: string = "Confirm Save Change";
  public popoverStatusMessage: string =
    "Are you sure you want to save changes.?";
  public cancelClicked: boolean = false;

  constructor(
    private alertService: AlertService,
    private titleService: Title
  ) {}
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle("Om Sai Intex | Admin | Settings");
  }

  tableList: Object[] = [
    // {
    //   intSettingsId: 1,
    //   name: "Prospect Follow-up Days",
    //   description: "Prospect Follow-up Days",
    //   old_value: "10",
    // },
    // {
    //   intSettingsId: 2,
    //   name: "Project Follow-up Days",
    //   description: "Opportunity Follow-up Days",
    //   old_value: "10",
    // },
    {
      intSettingsId: 3,
      name: "Grid Length",
      description: "Default Grid Length",
      old_value: "10",
    },
    {
      intSettingsId: 4,
      name: "Notification Email",
      description: "Default Admin Notification Email	",
      old_value: "sg@optionmatrix.com",
    },
    {
      intSettingsId: 5,
      name: "Time Zone",
      description: "Default Time Zone",
      old_value: "IST",
    },
    {
      intSettingsId: 6,
      name: "High Value Threshold",
      description: "Default High Value Threshold (Unit Price in Rs.)",
      old_value: "50000",
    },
    {
      intSettingsId: 7,
      name: "Medium Value Threshold",
      description: "Default Medium Value Threshold (Unit Price in Rs.)",
      old_value: "20000",
    },
    // {
    //   intSettingsId: 8,
    //   name: "Low Value Cutoff",
    //   description: "Default Low Value Cutoff",
    //   old_value: "10",
    // },
    {
      intSettingsId: 9,
      name: "Slow Moving Quantity",
      description: "Slow Moving Level for Monthly Consumption Quanatity",
      old_value: "10",
    },
    {
      intSettingsId: 10,
      name: "Fast Moving Quantity",
      description: "Fast Moving Level for Monthly Consumption Quanatity",
      old_value: "1000",
    },
    {
      intSettingsId: 11,
      name: "Bad Dept Threshold",
      description: "Bad Dept Threshold (Days)",
      old_value: "180",
    },
    {
      intSettingsId: 12,
      name: "Purchase Manager Email",
      description: "Default Purchase Manager Email",
      old_value: "purchase@omsaiintex.com",
    },
    {
      intSettingsId: 13,
      name: "Finance Manager Email",
      description: "Default Finance Manager Email",
      old_value: "finance@omsaiintex.com",
    },
    {
      intSettingsId: 14,
      name: "Admin Manager Email",
      description: "Default Admin Manager Email",
      old_value: "admin@omsaiintex.com",
    },
    {
      intSettingsId: 15,
      name: "System Administrator Email",
      description: "Default System Administrator Email",
      old_value: "it@omsaiintex.com",
    },
  ];
  // High Value Threshold
  // Medium Value Threshold
  // Low Value Cutoff
  
  
  // Slow Moving Quantity
  // Fast Moving Quantity
  // Age Threshold
  
  saveSettings() {
    this.alertService.createAlert("Successfully Saved.", 1);
  }
}
