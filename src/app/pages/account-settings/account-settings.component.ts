import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrl: './account-settings.component.css'
})
export class AccountSettingsComponent implements OnInit {

  constructor(private settingService: SettingsService){}

  ngOnInit(): void {
    this.settingService.checkTheme()

  }

  changeTheme(theme: string){
    this.settingService.changeTheme(theme)
  }
}
