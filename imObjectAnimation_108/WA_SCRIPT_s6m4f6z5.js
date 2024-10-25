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
window.fE5D27ED26F79FAE01B211D53F95B8166 = function(callback) { if (!window.WA) { setTimeout(function () { fE5D27ED26F79FAE01B211D53F95B8166(callback) }, 100); } else { for (var i = 0; i < functs.length; i++) { functs[i](); } if ($.isFunction(callback)) { callback(); } } };

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




function New_Projectstart() {    

    try
    {   
        if (navigator.userAgent.match(/msie/i))
		{			
            
		    return;            
		}

    var New_Project = new WA();
New_Project.custom = {
}

New_Project.stage = [{            

            // SCENE 1
            'Oid': 'X8d047ce_af64b0435ad56a0607583644648133e7',
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
                    'Oid': 'X8d056d0_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '109px',
                    'Left': '47px',
                    'Height': '488px',
                    'Width': '287px',
                    'ZIndex': '2','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 01 laurel.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d056f2_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '504px',
                    'Left': '46px',
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
                    'Oid': 'X8d05733_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '26px',
                    'Left': '329px',
                    'Height': '572px',
                    'Width': '314px',
                    'ZIndex': '3','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 02 ceiba.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X8d05781_af64b0435ad56a0607583644648133e7',
'OnMouseOverTransition' : 'fade',
'OnMouseOverTransitionSpeed' : '500',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d05750_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '26px',
                    'Left': '641px',
                    'Height': '571px',
                    'Width': '309px',
                    'ZIndex': '4','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 03 alcatraz.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X8d057b4_af64b0435ad56a0607583644648133e7',
'OnMouseOverTransition' : 'fade',
'OnMouseOverTransitionSpeed' : '500',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d05765_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '614px',
                    'Left': '42px',
                    'Height': '479px',
                    'Width': '913px',
                    'ZIndex': '5','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/ficha 01 laurel.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d0586f_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': 'Click'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '117px',
                    'Left': '-410px',
                    'Height': '20px',
                    'Width': '120px',
                    'ZIndex': '6','Background': [{
                                    'BackgroundColor': '',
                                    'BackgroundGradientType':'linear',
                                    'BackgroundGradientStart' : 'left top',
                                    'BackgroundGradientEnd' : 'right top',
                                    'BackgroundGradientColor1' : '#CFCFCF',
                                    'BackgroundGradientColor2' : '#F2F2F2',
                                    'BackgroundGradientAngle': '90deg'
                                }],'Display': 'block','TextAlign': 'Center',
                
                        'BorderLeftColor': '#B5B5B5',
                        'BorderLeftWidth': '1px',
                        'BorderLeftStyle': 'solid', 
                        'BorderRightColor': '#B5B5B5',
                        'BorderRightWidth': '1px',
                        'BorderRightStyle': 'solid', 
                        'BorderTopColor': '#B5B5B5',
                        'BorderTopWidth': '1px',
                        'BorderTopStyle': 'solid', 
                        'BorderBottomColor': '#B5B5B5',
                        'BorderBottomWidth': '1px',
                        'BorderBottomStyle': 'solid','BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '15px',
                'LineHeight': '1.5em',

                

                'Visible': 'true',




'Pressed': [
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#F2F2F2',
                             'BackgroundGradientType':'linear',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#FFFFFF',
                             'BackgroundGradientColor2' : '#FFFFFF',
                             'BackgroundGradientAngle': '90deg'
                         }],
                    
                    'Hover': [
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#F2F2F2',
                             'BackgroundGradientType':'linear',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#F2F2F2',
                             'BackgroundGradientColor2' : '#CFCFCF',
                             'BackgroundGradientAngle': '90deg'
                         }],},
                {
                    'Oid': 'X8d05875_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '52px',
                    'Left': '-10px',
                    'Height': '574px',
                    'Width': '401px',
                    'ZIndex': '7','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/color 01 laurel.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
            'Oid': 'X8d05781_af64b0435ad56a0607583644648133e7',
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
                    'Oid': 'X8d05784_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '109px',
                    'Left': '47px',
                    'Height': '488px',
                    'Width': '287px',
                    'ZIndex': '2','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 01 laurel.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X8d047ce_af64b0435ad56a0607583644648133e7',
'OnMouseOverTransition' : 'fade',
'OnMouseOverTransitionSpeed' : '500',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d05787_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '504px',
                    'Left': '46px',
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
                    'Oid': 'X8d0578a_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '26px',
                    'Left': '329px',
                    'Height': '572px',
                    'Width': '314px',
                    'ZIndex': '3','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 02 ceiba.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d0578d_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '26px',
                    'Left': '641px',
                    'Height': '571px',
                    'Width': '309px',
                    'ZIndex': '4','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 03 alcatraz.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X8d057b4_af64b0435ad56a0607583644648133e7',
'OnMouseOverTransition' : 'fade',
'OnMouseOverTransitionSpeed' : '500',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d057e5_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '614px',
                    'Left': '42px',
                    'Height': '480px',
                    'Width': '913px',
                    'ZIndex': '5','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/ficha 02 ceiba.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d05890_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '-31px',
                    'Left': '272px',
                    'Height': '637px',
                    'Width': '427px',
                    'ZIndex': '6','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/color 02 ceiba.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
            'Oid': 'X8d057b4_af64b0435ad56a0607583644648133e7',
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
                    'Oid': 'X8d057b7_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '109px',
                    'Left': '47px',
                    'Height': '488px',
                    'Width': '287px',
                    'ZIndex': '2','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 01 laurel.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X8d047ce_af64b0435ad56a0607583644648133e7',
'OnMouseOverTransition' : 'fade',
'OnMouseOverTransitionSpeed' : '500',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d057ba_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '504px',
                    'Left': '46px',
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
                    'Oid': 'X8d057bd_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '26px',
                    'Left': '329px',
                    'Height': '572px',
                    'Width': '314px',
                    'ZIndex': '3','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 02 ceiba.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X8d05781_af64b0435ad56a0607583644648133e7',
'OnMouseOverTransition' : 'fade',
'OnMouseOverTransitionSpeed' : '500',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d057c0_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '26px',
                    'Left': '641px',
                    'Height': '571px',
                    'Width': '309px',
                    'ZIndex': '4','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 03 alcatraz.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d057e8_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '614px',
                    'Left': '42px',
                    'Height': '479px',
                    'Width': '913px',
                    'ZIndex': '5','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/ficha 03 alcatraz.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X8d058a8_af64b0435ad56a0607583644648133e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '-30px',
                    'Left': '584px',
                    'Height': '615px',
                    'Width': '423px',
                    'ZIndex': '6','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_108/color 03 alcatraz.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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

            New_Project.init();
            New_Project.stageHeight = 1100;
            New_Project.stageWidth  = 1000;
            New_Project.t  = '282105228280568903456077009234435212110';
            New_Project.stageInitialTransition = 'instant';
            New_Project.stageInitialTransitionDirection = 'left';
            New_Project.stageInitialTransitionSpeed = 1000;

            New_Project.responsiveStage = false;
            New_Project.responsiveStageKeepRatio = false;
            New_Project.scaleX = 1;
            New_Project.scaleY = 1;
            New_Project.scale = 1;

            New_Project.showBrowserCompatibilityCheck = false;
                New_Project.loaderType = 1;
                New_Project.loaderBackgroundColor = '#000';
                New_Project.loaderForegroundColor = '#fff';
            New_Project.stageInitialScene = 'X8d047ce_af64b0435ad56a0607583644648133e7';
            New_Project.debug = false;
            New_Project.preloadImages = true;
New_Project.imagesToPreload = [
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 01 laurel.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/piso.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 02 ceiba.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 03 alcatraz.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/ficha 01 laurel.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/color 01 laurel.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 01 laurel.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/piso.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 02 ceiba.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 03 alcatraz.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/ficha 02 ceiba.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/color 02 ceiba.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 01 laurel.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/piso.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 02 ceiba.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/gris 03 alcatraz.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/ficha 03 alcatraz.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_108/color 03 alcatraz.png'
];New_Project.createWorkspace('imObjectAnimation_108_stage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('imObjectAnimation_108_stage');
addLoadEvent(New_Projectstart);


 })( wajq );