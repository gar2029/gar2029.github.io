/* feel free to replace this with SSI */
var myhost = ''; /* var myhost = 'http://signup.mysite.com'; if(location.host.match(/gforce|ball/)) myhost = '' */

window.runMe = function(x,y){
  var x = x || 2
  var y = y || 55
  if(window.P7_Snap){
    P7_Snap("snap_t2","snap_s",x,y);
    obj = document.getElementById('snap_s');
    if(obj && obj.style) obj.style.visibility='visible';
  }
}


window.mkHDLINKS = function(){
  var str = ''
  +'<table width="100%" cellpadding="0" cellspacing="0" summary="">'
  +'<tr class="header1">'
  +'  <td align="right" style="padding:2px;">'
  +'    <a href="'+myhost+'/cgi-bin/show_me?page=hosting_compare&packages=starter1&#91;alt&#93;schost01">Compare Features</a>'
  +'    <a href="'+myhost+'/cgi-bin/show_me?page=show_me/about/about_us">About Us</a>'
  +'    <a href="'+myhost+'/cgi-bin/show_me?page=show_me/about/contact">Contact Us</a>'
  +'    <a href="'+myhost+'/cgi-bin/path/signup">Sign Up Now!</a>'
  +'    <a href="http://members.mysite.com/cgi-bin/members"><img src="/fs_img/fs_05/mysite/images/member-login.gif" border="0" style="position:relative;top:3px;"></a>'
  +'  </td>'
  +'</tr>'
  +'<tr valign="top">'
  +'  <td>'
  +'    <table cellspacing="0" cellpadding="0" width="100%">'
  +'      <tr>'
  +'        <td>'
  +'          <a href="/"><img src="/fs_img/fs_05/mysite/images/my-site-logo1.gif" border="0"'
  +'          style="position:relative; margin-left:30px; margin-top:-10px; z-index:1;"'
  +'          ></a>'
  +'        </td>'
  +'        <td align="right">'
  +'          <img src="/fs_img/fs_05/mysite/images/phone.gif" style="margin-right:30px; margin-top:10px;">'
  +'        </td>'
  +'      </tr>'
  +'    </table>'
  +'  </td>'
  +'</tr>'
  +'</table>'
  return str
}


window.mkLINKS1 = function(){
  var str = ''
  +'<b>...or create one of these!</b><br>'
  +'<a href="category.htm"><span>Resume</span>Site</a>, '
  +'<a href="category.htm"><span>Event</span>Site</a>, '
  +'<a href="category.htm"><span>Blog</span>Site</a>, '
  +'<a href="category.htm"><span>Music</span>Site</a>, '
  +'<a href="category.htm"><span>Sport</span>Site</a>, '
  +'<a href="category.htm"><span>Fan</span>Site</a>, '
  +'<a href="category.htm"><span>Car</span>Site</a>, '
  +'<a href="category.htm"><span>Movie</span>Site</a>, '
  +'<a href="category.htm"><span>Wedding</span>Site</a>, '
  +'<a href="category.htm">more...</a>'
  return str
}


window.mkMAIN = function(s,colr,w,photo,ph_x,ph_y){
  var ph = photo || s+'-photo.gif'
  var ph_x = ph_x || 0
  var ph_y = ph_y || 0
  var w = w || 250
  var obj = document.getElementById('context').innerHTML
  var str = ''
  +'<img src="/fs_img/fs_05/mysite/images/'+ph+'" class="temp" id="snap_s" name="snap_s" alt="'+s+' photo">'
  +'<table class="palette" width="600" cellpadding="0" cellspacing="0" summary="">'
  +'  <tr>'
  +'    <td>'

  +'<!-- start: main i/f -->'
  +'<table cellpadding="0" cellspacing="0" align="center" style="margin-top:10px;" summary="">'
  +'  <tr>'
  +'    <td><img src="/fs_img/fs_05/mysite/images/if_tl_'+colr+'.gif" id="snap_t2" name="snap_t2" alt="i/f"></td>'
  +'    <td style="background-image:url(/fs_img/fs_05/mysite/images/if_t_'+colr+'.gif);background-repeat:repeat-x;" align="center">'
  +'      <img src="/fs_img/fs_05/mysite/images/'+s+'-logo.gif" alt="'+s+' site logo">'
  +'    </td>'
  +'    <td><img src="/fs_img/fs_05/mysite/images/if_tr_'+colr+'.gif" id="snap_t1" name="snap_t1" alt="i/f"></td>'
  +'  </tr>'
  +'  <tr>'
  +'    <td style="background-image:url(/fs_img/fs_05/mysite/images/if_l.gif);background-repeat:repeat-y;"></td>'
  +'    <td style="background-color:white;">'

  +'      <table cellpadding="5" width="688" style="margin-top:10px;" summary="">'
  +'        <tr>'
  +'          <td>'
  +'            <img src="/fs_img/fs_05/mysite/images/spacer.gif" width="'+w+'" height="200" alt="spacer">'
  +'          </td>'
  +'          <td>'
  +'            <img src="/fs_img/fs_05/mysite/images/'+s+'-text.gif" alt="'+s+' text">'
  +'          </td>'
  +'        </tr>'
  +'      </table>'

  +'      <table cellpadding="0" cellspacing="0" summary="">'
  +'        <tr>'
  +'          <td>'
  +'            <img src="/fs_img/fs_05/mysite/images/'+s+'-value-tile.gif" usemap="#value_tile" border="0" alt="value hosting">'
  +'          </td>'
  +'          <td>'
  +'            <img src="/fs_img/fs_05/mysite/images/'+s+'-starter-tile.gif" usemap="#starter_tile" border="0" alt="starter hosting">'
  +'          </td>'
  +'        </tr>'
  +'      </table>'

  +'      <table align="center" summary="">'
  +'        <tr>'
  +'          <td align="center" class="content1">'

  +mkLINKS1()

  +'<div style="margin-top:30px;width:600px;text-align:left;">'+obj+'</div>'

  +'          </td>'
  +'        </tr>'
  +'      </table>'

  +'    </td>'
  +'    <td style="background-image:url(/fs_img/fs_05/mysite/images/if_r.gif);background-repeat:repeat-y;"></td>'
  +'  </tr>'
  +'  <tr>'
  +'    <td><img src="/fs_img/fs_05/mysite/images/if_bl.gif" alt="i/f"></td>'
  +'    <td style="background-image:url(/fs_img/fs_05/mysite/images/if_b.gif);background-repeat:repeat-x;"></td>'
  +'    <td><img src="/fs_img/fs_05/mysite/images/if_br.gif" alt="i/f"></td>'
  +'  </tr>'
  +'</table>'
  +'<!-- end: main i/f -->'

  +'    </td>'
  +'  </tr>'
  +'  <tr>'
  +'    <td>'

  +'<map name="value_tile">'
  +'<area href="'+myhost+'/cgi-bin/path/signup?account_type=fs_schost01_a" shape="rect" coords="209,103,322,140">'
  +'<area href="'+myhost+'/cgi-bin/show_me?page=hosting_compare&packages=schost01[alt]starter1" '
  +'  shape="rect" coords="213,157,319,173">'
  +'</map>'

  +'<map name="starter_tile">'
  +'<area href="'+myhost+'/cgi-bin/path/signup?account_type=fs_starter1_a" shape="rect" coords="209,103,322,140">'
  +'<area href="'+myhost+'/cgi-bin/show_me?page=hosting_compare&packages=schost01[alt]starter1" '
  +'  shape="rect" coords="213,157,319,173">'
  +'</map>'

  +'    </td>'
  +'  </tr>'
  +'</table>'


  document.write(str)
  eval('setTimeout("runMe('+ph_x+','+ph_y+')",500);')
}


