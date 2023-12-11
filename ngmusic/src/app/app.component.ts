import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';
import { Songs } from './model/songs';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngmusic';
  songs = new Array<Songs>();
  constructor( songService:SharedService ,private toastr: ToastrService ) {
    songService.getSongs().subscribe(response => this.songs = response )
  }


  showSuccess() {
    this.toastr.success('Hello, this is a success toast!', 'Success');
  }

  showInfo() {
    this.toastr.info('Hello, this is an info toast!', 'Info');
  }

  showWarning() {
    this.toastr.warning('Hello, this is a warning toast!', 'Warning');
  }

  showError() {
    this.toastr.error('Hello, this is an error toast!', 'Error');
  }



  showSweetAlert() {
    Swal.fire('Hello, this is a SweetAlert!');
  }
}

