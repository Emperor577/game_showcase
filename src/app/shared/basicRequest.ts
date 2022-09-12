import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseDataModel} from "../models/response-data.model";

export class BasicRequest<T> {
  private readonly _rootUrl: string;
  private readonly _requestUrl: string;
  private _key = environment.apiKey;
  get requestUrl(): string {
    return this._rootUrl + '/' + this._requestUrl + '?key=' + this._key;
  }
  constructor(private http: HttpClient, requestUrl: string) {
    this._rootUrl = environment.baseUrl;
    this._requestUrl = requestUrl;
  }

  getAll(params?: string): Observable<ResponseDataModel<T>> {
    return this.http.get<ResponseDataModel<T>>(params ? this.requestUrl + params : this.requestUrl);
  }
}
