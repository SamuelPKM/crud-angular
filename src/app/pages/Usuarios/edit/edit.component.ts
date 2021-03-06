import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  value: { [k: string]: any; } | undefined;
  
  constructor(private router: Router) { 
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras.state;
  }

  ngOnInit(): void {
  }

}
