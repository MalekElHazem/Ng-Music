import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  
  song: any = {
    name : '',
    artist : '',
    album : '',
    year : '',
    image : ''
  }  

  constructor(public _shared: SharedService, private toastr: ToastrService){ }
  addSong() {
    this._shared.addSong(this.song).subscribe(() => {
      console.log('Song added successfully.');
      this.song = {
        name : '',
        artist : '',
        album : '',
        year : '',
        image : ''
      }  
      // Optionally, you can navigate to a different route or perform other actions after adding the song
    });
  }

  showSweetAlert() {
    Swal.fire('Song added!');
  }

/*
  addSong(){
    this._shared.addSong(this.song).subscribe((response: any) => {
      console.log(response);
    });
  }
*/





}
