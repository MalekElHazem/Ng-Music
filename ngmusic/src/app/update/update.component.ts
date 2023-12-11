import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  song: any;
  id:any;

  constructor( private act: ActivatedRoute, private _shared:SharedService , private router: Router) { }

  updateSong(){
    this._shared.updateSong(this.song).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['/list']);
    });
  }

  ngOnInit(): void {
    this.act.params.subscribe((data: any) => {
      this.id = data.id;
      console.log(this.id);
      this._shared.getSongById(this.id)
      .subscribe((response: any) => {
        this.song = response;
        console.log(this.song);
      });
    });
  }
}
