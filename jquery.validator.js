/*! nice Validator 0.8.0
 * (c) 2012-2014 Jony Zhang <zj86@live.cn>, MIT Licensed
 * http://niceue.com/validator/
 */
!function(e){"function"==typeof define&&(define.amd||define.cmd)?define([],function(){return e}):e(jQuery)}(function(e,t){"use strict";function i(t,n){function s(){r._init(r.$el[0],n)}var r=this;return r instanceof i?(r.$el=e(t),void(r.$el.length?i.loading?e(window).on("validatorready",s):s():Z(t)&&(K[t]=n))):new i(t,n)}function n(e,t){if(J(e)){var i,s=t?t===!0?this:t:n.prototype;for(i in e)g(i)&&(s[i]=r(e[i]))}}function s(e,t){if(J(e)){var i,n=t?t===!0?this:t:s.prototype;for(i in e)n[i]=e[i]}}function r(t){switch(e.type(t)){case"function":return t;case"array":return function(e){return t[0].test(z(e))||t[1]||!1};case"regexp":return function(e){return t.test(z(e))}}}function a(t){var i,n,s;if(t&&t.tagName){switch(t.tagName){case"INPUT":case"SELECT":case"TEXTAREA":case"BUTTON":case"FIELDSET":i=t.form||e(t).closest("."+b);break;case"FORM":i=t;break;default:i=e(t).closest("."+b)}for(n in K)if(e(i).is(n)){s=K[n];break}return e(i).data(v)||e(i)[v](s).data(v)}}function l(e,t){var i,n=t||e.currentTarget;n.form&&null===X(n.form,j)&&(i=a(n),i?(i._parse(n),i._focusin(e),t&&i._focusout(e,t)):X(n,O,null))}function o(e,t){var i=W(X(e,O+"-"+t));if(i)return i=new Function("return "+i)(),i?r(i):void 0}function u(e,t,i){var n=t.msg,s=t._r;return J(n)&&(n=n[s]),Z(n)||(n=X(e,C+"-"+s)||X(e,C)||(i?Z(i)?i:i[s]:"")),n}function d(e){var t;return e&&(t=I.exec(e)),t&&t[1]}function c(e){return"INPUT"===e.tagName&&"checkbox"===e.type||"radio"===e.type}function f(e){return Date.parse(e.replace(/\.|\-/g,"/"))}function g(e){return/^[\w\d]+$/.test(e)}function p(e){return"#"===e.charAt(0)?e.replace(/(:|\.|\[|\])/g,"\\$1"):'[name="'+e+'"]:input'}var m,h,v="validator",_="."+v,y=".rule",w=".field",k=".form",b="nice-"+v,M="msg-box",$="aria-required",x="aria-invalid",O="data-rule",C="data-msg",F="data-tip",V="data-ok",A="data-timely",T="data-target",R="data-must",j="novalidate",E=":verifiable",S=/(!?)\s?(\w+)(?:\[\s*(.*?\]?)\s*\]|\(\s*(.*?\)?)\s*\))?\s*(;|\||&)?/g,N=/(\w+)(?:\[\s*(.*?\]?)\s*\]|\(\s*(.*?\)?)\s*\))?/,D=/(?:([^:;\(\[]*):)?(.*)/,q=/[^\x00-\xff]/g,I=/^.*(top|right|bottom|left).*$/,B=/(?:(post|get):)?(.+)/i,L=/[<>'"]|(?:&#)(?:0*\d{2,3}|x[A-Z0-9]{2};)|%[A-Z0-9]{2}/gim,U=e.noop,H=e.proxy,W=e.trim,P=e.isFunction,Z=function(e){return"string"==typeof e},J=function(e){return e&&"[object Object]"===Object.prototype.toString.call(e)},Q=document.documentMode||+(navigator.userAgent.match(/MSIE (\d+)/)&&RegExp.$1),X=function(e,i,n){return n===t?e.getAttribute(i):void(null===n?e.removeAttribute(i):e.setAttribute(i,""+n))},z=function(t){return e(t).val()},G=window.console||{log:U,info:U},K={},Y={debug:0,timely:1,theme:"default",ignore:"",focusInvalid:!0,beforeSubmit:U,validClass:"n-valid",invalidClass:"n-invalid",msgWrapper:"span",msgMaker:function(e){var t;return t='<span class="msg-wrap n-'+e.type+'" role="alert">',t+=e.arrow+e.icon+'<span class="n-msg">'+e.msg+"</span>",t+="</span>"},msgArrow:"",msgIcon:'<span class="n-icon"></span>',msgClass:"",defaultMsg:"This field is not valid.",loadingMsg:"Validating..."},et={"default":{formClass:"n-default",msgClass:"n-right"}};e.fn[v]=function(t){var n=this,s=arguments;return n.is(":input")?n:(!n.is("form")&&(n=this.find("form")),!n.length&&(n=this),n.each(function(){var n=e(this).data(v);if(n)if(Z(t)){if("_"===t.charAt(0))return;n[t].apply(n,Array.prototype.slice.call(s,1))}else t&&(n._reset(!0),n._init(this,t));else new i(this,t)}),this)},e.fn.isValid=function(e,t){var i,n,s=a(this[0]),r=P(e);return s?(s.checkOnly=!!t,n=s.options,i=s._multiValidate(this.is(":input")?this:this.find(E),function(t){t||!n.focusInvalid||s.checkOnly||s.$el.find("["+x+"]:input:first").focus(),r&&e.call(null,t),s.checkOnly=!1}),r?this:i):!0},e.expr[":"].verifiable=function(e){var t=e.nodeName.toLowerCase();return("input"===t&&!{submit:1,button:1,reset:1,image:1}[e.type]||"select"===t||"textarea"===t)&&e.disabled===!1},e.expr[":"].filled=function(e){return!!W(z(e))},i.prototype={_init:function(t,i){var r,a,l,o=this;if(P(i)&&(i={valid:i}),i=i||{},l=X(t,"data-"+v+"-option"),l=l&&"{"===l.charAt(0)?new Function("return "+l)():{},a=et[i.theme||l.theme||Y.theme],r=o.options=e.extend({},Y,a,o.options,i,l),o.rules=new n(r.rules,!0),o.messages=new s(r.messages,!0),o.elements=o.elements||{},o.deferred={},o.errors={},o.fields={},o._initFields(r.fields),o.msgOpt={type:"error",pos:d(r.msgClass),wrapper:r.msgWrapper,cls:r.msgClass,style:r.msgStyle,arrow:r.msgArrow,icon:r.msgIcon,show:r.msgShow,hide:r.msgHide},Z(r.target)&&o.$el.find(r.target).addClass("msg-container"),o.isAjaxSubmit=!1,r.valid)o.isAjaxSubmit=!0;else{var u=(e._data||e.data)(t,"events");u&&u.valid&&e.map(u.valid,function(e){return~e.namespace.indexOf("form")?1:null}).length&&(o.isAjaxSubmit=!0)}o.$el.data(v)||(o.$el.data(v,o).addClass(b+" "+r.formClass).on("submit"+_+" validate"+_,H(o,"_submit")).on("reset"+_,H(o,"_reset")).on("showmsg"+_,H(o,"_showmsg")).on("hidemsg"+_,H(o,"_hidemsg")).on("focusin"+_+" click"+_,E,H(o,"_focusin")).on("focusout"+_+" validate"+_,E,H(o,"_focusout")),0!==r.timely&&o.$el.on("keyup"+_+" input"+_,E,H(o,"_focusout")).on("click"+_,":radio,:checkbox","click",H(o,"_focusout")).on("change"+_,'select,input[type="file"]',"change",H(o,"_focusout")),o._novalidate=X(t,j),X(t,j,j))},_initFields:function(t){var i=this,n=null===t;n&&(t=i.fields),J(t)&&e.each(t,function(e,t){if(null===t||n){var s=i.elements[e];s&&i._resetElement(s,!0),delete i.fields[e]}else i.fields[e]=Z(t)?{rule:t}:t}),i.$el.find(E).each(function(){i._parse(this)})},_parse:function(e){var t,i=this,n=e.name,s=X(e,O);s&&X(e,O,null),(e.id&&"#"+e.id in i.fields||!e.name)&&(n="#"+e.id),n&&(t=i.fields[n]||{},t.key=n,t.old={},t.rule=t.rule||s||"",t.rule&&((null!==X(e,R)||/match\(|checked/.test(t.rule))&&(t.must=!0),~t.rule.indexOf("required")&&(t.required=!0,X(e,$,!0)),"showOk"in t||(t.showOk=i.options.showOk),"timely"in t&&X(e,A,+t.timely),Z(t.target)&&X(e,T,t.target),Z(t.tip)&&X(e,F,t.tip),i.fields[n]=i._parseRule(t)))},_parseRule:function(i){var n=D.exec(i.rule),s=this.options;if(n)return i._i=0,n[1]&&(i.display=n[1]),!i.display&&s.display&&(i.display=s.display),n[2]&&(i.rules=[],n[2].replace(S,function(){var n=arguments;n[3]=n[3]||n[4],i.rules.push({not:"!"===n[1],method:n[2],params:n[3]?e.map(n[3].split(", "),function(e){return W(e)}):t,or:"|"===n[5]})})),i},_multiValidate:function(i,n){var s=this,r=s.options;return s.isValid=!0,r.ignore&&(i=i.not(r.ignore)),i.each(function(e,t){var i=s.getField(t);return i&&(s._validate(t,i),!s.isValid&&r.stopOnError)?!1:void 0}),n&&(s.verifying=!0,e.when.apply(null,e.map(s.deferred,function(e){return e})).done(function(){n.call(s,s.isValid),s.verifying=!1})),e.isEmptyObject(s.deferred)?s.isValid:t},_submit:function(t){var i=this,n=i.options,s=t.target,r="submit"===t.type;t.preventDefault(),h&&~(h=!1)||i.submiting||"validate"===t.type&&i.$el[0]!==s||n.beforeSubmit.call(i,s)===!1||(n.debug&&G.log("\n"+t.type),i._reset(),i.submiting=!0,i._multiValidate(i.$el.find(E),function(t){var a,l=t||2===n.debug?"valid":"invalid";t||(n.focusInvalid&&i.$el.find("["+x+'="true"]:input:first').focus(),a=e.map(i.errors,function(e){return e})),i.submiting=!1,P(n[l])&&n[l].call(i,s,a),i.$el.trigger(l+k,[s,a]),t&&!i.isAjaxSubmit&&r&&(h=!0,m&&m.name&&i.$el.append('<input type="hidden" name="'+m.name+'" value="'+e(m).val()+'">'),s.submit())}))},_reset:function(e){var t=this;t.errors={},e&&(t.reseting=!0,t.$el.find(E).each(function(e,i){t._resetElement(i)}),delete t.reseting)},_resetElement:function(t,i){var n=this.options;e(t).removeClass(n.validClass+" "+n.invalidClass),this.hideMsg(t),i&&X(t,$,null)},_focusin:function(t){var i,n=this,s=n.options,r=t.target;n.verifying||(s.focusCleanup&&"true"===X(r,x)&&(e(r).removeClass(s.invalidClass),n.hideMsg(r)),i=X(r,F),i&&n.showMsg(r,{type:"tip",msg:i}))},_focusout:function(t,i){var n,s,r,a,l,o=this,u=o.options,d=t.target,f=t.type,g=z(d),p="validate"===f,m=0;if(!i&&c(d)&&(i=o.$el.find('input[name="'+d.name+'"]').get(0)),l=X(i||d,A),l=null!==l?+l:+u.timely,!p){if(0===l)return;if("focusout"===f){if(2===l)return void(u.focusCleanup||(n=o.getField(d),n&&n.old.ret&&o._makeMsg(d,n,n.old.ret)))}else{if(2>l&&!t.data)return;if(s=+new Date,s-(d._ts||0)<100)return;if(d._ts=s,"keyup"===f){if(r=t.keyCode,a={8:1,9:1,16:1,32:1,46:1},9===r&&!g)return;if(48>r&&!a[r])return}m=l>=100?l:400}}u.ignore&&e(d).is(u.ignore)||(n=o.getField(d),n&&(clearTimeout(n._t),u.ignoreBlank&&!g?o.hideMsg(d):m?n._t=setTimeout(function(){o._validate(d,n)},m):(p&&(n.old={}),o._validate(d,n))))},_showmsg:function(t,i,n){var s=this,r=t.target;e(r).is(":input")?s.showMsg(r,{type:i,msg:n}):"tip"===i&&s.$el.find(E+"["+F+"]",r).each(function(){s.showMsg(this,{type:i,msg:n})})},_hidemsg:function(t){var i=e(t.target);i.is(":input")&&this.hideMsg(i)},_validatedField:function(t,i,n){var s=this,r=s.options,a=n.isValid=i.isValid=!!n.isValid,l=a?"valid":"invalid";n.key=i.key,n.rule=i._r,a?n.type="ok":(s.submiting&&(s.errors[i.key]=n.msg),s.isValid=!1),s.elements[i.key]=n.element=t,s.$el[0].isValid=a?s.isFormValid():a,i.old.value=z(t),i.old.id=t.id,i.old.ret=n,P(i[l])&&i[l].call(s,t,n),P(r.validation)&&r.validation.call(s,t,n),e(t).attr(x,a?null:!0).removeClass(a?r.invalidClass:r.validClass).addClass(n.skip?"":a?r.validClass:r.invalidClass).trigger(l+w,[n,s]),s.$el.triggerHandler("validation",[n,s]),s.checkOnly||s._makeMsg.apply(s,arguments)},_makeMsg:function(e,t,i){(t.msgMaker||this.options.msgMaker)&&this[i.showOk||i.msg?"showMsg":"hideMsg"](e,i,t)},_validatedRule:function(i,n,s,r){n=n||c.getField(i),r=r||{};var a,l,o,d,c=this,f=c.options,g=n._r,p=!1;if(null===s)return void c._validatedField(i,n,{isValid:!0,skip:!0});if(s===t?o=!0:s===!0||""===s?p=!0:Z(s)?a=s:J(s)&&(s.error?a=s.error:(a=s.ok,p=!0)),l=n.rules[n._i],l.not&&(a=t,p="required"===g||!p),l.or)if(p)for(;n._i<n.rules.length&&n.rules[n._i].or;)n._i++;else o=!0;o?p=!0:p?(n.showOk!==!1&&(d=X(i,V),a=null===d?Z(n.ok)?n.ok:a:d,!Z(a)&&Z(n.showOk)&&(a=n.showOk),Z(a)&&(r.showOk=p,r.msg=a)),e(i).trigger("valid"+y,[g,a])):(r.msg=(u(i,n,a||c.messages[g])||Y.defaultMsg).replace("{0}",c._getDisplay(i,n.display||"")),e(i).trigger("invalid"+y,[g,r.msg])),r.isValid=p,f.debug&&G.log("   "+n._i+": "+g+" => "+(p||r.msg)),p&&n._i<n.rules.length-1?(n._i++,c._checkRule(i,n)):(n._i=0,c._validatedField(i,n,r))},_checkRule:function(i,n){var s,r,a=this,l=n.key,u=n.rules[n._i],d=u.method,c=z(i),f=u.params;a.submiting&&a.deferred[l]||(r=n.old,n._r=d,s=!n.must&&u.ret!==t&&r.rule===u&&r.id===i.id&&c&&r.value===c?u.ret:(o(i,d)||a.rules[d]||U).call(a,i,f,n),J(s)&&P(s.then)?(a.deferred[l]=s,!a.checkOnly&&a.showMsg(i,{type:"loading",msg:a.options.loadingMsg},n),s.then(function(s,l,o){var d,c=o.responseText,f=n.dataFilter||a.options.dataFilter;P(f)||(f=function(e){return Z(e)||J(e)&&("error"in e||"ok"in e)?e:void 0}),/jsonp?/.test(this.dataType)?c=s:"{"===W(c).charAt(0)&&(c=e.parseJSON(c)||{}),d=f(c),d===t&&(d=f(c.data)),r.rule=u,u.ret=d,a._validatedRule(i,n,d)},function(e,t){a._validatedRule(i,n,a.messages[t]||t)}).always(function(){delete a.deferred[l]}),n.isValid=t):a._validatedRule(i,n,s))},_validate:function(e,t){if(!e.disabled&&null===X(e,j)){var i=this;if(t||(t=i.getField(e)),t.isValid=!0,t.rules||i._parse(e),t.rules)return i.options.debug&&G.info(t.key),t.required||t.must||z(e)||c(e)?(i._checkRule(e,t),t.isValid):(i._validatedField(e,t,{isValid:!0}),!0)}},test:function(e,i){var n,s,r,a=this,l=N.exec(i);return l&&(s=l[1],s in a.rules&&(r=l[2]||l[3],r=r?r.split(", "):t,n=a.rules[s].call(a,e,r))),n===!0||n===t||null===n},getRangeMsg:function(e,t,i,n){if(t){var s=this,r=s.messages[i]||"",a=t[0].split("~"),l=a[0],o=a[1],u="rg",d=[""],c=+e===+e;if(2===a.length){if(l&&o){if(c&&e>=+l&&+o>=e)return!0;d=d.concat(a)}else if(l&&!o){if(c&&e>=+l)return!0;d.push(l),u="gte"}else if(!l&&o){if(c&&+o>=e)return!0;d.push(o),u="lte"}}else{if(e===+l)return!0;d.push(l),u="eq"}return r&&(n&&r[u+n]&&(u+=n),d[0]=r[u]),s.renderMsg.apply(null,d)}},renderMsg:function(){var e=arguments,t=e[0],i=e.length;if(t){for(;--i;)t=t.replace("{"+i+"}",e[i]);return t}},_getDisplay:function(e,t){return Z(t)?t:P(t)?t.call(this,e):""},_getMsgOpt:function(t){return e.extend({},this.msgOpt,Z(t)?{msg:t}:t)},_getMsgDOM:function(t,i){var n,s,r,a,l=e(t);if(l.is(":input")?(r=i.target||X(t,T),r&&(r=P(r)?r.call(this,t):this.$el.find(r),r.length&&(r.is(":input")?t=r.get(0):r.hasClass(M)?n=r:a=r)),n||(s=!c(t)&&t.id?t.id:t.name,n=this.$el.find(i.wrapper+"."+M+'[for="'+s+'"]'))):n=l,!n.length)if(l=this.$el.find(r||t),n=e("<"+i.wrapper+">").attr({"class":M+(i.cls?" "+i.cls:""),style:i.style||"","for":s}),c(t)){var o=l.parent();n.appendTo(o.is("label")?o.parent():o)}else a?n.appendTo(a):n[i.pos&&"right"!==i.pos?"insertBefore":"insertAfter"](l);return n},showMsg:function(t,i,n){if(t){var s,r,a,l=this,o=l.options;if(J(t)&&!t.jquery&&!i)return void e.each(t,function(e,t){var i=l.elements[e]||l.$el.find(p(e))[0];l.showMsg(i,t)});i=l._getMsgOpt(i),t=e(t).get(0),i.msg||"error"===i.type||(r=X(t,"data-"+i.type),null!==r&&(i.msg=r)),Z(i.msg)&&(e(t).is(E)&&(n=n||l.getField(t),n&&(i.style=n.msgStyle||i.style,i.cls=n.msgClass||i.cls,i.wrapper=n.msgWrapper||i.wrapper,i.target=n.target||o.target)),(s=(n||{}).msgMaker||o.msgMaker)&&(a=l._getMsgDOM(t,i),!I.test(a[0].className)&&a.addClass(i.cls),6===Q&&"bottom"===i.pos&&(a[0].style.marginTop=e(t).outerHeight()+"px"),a.html(s.call(l,i))[0].style.display="",P(i.show)&&i.show.call(l,a,i.type)))}},hideMsg:function(t,i,n){var s,r=this,a=r.options;t=e(t).get(0),i=r._getMsgOpt(i),e(t).is(E)&&(n=n||r.getField(t),n&&((n.isValid||r.reseting)&&X(t,x,null),i.wrapper=n.msgWrapper||i.wrapper,i.target=n.target||a.target)),s=r._getMsgDOM(t,i),s.length&&(P(i.hide)?i.hide.call(r,s,i.type):(s[0].style.display="none",s[0].innerHTML=null))},getField:function(e){var t,i=this;return t=e.id&&"#"+e.id in i.fields||!e.name?"#"+e.id:e.name,X(e,O)&&i._parse(e),i.fields[t]},setField:function(e,t){var i={};Z(e)?i[e]=t:i=e,this._initFields(i)},isFormValid:function(){var e,t=this.fields;for(e in t)if(!t[e].isValid)return t[e].isValid;return!0},holdSubmit:function(e){this.submiting=e===t||e},cleanUp:function(){this._reset(1)},destroy:function(){this._reset(1),this.$el.off(_).removeData(v),X(this.$el[0],j,this._novalidate)}},e(window).on("beforeunload",function(){this.focus()}),e(document).on("focusin","["+O+"]:input",function(e){l(e)}).on("click","input,button",function(e){var t,i,n=this,s=n.name;n.form&&("submit"===n.type?(m=n,t=n.getAttributeNode("formnovalidate"),(t&&null!==t.nodeValue||null!==X(n,j))&&(h=!0)):null===X(n.form,j)&&(s&&c(n)?(i=n.form.elements[s],i.length&&(i=i[0]),X(i,O)&&l(e,i)):l(e)))}).on("submit validate","form",function(t){if(null===X(this,j)){var i,n=e(this);n.data(v)||(i=a(this),e.isEmptyObject(i.fields)?(X(this,j,j),n.off(_).removeData(v)):i._submit(t))}}),new n({required:function(t,i,n){var s=this,r=W(z(t)),a=!0;if(i)if(1===i.length){if(g(i[0])){if(s.rules[i[0]]){if(!r&&!s.test(t,i[0]))return X(t,$,null),null;X(t,$,!0)}}else if(!r&&!e(i[0],s.$el).length)return null}else if("not"===i[0])e.each(i.slice(1),function(){return a=r!==W(this)});else if("from"===i[0]){var l,o=s.$el.find(i[1]),d="_validated_";return a=o.filter(function(){return!!W(z(this))}).length>=(i[2]||1),a?r||(l=null):l=u(o[0],n)||!1,e(t).data(d)||o.data(d,1).each(function(){t!==this&&s._checkRule(this,s.getField(this))}).removeData(d),l}return a&&!!r},integer:function(e,t){var i,n="0|",s="[1-9]\\d*",r=t?t[0]:"*";switch(r){case"+":i=s;break;case"-":i="-"+s;break;case"+0":i=n+s;break;case"-0":i=n+"-"+s;break;default:i=n+"-?"+s}return i="^(?:"+i+")$",new RegExp(i).test(z(e))||this.messages.integer[r]},match:function(t,i,n){if(i){var s,r,a,l,o,u,d,c,g=this,m="eq";if(1===i.length?a=i[0]:(m=i[0],a=i[1]),u=p(a),d=g.$el.find(u)[0]){if(c=g.getField(d),s=z(t),r=z(d),n._match||(g.$el.on("valid"+w+_,u,function(){e(t).trigger("validate")}),n._match=c._match=1),!n.required&&""===s&&""===r)return null;if(o=i[2],o&&(/^date(time)?$/i.test(o)?(s=f(s),r=f(r)):"time"===o&&(s=+s.replace(/:/g,""),r=+r.replace(/:/g,""))),"eq"!==m&&!isNaN(+s)&&isNaN(+r))return!0;switch(l=g.messages.match[m].replace("{1}",g._getDisplay(t,c.display||a)),m){case"lt":return+r>+s||l;case"lte":return+r>=+s||l;case"gte":return+s>=+r||l;case"gt":return+s>+r||l;case"neq":return s!==r||l;default:return s===r||l}}}},range:function(e,t){return this.getRangeMsg(+z(e),t,"range")},checked:function(e,t,i){if(c(e)){var n,s,r=this;return s=r.$el.find('input[name="'+e.name+'"]').filter(function(){var e=this;return!n&&c(e)&&(n=e),!e.disabled&&e.checked}).length,t?r.getRangeMsg(s,t,"checked"):!!s||u(n,i,"")||r.messages.required}},length:function(e,t){var i=z(e),n=(t[1]?i.replace(q,"xx"):i).length;return this.getRangeMsg(n,t,"length",t[1]?"_2":"")},remote:function(t,i){if(i){var n,s=this,r=B.exec(i[0]),a={},l="";return a[t.name]=z(t),i[1]&&e.map(i.slice(1),function(e){var t,i;~e.indexOf("=")?l+="&"+e:(t=e.split(":"),e=W(t[0]),i=W(t[1])||e,a[e]=s.$el.find(p(i)).val())}),/^https?:/.test(r[2])&&!~r[2].indexOf(location.host)&&(n="jsonp"),e.ajax({url:r[2],type:r[1]||"POST",data:e.param(a)+l,dataType:n,cache:!1})}},validate:function(t,i){var n="_validated_";i&&!e(t).data(n)&&this.$el.find(e.map(i,function(e){return p(e)}).join(",")).data(n,1).trigger("validate").removeData(n)},filter:function(e,t){e.value=z(e).replace(t?new RegExp("["+t[0]+"]","gm"):L,"")}}),i.config=function(t){e.each(t,function(e,t){"rules"===e?new n(t):"messages"===e?new s(t):Y[e]=t})},i.setTheme=function(t,i){J(t)?e.extend(!0,et,t):Z(t)&&J(i)&&(et[t]=e.extend(et[t],i))},e[v]=i,function(t){var n,s,r,a,l,o,u=document.getElementsByTagName("script");if(t)s=u[0],n=t.match(/(.*)\/local\/(\w{2,5})\.js/);else for(r=u.length,a=/(.*validator.js)\?.*local=(\w+)/;r--&&!n;)s=u[r],n=(s.hasAttribute?s.src:s.getAttribute("src",4)||"").match(a);n&&(l=n[0].split("/").slice(0,-1).join("/").replace(/\/(local|src)$/,"")+"/",o=document.createElement("link"),o.rel="stylesheet",o.href=l+"jquery.validator.css",s.parentNode.insertBefore(o,s),t||(i.loading=1,o=document.createElement("script"),o.src=l+"local/"+n[2].replace("-","_")+".js",r="onload"in o?"onload":"onreadystatechange",o[r]=function(){(!o.readyState||/loaded|complete/.test(o.readyState))&&(e(window).trigger("validatorready"),delete i.loading,o=o[r]=null)},s.parentNode.insertBefore(o,s)))}(e._VALIDATOR_URI)});