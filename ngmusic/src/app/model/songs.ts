export class Songs {
    public id: number;
    public name: string;
    public artist: string;
    public album: string;
    public year: number;
    public image: string;
    constructor(id:number, name:string, artist:string, album:string, year:number, image:string) { this.id = id;
    this.name = name;
    this.artist = artist;
    this.album = album;
    this.year = year;
    this.image = image;
    }
}