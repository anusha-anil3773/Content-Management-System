import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
import { MatAccordion } from '@angular/material/expansion';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-creation-admin',
  templateUrl: './category-creation-admin.component.html',
  styleUrls: ['./category-creation-admin.component.css']
})
export class CategoryCreationAdminComponent implements OnInit {

  constructor(private service: AdminService, private router:Router) {}
  category = {
    categoryTitle: '',
    description:''
  };
  ngOnInit(): void {}
  createCategory(){
    console.log(this.category)
    this.service.createCategory(this.category).subscribe((data)=>{
      console.log("data from backend is",data)
      let x = JSON.stringify(data);
      if(x.match(/user/)){
        Swal.fire({
          toast: true,
          color: 'green',
          // background:'whit',
          icon: 'success',
          title: 'new category created',
          position: 'center-right',
          showConfirmButton: false,
          timer: 2000,
        }).then(()=>{
          this.router.navigate(['admin/dashboard/viewCategory'])
        })
      }
    })
  }
}