/* functions for index */
window.setOpacity = function(obj,o){
  if(obj && obj.style){
    obj.style.filter = "alpha(opacity:"+o+")"; // IE/Win
    obj.style.KHTMLOpacity = o/100; // Safari<1.2, Konqueror
    obj.style.MozOpacity = o/100; // Older Mozilla and Firefox
    obj.style.opacity = o/100; // Safari 1.2, newer Firefox and Mozilla, CSS3
  }
  //problem: a brief flash occurs when changing the opacity... like its reloading... it wrecks the effect.
}


window.hMouseOver = function(obj){
  //setOpacity(obj,100)
}


window.hMouseOut = function(obj){
  //setOpacity(obj,90)
}


function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
  d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}


function P7_Snap() { //v2.62 by PVII
	var x,y,ox,bx,oy,p,tx,a,b,k,d,da,e,el,args=P7_Snap.arguments;a=parseInt(a);
	for (k=0; k<(args.length-3); k+=4)
	 if ((g=MM_findObj(args[k]))!=null) {
		el=eval(MM_findObj(args[k+1]));
		a=parseInt(args[k+2]);b=parseInt(args[k+3]);
		x=0;y=0;ox=0;oy=0;p="";tx=1;da="document.all['"+args[k]+"']";
		if(document.getElementById) {
		 d="document.getElementsByName('"+args[k]+"')[0]";
		 if(!eval(d)) {d="document.getElementById('"+args[k]+"')";if(!eval(d)) {d=da;}}
		}else if(document.all) {d=da;} 
		if (document.all || document.getElementById) {
		 while (tx==1) {p+=".offsetParent";
			if(eval(d+p)) {x+=parseInt(eval(d+p+".offsetLeft"));y+=parseInt(eval(d+p+".offsetTop"));
			}else{tx=0;}}
		 ox=parseInt(g.offsetLeft);oy=parseInt(g.offsetTop);var tw=x+ox+y+oy;
		 if(tw==0 || (navigator.appVersion.indexOf("MSIE 4")>-1 && navigator.appVersion.indexOf("Mac")>-1)) {
			ox=0;oy=0;if(g.style.left){x=parseInt(g.style.left);y=parseInt(g.style.top);
			}else{var w1=parseInt(el.style.width);bx=(a<0)?-5-w1:-10;
			a=(Math.abs(a)<1000)?0:a;b=(Math.abs(b)<1000)?0:b;
			x=document.body.scrollLeft + event.clientX + bx;
			y=document.body.scrollTop + event.clientY;}}
	 }else if (document.layers) {x=g.x;y=g.y;var q0=document.layers,dd="";
		for(var s=0;s<q0.length;s++) {dd='document.'+q0[s].name;
		 if(eval(dd+'.document.'+args[k])) {x+=eval(dd+'.left');y+=eval(dd+'.top');break;}}}
	 if(el) {e=(document.layers)?el:el.style;
	 var xx=parseInt(x+ox+a),yy=parseInt(y+oy+b);
	 if(navigator.appName=="Netscape" && parseInt(navigator.appVersion)>4){xx+="px";yy+="px";}
	 if(navigator.appVersion.indexOf("MSIE 5")>-1 && navigator.appVersion.indexOf("Mac")>-1){
		xx+=parseInt(document.body.leftMargin);yy+=parseInt(document.body.topMargin);
		xx+="px";yy+="px";}e.left=xx;e.top=yy;}}
}