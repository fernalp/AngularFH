import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifsList: Gif[] = [];

  private _tagHistory: string[] = [];
  private apiKey: string = "iR3dHhqcgMYnpFvNNcNutP08CqKv9rSZ";
  private apiUrl: string = "https://api.giphy.com/v1/gifs";

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagHistory.includes(tag)) {
      // const index = this._tagHistory.indexOf(tag);
      // this._tagHistory.splice(index, 1);

      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem("history", JSON.stringify(this._tagHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem("history")) {
      return;
    }
    const temporal = localStorage.getItem('history');
    this._tagHistory = JSON.parse(temporal!);

    if (this._tagHistory.length === 0) return;
    this.searchTag(this._tagHistory[0]);
  }

  searchTag(tag: string) {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set("api_key", this.apiKey)
      .set("limit", "10")
      .set("q", tag)

    const url = `${this.apiUrl}/search`;
    this.http.get<SearchResponse>(url, { params })
      .subscribe(resp => {
        this.gifsList = resp.data;
      });
  }

  searchTagPromise(tag: string) {
    if (tag.length === 0) return;
    this.organizeHistory(tag);
    const url = `https://api.giphy.com/v1/gifs/search?api_key=iR3dHhqcgMYnpFvNNcNutP08CqKv9rSZ&q=${tag}&limit=10`;
    fetch(url)
      .then(resp => resp.json())
      .then(data => console.log(data));
  }

  async searchTagAsync(tag: string) {
    if (tag.length === 0) return;
    this.organizeHistory(tag);
    const url = `https://api.giphy.com/v1/gifs/search?api_key=iR3dHhqcgMYnpFvNNcNutP08CqKv9rSZ&q=${tag}&limit=10`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
  }
}

