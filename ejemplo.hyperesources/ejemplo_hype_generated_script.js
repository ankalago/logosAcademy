//	HYPE.documents["ejemplo"]

(function(){(function k(){var h="ejemplo.hyperesources",e="ejemplo",d="ejemplo_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),b=0;b<f.length;b++){var a=f[b].src;if(null!=a&&-1!=a.indexOf("ejemplo_hype_generated_script.js")){h=a.substr(0,a.lastIndexOf("/"));break}}}catch(n){}if(false==!1&&null==window.HYPE_332)null==window.HYPE_dtl_332?(window.HYPE_dtl_332=[],window.HYPE_dtl_332.push(k),e=document.getElementsByTagName("head")[0],d=document.createElement("script"),
b=navigator.userAgent.match(/MSIE (\d+\.\d+)/),b=parseFloat(b&&b[1])||null,d.type="text/javascript",d.src=h+"/"+(null!=b&&10>b?"HYPE.ie.js":"HYPE.js")+"?hype_version=332",e.appendChild(d)):window.HYPE_dtl_332.push(k);else{f=window.HYPE.documents;if(null!=f[e]){a=1;b=e;do e=""+b+"-"+a++;while(null!=f[e]);for(var c=document.getElementsByTagName("div"),a=!1,b=0;b<c.length;b++)if(c[b].id==d&&null==c[b].getAttribute("HYP_dn")){var a=1,g=d;do d=""+g+"-"+a++;while(null!=document.getElementById(d));c[b].id=
d;a=!0;break}if(!1==a)return}for(var a=new HYPE_332,c=[],c=[{name:"colorVerde",source:"function(hypeDocument, element, event) {\t\n\t//Define the Drag and Drop elements\n\tvar dragColorVerde = document.getElementById('colorVerde');\n\tvar dropArbol = document.getElementById('arbol');\n\tvar arbolOk = document.getElementById('arbolOk');\n\t\n\tvar dragColorRojo = document.getElementById('colorRojo');\n\tvar dropTecho = document.getElementById('techo');\n\tvar techoOk = document.getElementById('techoOk');\n\t\n\tvar dragColorNaranja = document.getElementById('colorNaranja');\n\tvar dropCasa = document.getElementById('casa');\n\tvar casaOk = document.getElementById('casaOk');\n\t\n\tvar dragColorAzul = document.getElementById('colorAzul');\n\tvar dropNube = document.getElementById('nube');\n\tvar nubeOk = document.getElementById('nubeOk');\n\t\n\tvar textCongratulations = document.getElementById('congratulations');\n\tvar textoFooter = document.getElementById('textoFooter');\n\t\n\tif (event['hypeGesturePhase'] == hypeDocument.kHypeGesturePhaseStart) {\n\t\t//When a gesture begins, let Noa streches and star glowing. \n\t\t//hypeDocument.startTimelineNamed('noastreches');\n\t\t//hypeDocument.startTimelineNamed('starglow');\t\t//And get the initial position of the star's coordinates.\n\t\tpreviousXCenter = dragColorVerde.offsetLeft + (dragColorVerde.offsetWidth / 2);\n\t\tpreviousYCenter = dragColorVerde.offsetTop + (dragColorVerde.offsetHeight / 2);\n\t\t\n\t}else if(event['hypeGesturePhase'] == hypeDocument.kHypeGesturePhaseEnd) {\n\t\t//Once the drag gesture ends, first check if it's in the net. \n\t\t//If the star is in the net, play timeline.\n\t\t//If the star is not in the net, revert star to original position.\n\t\tif (dragColorVerde.offsetLeft > dropArbol.offsetLeft && dragColorVerde.offsetTop > dropArbol.offsetTop && dragColorVerde.offsetLeft + dragColorVerde.offsetWidth < dropArbol.offsetLeft + dropArbol.offsetWidth && dragColorVerde.offsetTop + dragColorVerde.offsetHeight < dropArbol.offsetTop + dropArbol.offsetHeight) {\n\t\t\tcorrecto = true;\n\t\t\t//hypeDocument.startTimelineNamed('starcatch');\n\t\t\tdragColorVerde.style.display = 'none';\n\t\t\tarbolOk.style.display = 'block';\n\t\t\t\n\t\t\thypeDocument.startTimelineNamed('animacionManzana');\n\t\t\t\n\t\t\t\n\t\t}else if (dragColorRojo.offsetLeft > dropTecho.offsetLeft && dragColorRojo.offsetTop > dropTecho.offsetTop && dragColorRojo.offsetLeft + dragColorRojo.offsetWidth < dropTecho.offsetLeft + dropTecho.offsetWidth && dragColorRojo.offsetTop + dragColorRojo.offsetHeight < dropTecho.offsetTop + dropTecho.offsetHeight) {\n\t\t\tcorrecto = true;\n\t\t\t//hypeDocument.startTimelineNamed('starcatch');\n\t\t\tdragColorRojo.style.display = 'none';\n\t\t\ttechoOk.style.display = 'block';\n\t\t\t\t\t\t\n\t\t}else if (dragColorNaranja.offsetLeft > dropCasa.offsetLeft && dragColorNaranja.offsetTop > dropCasa.offsetTop && dragColorNaranja.offsetLeft + dragColorNaranja.offsetWidth < dropCasa.offsetLeft + dropCasa.offsetWidth && dragColorNaranja.offsetTop + dragColorNaranja.offsetHeight < dropCasa.offsetTop + dropCasa.offsetHeight) {\n\t\t\tcorrecto = true;\n\t\t\t//hypeDocument.startTimelineNamed('starcatch');\n\t\t\tdragColorNaranja.style.display = 'none';\n\t\t\tcasaOk.style.display = 'block';\n\t\t\t\t\t\t\n\t\t}else if (dragColorAzul.offsetLeft > dropNube.offsetLeft && dragColorAzul.offsetTop > dropNube.offsetTop && dragColorAzul.offsetLeft + dragColorAzul.offsetWidth < dropNube.offsetLeft + dropNube.offsetWidth && dragColorAzul.offsetTop + dragColorAzul.offsetHeight < dropNube.offsetTop + dropNube.offsetHeight) {\n\t\t\tcorrecto = true;\n\t\t\t//hypeDocument.startTimelineNamed('starcatch');\n\t\t\tdragColorAzul.style.display = 'none';\n\t\t\tnubeOk.style.display = 'block';\n\t\t\t\t\t\t\n\t\t}else{\n\t\t\tcorrecto = false;\n\t\t\t//revert to original position\n\t\t\thypeDocument.startTimelineNamed('regresoColorVerde');\n\t\t\thypeDocument.startTimelineNamed('regresoColorRojo');\n\t\t\thypeDocument.startTimelineNamed('regresoColorNaranja');\n\t\t\thypeDocument.startTimelineNamed('regresoColorAzul');\n\t\t};\n\t\t\n\t\t//end starglow and no reverts to original position\n\t\tif (correcto == false){\n\t\t\t//hypeDocument.startTimelineNamed('noareverts');\n\t\t\t//hypeDocument.pauseTimelineNamed('starglow');\n\t\t\t//hypeDocument.goToTimeInTimelineNamed(0, 'starglow');\n\t\t}else{\n\t\t\t//hypeDocument.startTimelineNamed('noarevertsnosound');\n\t\t\t//hypeDocument.pauseTimelineNamed('starglow');\n\t\t\t//hypeDocument.goToTimeInTimelineNamed(0, 'starglow');\n\t\t};\n\t\t\n\t\tif(arbolOk.style.display = 'block' && techoOk.style.display == 'block' && casaOk.style.display == 'block' && nubeOk.style.display == 'block'){\n\t\t\thypeDocument.startTimelineNamed('arcoIris');\n\t\t\ttextoFooter.style.display = 'none';\n\t\t\ttextCongratulations.style.display = 'block';\n\t\t\thypeDocument.continueTimelineNamed('congratulations', hypeDocument.kDirectionForward);\r\n\t\t}\n\t};\n\t\n\t\n}",identifier:"72"},{name:"botonRojo",source:"function(hypeDocument, element, event) {\t\n\t//Define the Drag and Drop elements\n\tvar vDragStar = document.getElementById('dragstar');\n\tvar vDropNet = document.getElementById('dropnet');\n\tvar arbolOk = document.getElementById('arbolOk');\n\t\n\tif (event['hypeGesturePhase'] == hypeDocument.kHypeGesturePhaseStart) {\n\t\t//When a gesture begins, let Noa streches and star glowing. \n\t\t//hypeDocument.startTimelineNamed('noastreches');\n\t\t//hypeDocument.startTimelineNamed('starglow');\t\t//And get the initial position of the star's coordinates.\n\t\tpreviousXCenter = vDragStar.offsetLeft + (vDragStar.offsetWidth / 2);\n\t\tpreviousYCenter = vDragStar.offsetTop + (vDragStar.offsetHeight / 2);\n\t\t\n\t}else if(event['hypeGesturePhase'] == hypeDocument.kHypeGesturePhaseEnd) {\n\t\t//Once the drag gesture ends, first check if it's in the net. \n\t\t//If the star is in the net, play timeline.\n\t\t//If the star is not in the net, revert star to original position.\n\t\tif (vDragStar.offsetLeft > vDropNet.offsetLeft && vDragStar.offsetTop > vDropNet.offsetTop && vDragStar.offsetLeft + vDragStar.offsetWidth < vDropNet.offsetLeft + vDropNet.offsetWidth && vDragStar.offsetTop + vDragStar.offsetHeight < vDropNet.offsetTop + vDropNet.offsetHeight) {\n\t\t\tvNoaReverts = true;\n\t\t\t//hypeDocument.startTimelineNamed('starcatch');\n\t\t\tvDragStar.style.display = 'none';\n\t\t\tarbolOk.style.display = 'block';\n\t\t\thypeDocument.startTimelineNamed('arcoIris');\n\t\t}else{\n\t\t\tvNoaReverts = false;\n\t\t\t//revert to original position\n\t\t\thypeDocument.startTimelineNamed('regresoColorRojo');\n\t\t};\n\t\t//end starglow and no reverts to original position\n\t\tif (vNoaReverts == false){\n\t\t\thypeDocument.startTimelineNamed('noareverts');\n\t\t\t//hypeDocument.pauseTimelineNamed('starglow');\n\t\t\t//hypeDocument.goToTimeInTimelineNamed(0, 'starglow');\n\t\t}else{\n\t\t\thypeDocument.startTimelineNamed('noarevertsnosound');\n\t\t\t//hypeDocument.pauseTimelineNamed('starglow');\n\t\t\t//hypeDocument.goToTimeInTimelineNamed(0, 'starglow');\n\t\t};\n\t};\n}",identifier:"75"}],g={},l={},b=0;b<c.length;b++)try{l[c[b].identifier]=c[b].name,g[c[b].name]=eval("(function(){return "+c[b].source+"})();")}catch(m){a.log(m),g[c[b].name]=function(){}}a.z_a({R:5,S:0,aI:0,T:0,bG:3,aJ:0,bH:2,aK:0,X:0,bI:3,aL:0,Y:1,bJ:3,bK:3,bL:3,a:0,b:0,c:0,d:0,aS:0,e:3,bQ:0,aT:0,f:2,g:5,bR:2,aU:0,bS:"NumberValueTransformer",aV:0,aW:3,A:5,l:2,aX:0,B:5,m:5,C:5,aY:2,n:5,D:5,E:0,aZ:0,G:5,t:0,bA:5,RotationAngle:2,tX:4,bB:0,M:0,N:0,bC:0,tY:4,O:0,P:0,Q:0});a.z_b({"10":{p:1,n:"nube.png",g:"90",t:"@1x"},"2":{p:1,n:"top-footer.jpg",g:"63",t:"@1x"},"15":{p:1,n:"techo-inicio.png",g:"119",t:"@1x"},"3":{p:1,n:"arco-iris.png",g:"85",t:"@1x"},"11":{p:1,n:"nube-inicio.png",g:"124",t:"@1x"},"4":{p:1,n:"cerca.png",g:"87",t:"@1x"},"5":{p:1,n:"hoja.png",g:"88",t:"@1x"},"12":{p:1,n:"casa.png",g:"86",t:"@1x"},"6":{p:1,n:"manzana.png",g:"89",t:"@1x"},"13":{p:1,n:"techo.png",g:"116",t:"@1x"},"7":{p:1,n:"pajaro.png",g:"91",t:"@1x"},"0":{p:1,n:"logo-peq-retina.png",g:"34",t:"@1x"},"8":{p:1,n:"arbol-inicio.png",g:"104",t:"@1x"},"14":{p:1,n:"casa-inicio.png",g:"118",t:"@1x"},"1":{p:1,n:"logo-peq-retina-1.png",g:"17",t:"@1x"},"9":{p:1,n:"arbol.png",g:"84",t:"@1x"}});a.z_c(["<link href='https://fonts.googleapis.com/css?family=Henny+Penny&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Pacifico&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Open+Sans&subset=latin' rel='stylesheet' type='text/css'>"]);a.z_d([{x:0,p:"600px",c:"#FFFFFF",v:{"18":{Q:0,p:"no-repeat",a:288,R:"#000000",q:"100% 100%",bS:"45",j:"absolute",r:"inline",c:191,k:"div",z:"5",d:191.245,T:0,x:"visible",e:"0.000000",b:377,h:"17",f:"0deg",S:0},"65":{c:258,d:258,I:"Solid",r:"none",e:"0.000000",J:"Solid",K:"Solid",g:"#FFFFFF",L:"Solid",M:1,N:1,aI:10,A:"#E7B84D",x:"visible",j:"absolute",k:"div",O:1,B:"#E7B84D",P:1,z:"4",C:"#E7B84D",D:"#E7B84D",aK:10,aJ:10,a:254,aL:10,b:341},"19":{c:768,bS:"63",d:946,r:"inline",I:"None",e:"1.000000",J:"None",K:"None",g:"#5C0D29",L:"None",M:0,w:"",N:0,A:"#A0A0A0",j:"absolute",O:0,k:"div",x:"visible",B:"#A0A0A0",P:0,Q:0,z:"3",D:"#A0A0A0",R:"#921848",C:"#A0A0A0",S:0,a:0,T:0,b:0}},n:"intro",T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Control temporal principal",z:2,a:[{f:"2",y:0,z:1,i:"e",e:"1.000000",s:"0.000000",o:"18"},{f:"2",y:0,z:1,i:"e",e:"1.000000",s:"0.000000",o:"65"},{f:"2",y:1,z:1,i:"e",e:"0.000000",s:"1.000000",o:"18"},{f:"2",y:1,z:1,i:"e",e:"0.000000",s:"1.000000",o:"65"},{f:"2",p:2,y:2,z:0,i:"ActionHandler",s:{a:[{d:0.99999999999999989,p:1,g:2,e:"26"}]},o:"kTimelineDefaultIdentifier"},{y:2,i:"e",s:"0.000000",z:0,o:"65",f:"2"},{y:2,i:"e",s:"0.000000",z:0,o:"18",f:"2"}],f:30}},o:"1"},{x:1,p:"600px",c:"#FFFFFF",v:{"121":{h:"118",p:"no-repeat",x:"visible",a:351,q:"100% 100%",bS:"5",j:"absolute",r:"inline",c:362,k:"div",z:"20",d:225,i:"casa",b:482},"69":{p:"no-repeat",c:379,q:"100% 100%",bS:"5",d:436,I:"None",r:"inline",J:"None",K:"None",L:"None",aP:"auto",h:"104",M:0,i:"arbol",N:0,A:"#A0A0A0",j:"absolute",O:0,k:"div",x:"visible",B:"#A0A0A0",P:0,z:"14",C:"#A0A0A0",D:"#A0A0A0",a:41,b:270},"96":{p:"no-repeat",tY:"100%",c:728,q:"100% 100%",bS:"13",d:358,r:"inline",b:175,f:"180deg",h:"85",i:"arcoIris",bF:"99",j:"absolute",x:"visible",k:"div",z:"2",tX:"50%",a:0,RotationAngle:"0deg",bR:"0deg"},"103":{b:806,z:"28",K:"None",c:100,L:"None",d:100,M:0,bD:"auto",N:0,bS:"5",O:0,g:"#C0D8D2",P:0,i:"colorAzul",tX:"50%",j:"absolute",aI:100,k:"div",tY:"50%",aJ:100,aK:100,aL:100,A:"#A0A0A0",B:"#A0A0A0",r:"inline",C:"#A0A0A0",D:"#A0A0A0",bN:{a:[{p:4,h:"72"},{p:11}]},aP:"pointer",w:"",x:"visible",I:"None",a:619,J:"None"},"122":{h:"124",p:"no-repeat",x:"visible",a:366,q:"100% 100%",bS:"5",j:"absolute",r:"inline",c:314,k:"div",z:"17",d:135,i:"nube",b:186},"40":{c:766,bS:"63",d:944,I:"Solid",J:"Solid",K:"Solid",g:"#F4DF90",L:"Solid",M:1,w:"",N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:1,P:1,z:"1",C:"#A0A0A0",D:"#A0A0A0",a:0,b:0},"117":{h:"119",p:"no-repeat",x:"visible",a:467,q:"100% 100%",bS:"5",j:"absolute",r:"inline",c:264,k:"div",z:"22",d:179,i:"techo",b:346},"32":{aU:8,G:"#BD7240",c:571,H:"none",bS:"6",aV:8,r:"inline",d:18,s:"Pacifico",t:31,Z:"break-word",v:"normal",w:"Use the number code&nbsp;to color the picture.",bF:"67",j:"absolute",x:"visible",k:"div",y:"preserve",z:"5",aS:8,aT:8,a:0.5,b:0},"98":{c:727,d:531,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,bF:"99",N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:1,P:1,z:"1",C:"#A0A0A0",D:"#A0A0A0",a:0,b:0},"123":{h:"90",p:"no-repeat",x:"visible",a:366,q:"100% 100%",bS:"5",j:"absolute",r:"none",c:314,k:"div",z:"18",d:135,i:"nubeOk",b:186},"99":{x:"hidden",a:0,bS:"13",b:0,j:"absolute",r:"inline",c:729,k:"div",z:"3",d:533,bF:"100",e:"0.928048"},"42":{c:747,bS:"63",d:926,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,w:"",aI:10,A:"#A0A0A0",j:"absolute",N:0,k:"div",x:"visible",O:0,B:"#A0A0A0",z:"2",P:0,D:"#A0A0A0",C:"#A0A0A0",aK:10,aJ:10,a:10,aL:10,b:10},"105":{h:"86",p:"no-repeat",x:"visible",a:351,q:"100% 100%",bS:"5",j:"absolute",r:"none",c:362,k:"div",z:"21",d:225,i:"casaOk",b:482},"61":{c:726,bS:"47",d:578,I:"None",r:"inline",J:"None",K:"None",g:"#FFFAE4",L:"None",M:0,w:"",aI:10,A:"#A0A0A0",j:"absolute",bF:"100",k:"div",N:0,O:0,x:"visible",z:"1",B:"#A0A0A0",D:"#A0A0A0",P:0,C:"#A0A0A0",aK:10,aJ:10,a:1,aL:10,b:1},"36":{h:"34",p:"no-repeat",x:"visible",a:9,q:"100% 100%",bS:"33",j:"absolute",r:"inline",c:102,k:"div",z:"2",d:101,bF:"62",b:6},"62":{k:"div",x:"visible",c:119,b:10,d:114,z:"2",a:610,j:"absolute",bF:"67",bS:"1"},"125":{aU:8,G:"#FF2600",c:481,bS:"5",aV:8,r:"none",d:36,s:"Pacifico",t:72,g:"",Z:"break-word",i:"congratulations",w:"Congratulations",A:"#942192",j:"absolute",x:"visible",k:"div",y:"preserve",B:"#942192",C:"#942192",z:"29",aS:8,D:"#942192",aT:8,a:135,b:774},"71":{b:805,z:"25",K:"None",c:100,L:"None",d:100,M:0,bD:"none",N:0,bS:"5",O:0,g:"#93C329",P:0,i:"colorVerde",tX:"50%",j:"absolute",aI:94,k:"div",tY:"50%",aJ:94,aK:94,aL:94,A:"#A0A0A0",B:"#A0A0A0",r:"inline",C:"#A0A0A0",D:"#A0A0A0",bN:{a:[{p:4,h:"72"},{p:11}]},aP:"pointer",w:"",x:"visible",I:"None",a:283,J:"None"},"38":{c:725,bS:"39",d:-2,I:"Solid",r:"inline",J:"Solid",K:"Solid",g:"#EB2828",L:"Solid",M:1,w:"",bF:"67",A:"#F27C7E",x:"visible",j:"absolute",k:"div",N:1,O:1,B:"#F27C7E",z:"3",P:1,D:"#F27C7E",C:"#F27C7E",a:0,b:133.5},"64":{h:"63",p:"no-repeat",x:"visible",a:0,q:"100% 100%",bS:"7",j:"absolute",r:"inline",c:747,k:"div",z:"3",d:16,bF:"66",b:0},"113":{h:"89",p:"no-repeat",tY:"50%",a:64.5,q:"100% 100%",bS:"5",j:"absolute",r:"inline",c:51,k:"div",z:"16",d:59,bP:"NO",x:"visible",i:"manzana",b:482.5,tX:"50%"},"39":{aU:8,G:"#4D4D4D",c:574,bS:"6",aV:8,r:"inline",d:55,s:"'Open Sans'",t:13,Z:"break-word",v:"normal",w:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",bF:"67",j:"absolute",x:"visible",k:"div",y:"preserve",z:"4",aS:8,aT:8,a:0.5,F:"justify",b:57},"100":{k:"div",x:"visible",c:729,d:580,z:"5",r:"inline",a:20,j:"absolute",bS:"7",b:170},"108":{p:"no-repeat",c:379,q:"100% 100%",bS:"5",d:436,I:"None",r:"none",e:"1.000000",J:"None",K:"None",L:"None",h:"84",M:0,i:"arbolOk",N:0,j:"absolute",x:"visible",O:0,k:"div",P:0,z:"15",a:41,b:270},"74":{b:806,z:"26",K:"None",c:100,L:"None",d:100,M:0,bD:"none",N:0,bS:"5",O:0,g:"#751F18",P:0,i:"colorRojo",tX:"50%",j:"absolute",aI:100,k:"div",tY:"50%",aJ:100,aK:100,aL:100,A:"#A0A0A0",B:"#A0A0A0",r:"inline",C:"#A0A0A0",D:"#A0A0A0",bN:{a:[{p:4,h:"72"},{p:11}]},aP:"pointer",w:"",x:"visible",I:"None",a:395,J:"None"},"57":{aU:8,G:"#FEF4D4",c:249,bS:"12",aV:8,r:"inline",d:51,s:"Pacifico",t:36,Z:"break-word",i:"textoFooter",w:"Chose the color",bF:"66",j:"absolute",x:"visible",k:"div",y:"preserve",z:"2",aS:8,aT:8,a:6,b:44},"66":{k:"div",x:"visible",c:747,d:162,z:"4",a:10,bS:"7",j:"absolute",b:774},"114":{h:"91",p:"no-repeat",x:"visible",a:581,q:"100% 100%",bS:"5",j:"absolute",r:"inline",c:45,k:"div",z:"19",d:39,b:309},"58":{c:117,bS:"33",d:112,I:"Solid",r:"inline",J:"Solid",K:"Solid",g:"#FFFFFF",L:"Solid",M:1,bF:"62",aI:10,A:"#E7B84D",j:"absolute",N:1,k:"div",O:1,x:"visible",B:"#E7B84D",z:"1",P:1,D:"#E7B84D",C:"#E7B84D",aK:10,aJ:10,a:0,aL:10,b:0},"67":{k:"div",x:"visible",c:728.5,d:133.5,z:"13",r:"inline",a:19,j:"absolute",bS:"39",b:10},"120":{h:"116",p:"no-repeat",x:"visible",a:467,q:"100% 100%",bS:"5",j:"absolute",r:"none",c:264,k:"div",z:"23",d:179,i:"techoOk",b:346},"59":{c:747,bS:"7",d:154,I:"None",r:"inline",J:"None",K:"None",g:"#E26737",L:"None",M:0,w:"",aI:10,A:"#A0A0A0",j:"absolute",bF:"66",k:"div",N:0,O:0,x:"visible",z:"1",B:"#A0A0A0",D:"#A0A0A0",P:0,C:"#A0A0A0",aK:10,aJ:10,a:0,aL:10,b:8},"68":{c:726,bS:"7",d:45,I:"Solid",r:"inline",J:"Solid",K:"Solid",g:"#92B52A",L:"Solid",M:1,w:"",bF:"100",A:"#A0A0A0",x:"visible",j:"absolute",k:"div",N:1,O:1,B:"#A0A0A0",z:"2",P:1,D:"#A0A0A0",C:"#A0A0A0",a:0,b:533},"102":{b:806,z:"27",K:"None",c:100,L:"None",d:100,M:0,bD:"none",N:0,bS:"5",O:0,g:"#C85D2A",P:0,i:"colorNaranja",tX:"50%",j:"absolute",aI:100,k:"div",tY:"50%",aJ:100,aK:100,aL:100,A:"#A0A0A0",B:"#A0A0A0",r:"inline",C:"#A0A0A0",D:"#A0A0A0",bN:{a:[{p:4,h:"72"},{p:11}]},aP:"pointer",w:"",x:"visible",I:"None",a:507,J:"None"}},n:"ejemplo",T:{"112":{i:"112",n:"regresoColorAzul",z:1,j:{"3":[{g:856,c:473,h:669,d:385,i:856,e:473,f:669,b:385}]},a:[{o:"103",y:0,z:1,i:"b",e:806,a:"3",r:1,f:"2",s:423},{o:"103",y:0,z:1,i:"a",e:619,a:"3",r:1,f:"2",s:335},{y:1,i:"b",s:806,z:0,o:"103",f:"2"},{y:1,i:"a",s:619,z:0,o:"103",f:"2"}],f:30},"115":{i:"115",n:"animacionManzana",z:0.2,j:{"4":[{g:656,c:512,h:91,d:90,i:692,e:512,f:82,b:90},{g:700,c:692,h:130,d:96,i:685,e:711,f:115,b:91},{g:698,c:685,h:145,d:152,i:698,e:663,f:145,b:130}]},a:[{o:"113",y:0,z:0.2,i:"b",e:668.5,a:"4",f:"2",s:482.5},{o:"113",y:0,z:0.2,i:"a",e:119.5,a:"4",f:"2",s:64.5},{y:0.2,i:"b",s:668.5,z:0,o:"113",f:"2"},{y:0.2,i:"a",s:119.5,z:0,o:"113",f:"2"}],f:30},"97":{i:"97",n:"arcoIris",z:1,a:[{f:"2",y:0,z:1,i:"f",e:"0deg",s:"180deg",o:"96"},{y:1,i:"f",s:"0deg",z:0,o:"96",f:"2"}],f:30},"111":{i:"111",n:"regresoColorNaranja",z:1,j:{"2":[{g:856,c:460,h:557,d:384,i:856,e:460,f:557,b:384}]},a:[{o:"102",y:0,z:1,i:"b",e:806,a:"2",r:1,f:"2",s:410},{o:"102",y:0,z:1,i:"a",e:507,a:"2",r:1,f:"2",s:334},{y:1,i:"b",s:806,z:0,o:"102",f:"2"},{y:1,i:"a",s:507,z:0,o:"102",f:"2"}],f:30},"77":{i:"77",n:"regresoColorRojo",z:1,j:{"0":[{g:857,c:473,h:446,d:385,i:857,e:473,f:446,b:385}]},a:[{o:"74",y:0,z:1,i:"b",e:807,a:"0",r:1,f:"2",s:423},{o:"74",y:0,z:1,i:"a",e:396,a:"0",r:1,f:"2",s:335},{y:1,i:"a",s:396,z:0,o:"74",f:"2"},{y:1,i:"b",s:807,z:0,o:"74",f:"2"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Control temporal principal",z:0,a:[],f:30},"107":{i:"107",n:"regresoColorVerde",z:1,j:{"1":[{g:855,c:473,h:333,d:385,i:855,e:473,f:333,b:385}]},a:[{o:"71",y:0,z:1,i:"b",e:805,a:"1",r:1,f:"2",s:423},{o:"71",y:0,z:1,i:"a",e:283,a:"1",r:1,f:"2",s:335},{y:1,i:"b",s:805,z:0,o:"71",f:"2"},{y:1,i:"a",s:283,z:0,o:"71",f:"2"}],f:30},"126":{i:"126",n:"congratulations",z:3,a:[{f:"2",y:0,z:1,i:"G",e:"#7C1A22",s:"#FFFB00",o:"125"},{f:"2",p:2,y:0,z:3,i:"ActionHandler",e:{a:[{b:"126",p:9,i:0}]},s:{a:[{b:"126",p:3,z:false}]},o:"126"},{f:"2",y:1,z:1,i:"G",e:"#93B82E",s:"#7C1A22",o:"125"},{f:"2",y:2,z:1,i:"G",e:"#FFFB00",s:"#93B82E",o:"125"},{f:"2",p:2,y:3,z:0,i:"ActionHandler",s:{a:[{b:"126",p:3,z:false}]},o:"126"},{y:3,i:"G",s:"#FFFB00",z:0,o:"125",f:"2"}],f:30}},o:"26"}]);a.z_q(768,946);a.z_e(l);a.z_p=g;a.z_f(0);a.z_g(d);a.z_h(h);
a.z_i(0);a.z_j(true);a.z_k(true);a.z_l(true);a.z_m(true);a.z_n(e);f[e]=a.API;document.getElementById(d).setAttribute("HYP_dn",e);a.z_o(this.body)}})();})();
