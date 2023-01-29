import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AdminService } from 'src/app/shared/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent implements OnInit {

  constructor(private service : AdminService, private location: Location,private _router: Router) { }

  ngOnInit(): void {
  }
  //  goBack() {
  //   this.location.back();
  // }
  logout() {
    localStorage.removeItem('superadmin-token')
    this._router.navigate([''])
  }
  viewCategorys(){
    this.service.GetPostAndCategory().subscribe((data)=>{
      console.log("inside the ts file data from backend",data)
    })
  }

}
