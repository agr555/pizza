"use strict";(self.webpackChunkpizza=self.webpackChunkpizza||[]).push([[755],{1755:(Q,d,c)=>{c.r(d),c.d(d,{ProductsModule:()=>q});var s=c(6895),i=c(3060),f=c(8505),t=c(4650),a=c(773),C=c(529);let p=(()=>{class e{constructor(){this.title=""}ngAfterViewInit(){}toUpper(){return this.title.toUpperCase()}toLower(){return this.title.toLowerCase()}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["custom-title"]],inputs:{title:"title"},decls:2,vars:1,consts:[[1,"product-title"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t._uU(1),t.qZA()),2&o&&(t.xp6(1),t.Oqu(r.title))},styles:[".product-title[_ngcontent-%COMP%]{font-size:18px;font-family:MullerBold,sans-serif;color:#382400}"]}),e})(),l=(()=>{class e{constructor(){this.count=0}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})(),h=(()=>{class e{constructor(o,r){this.templateRef=o,this.viewContainer=r,this.isChicken=""}ngOnInit(){this.isChicken.toLowerCase().includes("\u0441\u044b\u0440")?this.viewContainer.createEmbeddedView(this.templateRef):this.viewContainer.clear()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(t.Rgc),t.Y36(t.s_b))},e.\u0275dir=t.lG2({type:e,selectors:[["","isChicken",""]],inputs:{isChicken:"isChicken"}}),e})(),m=(()=>{class e{transform(o,r){let u=o;return r.forEach(I=>{u=u.replace(new RegExp("[\u0410-\u042f\u0430-\u044f]*"+I.toLowerCase()+"[\u0430-\u044f]*","gi"),J=>J.toUpperCase())}),u}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275pipe=t.Yjl({name:"wordUpper",type:e,pure:!0}),e})();const x=["elem"];function v(e,n){if(1&e&&(t.TgZ(0,"div",9),t._UZ(1,"img",10),t.qZA()),2&e){const o=t.oxw(2);t.xp6(1),t.s9C("src",o.product.image,t.LSH)}}function P(e,n){1&e&&(t.TgZ(0,"div",9),t._UZ(1,"img",11),t.qZA())}const _=function(){return["\u0441\u044b\u0440","\u0442\u043e\u043c\u0430\u0442","\u0441\u043e\u0441\u0438\u0441","\u0431\u0435\u043a\u043e\u043d"]},Z=function(e){return{product:e}},b=function(e){return["/products",e]};function y(e,n){if(1&e&&(t.TgZ(0,"div",1),t.YNc(1,v,2,1,"ng-template",2),t.YNc(2,P,2,0,"ng-template",2),t._UZ(3,"custom-title",3),t.ALo(4,"uppercase"),t.TgZ(5,"div",4),t._uU(6),t.ALo(7,"wordUpper"),t.qZA(),t.TgZ(8,"div",5,6)(10,"button",7),t._uU(11,"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),t.qZA(),t.TgZ(12,"button",8),t._uU(13,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),t.qZA()()()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.product.image),t.xp6(1),t.Q6J("ngIf",!o.product.image),t.xp6(1),t.Q6J("title",t.lcZ(4,6,o.product.title)),t.xp6(3),t.Oqu(t.xi3(7,8,o.product.description,t.DdM(11,_))),t.xp6(4),t.Q6J("queryParams",t.VKq(12,Z,o.product.title)),t.xp6(2),t.Q6J("routerLink",t.VKq(14,b,o.product.id))}}let T=(()=>{class e{constructor(o){this.cartProductService=o,this.addToCardEvent=new t.vpe,this.product={id:0,image:"",title:"",description:"",datetime:""}}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(l))},e.\u0275cmp=t.Xpm({type:e,selectors:[["product-card"]],viewQuery:function(o,r){if(1&o&&(t.Gf(p,5),t.Gf(x,5)),2&o){let u;t.iGM(u=t.CRH())&&(r.titleComponent=u.first),t.iGM(u=t.CRH())&&(r.elem=u.first)}},inputs:{product:"product"},outputs:{addToCardEvent:"addToCardEvent"},features:[t._Bn([l])],decls:1,vars:1,consts:[["class","product",4,"isChicken"],[1,"product"],[3,"ngIf"],[3,"title"],[1,"product-text"],[1,"product-action"],["elem",""],["routerLink","/order",1,"btn","btn-add-to-cart",3,"queryParams"],[1,"btn","btn-white",3,"routerLink"],[1,"product-image"],[3,"src"],["src","assets/images/pizzzzza.png"]],template:function(o,r){1&o&&t.YNc(0,y,14,16,"div",0),2&o&&t.Q6J("isChicken",r.product.description)},dependencies:[s.O5,i.rH,p,h,s.gd,m],styles:['@charset "UTF-8";.products[_ngcontent-%COMP%]{padding:80px 0 120px}.product[_ngcontent-%COMP%]{width:282px;background-color:#fff;box-shadow:0 3px 13.8px 1.2px #98989833;text-align:center;padding:15px 20px;box-sizing:border-box;margin-top:24px}.product-image[_ngcontent-%COMP%]{height:180px;display:flex;align-items:center;justify-content:center}.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.product-text[_ngcontent-%COMP%]{font-size:14px;color:#181a1a;line-height:1.286;height:49px;margin:14px 0 15px}.product-action[_ngcontent-%COMP%]{display:flex;flex-direction:column}.product-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{height:50px;width:242px;padding:17px}.product-action[_ngcontent-%COMP%]   .btn.btn-white[_ngcontent-%COMP%]{margin-top:10px}@media screen and (max-width: 1229px){.product[_ngcontent-%COMP%]{margin:12px}}']}),e})();function M(e,n){1&e&&t._UZ(0,"product-card",6),2&e&&t.Q6J("product",n.$implicit)}function O(e,n){1&e&&(t.TgZ(0,"div",7),t._UZ(1,"div",8),t.qZA())}function A(e,n){if(1&e&&(t.TgZ(0,"div",10),t._UZ(1,"img",11),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.s9C("src",o.product.image,t.LSH)}}function U(e,n){1&e&&(t.TgZ(0,"div",10),t._UZ(1,"img",12),t.qZA())}const z=function(){return["\u0441\u044b\u0440","\u0442\u043e\u043c\u0430\u0442","\u0441\u043e\u0441\u0438\u0441","\u0431\u0435\u043a\u043e\u043d"]},E=function(e){return{product:e}},F=[{path:"",component:(()=>{class e{constructor(o,r,u){this.productService=o,this.http=r,this.router=u,this.products=[],this.loading=!1,this.subscription=null}ngOnInit(){this.loading=!0,this.subscription=this.productService.getProducts().pipe((0,f.b)(()=>{this.loading=!1})).subscribe({next:o=>{console.log(o),this.products=o},error:o=>{console.log(o),this.router.navigate(["/"])}})}ngOnDestroy(){this.subscription?.unsubscribe(),console.log("unsubscript: products")}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(a.M),t.Y36(C.eN),t.Y36(i.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-products"]],decls:7,vars:2,consts:[["id","products",1,"products"],[1,"container"],["id","products-title",1,"products-title"],[1,"products-items"],[3,"product",4,"ngFor","ngForOf"],["class","loader-bg",4,"ngIf"],[3,"product"],[1,"loader-bg"],[1,"loader"]],template:function(o,r){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h2",2),t._uU(3," \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043b\u044e\u0431\u0438\u043c\u0443\u044e \u043f\u0438\u0446\u0446\u0443 "),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,M,1,1,"product-card",4),t.qZA(),t.YNc(6,O,2,0,"div",5),t.qZA()()),2&o&&(t.xp6(5),t.Q6J("ngForOf",r.products),t.xp6(1),t.Q6J("ngIf",r.loading))},dependencies:[s.sg,s.O5,T]}),e})()},{path:":id",component:(()=>{class e{constructor(o,r,u){this.activatedRoute=o,this.productService=r,this.router=u,this.subscription=null,this.product={id:0,image:"",title:"",description:"",datetime:""}}ngOnInit(){this.subscription=this.activatedRoute.params.subscribe(o=>{o.id&&this.productService.getProduct(+o.id).subscribe({next:r=>{this.product=r},error:r=>{this.router.navigate(["/"])}})})}ngOnDestroy(){this.subscription?.unsubscribe(),console.log("unsubscript: product")}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(i.gz),t.Y36(a.M),t.Y36(i.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product"]],decls:16,vars:13,consts:[[1,"products"],[1,"container"],["id","products-title",1,"products-title"],[1,"product-item"],[3,"ngIf"],[3,"title"],[1,"product-text"],[1,"product-action"],["elem",""],["routerLink","/order",1,"btn","btn-add-to-cart",3,"queryParams"],[1,"product-image"],[3,"src"],["src","assets/images/pizzzzza.png"]],template:function(o,r){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h2",2),t._uU(3,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0438\u0446\u0446\u044b"),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,A,2,1,"ng-template",4),t.YNc(6,U,2,0,"ng-template",4),t._UZ(7,"custom-title",5),t.ALo(8,"uppercase"),t.TgZ(9,"div",6),t._uU(10),t.ALo(11,"wordUpper"),t.qZA(),t.TgZ(12,"div",7,8)(14,"button",9),t._uU(15,"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),t.qZA()()()()()),2&o&&(t.xp6(5),t.Q6J("ngIf",r.product.image),t.xp6(1),t.Q6J("ngIf",!r.product.image),t.xp6(1),t.Q6J("title",t.lcZ(8,5,r.product.title)),t.xp6(3),t.Oqu(t.xi3(11,7,r.product.description,t.DdM(10,z))),t.xp6(4),t.Q6J("queryParams",t.VKq(11,E,r.product.title)))},dependencies:[s.O5,p,i.rH,s.gd,m],styles:[".product-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.product-item[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:block;margin-top:10px}"]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.Bz.forChild(F),i.Bz]}),e})();var Y=c(4466);let q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.ez,Y.m,i.Bz,g,g]}),e})()}}]);