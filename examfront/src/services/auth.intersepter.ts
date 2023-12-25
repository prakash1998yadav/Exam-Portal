import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";



@Injectable()
export class authIntercepter implements HttpInterceptor
{
    constructor(private login : LoginService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        // Add the jwt token (local storage) request 
        const token=this.login.getToken();
        let authReq=req;
        if(token != null)
        {
            authReq=authReq.clone({
                setHeaders:{Authorization:`Bearer ${token}`},
            })
        }
        return next.handle(authReq);


    }
    
}
export const authIntercepterProvider=[
    {
     provide: HTTP_INTERCEPTORS,
     useClass : authIntercepter,
     multi : true
    },

];
