(function ( $ ) { 

function loadjscssfile(filename, filetype) {
    
    if (filetype=="js") { 

        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filename);
    }
    else if (filetype=="css") { 

        var fileref=document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }

    if (typeof fileref!="undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
}



var functs = Array();
window.f945BD3110F5A7F55B79D126CED298AB4 = function(callback) { if (!window.WA) { setTimeout(function () { f945BD3110F5A7F55B79D126CED298AB4(callback) }, 100); } else { for (var i = 0; i < functs.length; i++) { functs[i](); } if ($.isFunction(callback)) { callback(); } } };

function addLoadEvent(func) {
	functs.push(func);
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
       window.onload = func
    } else {
       window.onload = function() {
           if (oldonload) {
                  oldonload()
          }
          func()
       }
   }
} 


function loadResources(thisId) {

   var firstWaDiv = $('.wascript:first');
       
       var firstId = $(firstWaDiv).attr('id');
       
       if(firstId == thisId) {

            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_108/WA.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "wa-animations/modernizr.custom.43133.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "wa-animations/spin.min.js", "js");

            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_108/JQ_Textualizer.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_108/WA.min.css", "css");            
       }
	   
	   loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_108/ani.css", "css");                          
}
	// Global variables




function carrusel_chicostart() {    

    try
    {   
        if (navigator.userAgent.match(/msie/i))
		{			
            
		    return;            
		}

    var carrusel_chico = new WA();
carrusel_chico.custom = {
}

carrusel_chico.stage = [{            

            // SCENE 1
            'Oid': 'X8d09d97_af64b0435ad56a0607583644648133e7',
            'Name': 'SCENE_1',
            'Autostart': 'true',
            'BackgroundColor': '#000050',
            'SceneEnd': 100,
            'Position': 'absolute',
            'Perspective': '800px',
            'Top': '0px',
            'Left': '0px',






                            'Timelines': [
            {
                'Oid': 'MAIN_TIMELINE',
                'Name': 'Main timeline',
                'Objects': [
                
                    
                    
                {
                    'Oid': 'X8d09d9a_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '498px',
                    'Left': '28px',
                    'Height': '105px',
                    'Width': '904px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/piso.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d09d9d_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '104px',
                    'Left': '27px',
                    'Height': '446px',
                    'Width': '288px',
                    'ZIndex': '3','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 01 laurel.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d09da0_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '310px',
                    'Height': '514px',
                    'Width': '314px',
                    'ZIndex': '4','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 02 ceiba.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X8d09dca_af64b0435ad56a0607583644648133e7',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '300',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d09da3_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '622px',
                    'Height': '496px',
                    'Width': '310px',
                    'ZIndex': '5','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 03 alcatraz.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X8d09dfd_af64b0435ad56a0607583644648133e7',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '300',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d09e34_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '104px',
                    'Left': '28px',
                    'Height': '446px',
                    'Width': '288px',
                    'ZIndex': '7','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/color 01 laurel.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d0a01a_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '124px',
                    'Left': '939px',
                    'Height': '480px',
                    'Width': '388px',
                    'ZIndex': '0','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/ficha 01 laurel11.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    

			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            }]
},

{            

            // SCENE 2
            'Oid': 'X8d09dca_af64b0435ad56a0607583644648133e7',
            'Name': 'SCENE_2',
            'Autostart': 'true',
            'BackgroundColor': '#000050',
            'SceneEnd': 100,
            'Position': 'absolute',
            'Perspective': '800px',
            'Top': '0px',
            'Left': '0px',






                            'Timelines': [
            {
                'Oid': 'MAIN_TIMELINE',
                'Name': 'Main timeline',
                'Objects': [
                
                    
                    
                {
                    'Oid': 'X8d09dcd_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '498px',
                    'Left': '28px',
                    'Height': '105px',
                    'Width': '904px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/piso.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d09dd0_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '104px',
                    'Left': '27px',
                    'Height': '446px',
                    'Width': '288px',
                    'ZIndex': '3','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 01 laurel.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X8d09d97_af64b0435ad56a0607583644648133e7',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '300',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d09dd3_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '310px',
                    'Height': '514px',
                    'Width': '314px',
                    'ZIndex': '4','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 02 ceiba.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d09dd6_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '622px',
                    'Height': '496px',
                    'Width': '310px',
                    'ZIndex': '5','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 03 alcatraz.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X8d09dfd_af64b0435ad56a0607583644648133e7',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '300',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d09e37_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '19px',
                    'Left': '310px',
                    'Height': '515px',
                    'Width': '314px',
                    'ZIndex': '7','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/color 02 ceiba.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d0a030_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '124px',
                    'Left': '939px',
                    'Height': '480px',
                    'Width': '388px',
                    'ZIndex': '0','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/ficha 02 ceiba1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    

			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            }]
},

{            

            // SCENE 3
            'Oid': 'X8d09dfd_af64b0435ad56a0607583644648133e7',
            'Name': 'SCENE_3',
            'Autostart': 'true',
            'BackgroundColor': '#000050',
            'SceneEnd': 100,
            'Position': 'absolute',
            'Perspective': '800px',
            'Top': '0px',
            'Left': '0px',






                            'Timelines': [
            {
                'Oid': 'MAIN_TIMELINE',
                'Name': 'Main timeline',
                'Objects': [
                
                    
                    
                {
                    'Oid': 'X8d09e00_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '498px',
                    'Left': '28px',
                    'Height': '105px',
                    'Width': '904px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/piso.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d09e03_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '104px',
                    'Left': '27px',
                    'Height': '446px',
                    'Width': '288px',
                    'ZIndex': '3','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 01 laurel.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X8d09d97_af64b0435ad56a0607583644648133e7',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '300',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d09e06_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '310px',
                    'Height': '514px',
                    'Width': '314px',
                    'ZIndex': '4','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 02 ceiba.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X8d09dca_af64b0435ad56a0607583644648133e7',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '300',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d09e09_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '622px',
                    'Height': '496px',
                    'Width': '310px',
                    'ZIndex': '5','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 03 alcatraz.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d09e3a_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '622px',
                    'Height': '496px',
                    'Width': '309px',
                    'ZIndex': '7','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/color 03 alcatraz.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d0a043_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '124px',
                    'Left': '939px',
                    'Height': '480px',
                    'Width': '388px',
                    'ZIndex': '0','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/ficha 03 alcatraz1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    

			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            }]
}];

            carrusel_chico.init();
            carrusel_chico.stageHeight = 620;
            carrusel_chico.stageWidth  = 1366;
            carrusel_chico.t  = '483005211281568903456077009234435212110';
            carrusel_chico.stageInitialTransition = 'instant';
            carrusel_chico.stageInitialTransitionDirection = 'left';
            carrusel_chico.stageInitialTransitionSpeed = 1000;

            carrusel_chico.responsiveStage = false;
            carrusel_chico.responsiveStageKeepRatio = false;
            carrusel_chico.scaleX = 1;
            carrusel_chico.scaleY = 1;
            carrusel_chico.scale = 1;

            carrusel_chico.showBrowserCompatibilityCheck = false;
                carrusel_chico.loaderType = 1;
                carrusel_chico.loaderBackgroundColor = '#000';
                carrusel_chico.loaderForegroundColor = '#fff';
            carrusel_chico.stageInitialScene = 'X8d09d97_af64b0435ad56a0607583644648133e7';
            carrusel_chico.debug = false;
            carrusel_chico.preloadImages = true;
carrusel_chico.imagesToPreload = [
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/piso.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 01 laurel.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 02 ceiba.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 03 alcatraz.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/color 01 laurel.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/ficha 01 laurel11.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/piso.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 01 laurel.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 02 ceiba.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 03 alcatraz.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/color 02 ceiba.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/ficha 02 ceiba1.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/piso.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 01 laurel.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 02 ceiba.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 03 alcatraz.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/color 03 alcatraz.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/ficha 03 alcatraz1.png'
];carrusel_chico.createWorkspace('imObjectAnimation_108_stage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('imObjectAnimation_108_stage');
addLoadEvent(carrusel_chicostart);


 })( wajq );