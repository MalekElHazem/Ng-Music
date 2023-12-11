import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Songs } from '../model/songs';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  songs = new Array<Songs>();
  constructor(public songService:SharedService,private toastr: ToastrService ) {
    songService.getSongs().subscribe(response => this.songs = response )

    
  }
  

  deleteSong(id: number) {
    this.songService.deleteSong(id).subscribe(() => {
      this.songs = this.songs.filter(song => song.id !== id);
    });
  }
  
  updateSong(song: Songs) {
    this.songs = this.songs.map(s => {
      if (s.id === song.id) {
        return song;
      } else {
        return s;
      }
    });
  }



  editSong(id: number){
    this.songService.updateSong(this.songs[id]).subscribe((response: any) => {
      console.log(response);
    });
  }
/*
  generatePDF(id: number){
    let docDefinition = {
      content: [
        'this is PDF',
        this.songs
      ]
    };

    pdfMake.createPdf(docDefinition).open();
  }

*/
  
public openPDF(): void {
  let DATA: any = document.getElementById('htmlData');
  html2canvas(DATA).then((canvas) => {
    let fileWidth = 208;
    let fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');
    let PDF = new jsPDF('p', 'mm', 'a4');
    let position = 0;
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    PDF.save('angular-demo.pdf');
  });
}
/*
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
*/

  
}
