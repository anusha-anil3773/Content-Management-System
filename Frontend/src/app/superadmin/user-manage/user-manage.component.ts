import { Component, OnInit } from '@angular/core';
import { SuperadminService } from 'src/app/shared/superadmin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {

  constructor(private service:SuperadminService) { }
  users=[{email:'',
  isAdmin:'',
  }]
  ngOnInit(): void {
    this.service.viewAllUsers().subscribe((data)=>{
      // console.log("from backend",data)
      let x = JSON.parse(JSON.stringify(data));
      this.users=x
      console.log("users",this.users)
    })
  }
  changePrivilage(data:any){
    console.log("data",data);
    Swal.fire({
      toast:true,
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.editPrivilage(data).subscribe((data)=>{
          console.log("from back",data);
          let x = JSON.stringify(data)
          if(x.match(/updated/)){
            console.log(true)
            Swal.fire({
              toast:true,
              text:'the account privilage changed.',
              icon:'success'
          })
          }
          this.ngOnInit();
        })
        
      }
    })
  }

}