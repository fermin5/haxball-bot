

/*-------------------------------- STADIUMS ---------------------------------*/

function getRealSoccerMap3() {
	var realSoccerMap3 = `{

	"name" : "Entrenamiento RS",

	"width" : 1300,

	"height" : 710,

	"spawnDistance" : 560,

	"maxViewWidth" : 0,

	"cameraFollow" : "player",

	"redSpawnPoints" : [
		[ -199, 0
		],
		[ -180, -86
		],
		[ -180, 86
		],
		[ -290, 0
		],
		[ -257, -86
		],
		[ -257, 86
		],
		[ -393, 0
		],
		[ -369, -86
		],
		[ -366, 86
		],
		[ -487, 0
		],
		[ -132, 681
		]

	],

	"blueSpawnPoints" : [
		[ 199, 0
		],
		[ 180, -86
		],
		[ 180, 86
		],
		[ 290, 0
		],
		[ 257, -86
		],
		[ 257, 86
		],
		[ 393, 0
		],
		[ 369, -86
		],
		[ 366, 86
		],
		[ 487, 0
		],
		[ 132, 681
		]

	],

	"bg" : { "type" : "grass", "width" : 1260, "height" : 650, "kickOffRadius" : 180, "cornerRadius" : 0, "color" : "43774e" },

	"playerPhysics" : {
		"bCoef" : 0.3,
		"invMass" : 0.5,
		"damping" : 0.96,
		"acceleration" : 0.12,
		"kickingAcceleration" : 0.07,
		"kickingDamping" : 0.96,
		"kickStrength" : 5.65

	},

	"ballPhysics" : {
		"radius" : 9,
		"bCoef" : 0.5,
		"invMass" : 1.05,
		"damping" : 0.99,
		"color" : "9669ff",
		"cMask" : [ "all"
		],
		"cGroup" : [ "ball"
		]

	},

	"vertexes" : [
		/* 0 */ { "x" : 1150, "y" : 320, "trait" : "line" },
		/* 1 */ { "x" : 840, "y" : 320, "trait" : "line" },
		/* 2 */ { "x" : 1150, "y" : -320, "trait" : "line" },
		/* 3 */ { "x" : 840, "y" : -320, "trait" : "line" },
		/* 4 */ { "x" : 1150, "y" : 180, "trait" : "line" },
		/* 5 */ { "x" : 1030, "y" : 180, "trait" : "line" },
		/* 6 */ { "x" : 1150, "y" : -180, "trait" : "line" },
		/* 7 */ { "x" : 1030, "y" : -180, "trait" : "line" },
		/* 8 */ { "x" : 840, "y" : -130, "trait" : "line", "curve" : -130 },
		/* 9 */ { "x" : 840, "y" : 130, "trait" : "line", "curve" : -130 },
		/* 10 */ { "x" : -1150, "y" : -320, "trait" : "line" },
		/* 11 */ { "x" : -840, "y" : -320, "trait" : "line" },
		/* 12 */ { "x" : -1150, "y" : 320, "trait" : "line" },
		/* 13 */ { "x" : -840, "y" : 320, "trait" : "line" },
		/* 14 */ { "x" : -1150, "y" : -175, "trait" : "line" },
		/* 15 */ { "x" : -1030, "y" : -175, "trait" : "line" },
		/* 16 */ { "x" : -1150, "y" : 175, "trait" : "line" },
		/* 17 */ { "x" : -1030, "y" : 175, "trait" : "line" },
		/* 18 */ { "x" : -840, "y" : 130, "trait" : "line", "curve" : -130 },
		/* 19 */ { "x" : -840, "y" : -130, "trait" : "line", "curve" : -130 },
		/* 20 */ { "x" : 935, "y" : 3, "trait" : "line" },
		/* 21 */ { "x" : 935, "y" : -3, "trait" : "line" },
		/* 22 */ { "x" : -935, "y" : 3, "trait" : "line" },
		/* 23 */ { "x" : -935, "y" : -3, "trait" : "line" },
		/* 24 */ { "x" : -1150, "y" : 570, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
		/* 25 */ { "x" : -1120, "y" : 600, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
		/* 26 */ { "x" : -1120, "y" : -600, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
		/* 27 */ { "x" : -1150, "y" : -570, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
		/* 28 */ { "x" : 1120, "y" : 600, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
		/* 29 */ { "x" : 1150, "y" : 570, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
		/* 30 */ { "x" : 1150, "y" : -570, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
		/* 31 */ { "x" : 1120, "y" : -600, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
		/* 32 */ { "x" : -1030, "y" : -40, "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "curve" : 70, "color" : "576C46", "vis" : false },
		/* 33 */ { "x" : -1030, "y" : 40, "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "curve" : 70, "color" : "576C46", "vis" : false },
		/* 34 */ { "x" : 1030, "y" : -40, "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "curve" : -70, "color" : "576C46", "vis" : false },
		/* 35 */ { "x" : 1030, "y" : 40, "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "curve" : -70, "color" : "576C46", "vis" : false },
		/* 36 */ { "x" : 1030, "y" : -40, "trait" : "line", "color" : "576C46" },
		/* 37 */ { "x" : 1030, "y" : 40, "trait" : "line", "color" : "576C46" },
		/* 38 */ { "x" : -1030, "y" : -40, "trait" : "line", "color" : "576C46" },
		/* 39 */ { "x" : -1030, "y" : 40, "trait" : "line", "color" : "576C46" },
		/* 40 */ { "x" : 0, "y" : 3, "trait" : "line" },
		/* 41 */ { "x" : 0, "y" : -3, "trait" : "line" },
		
		/* 42 */ { "x" : -1157, "y" : 605, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 43 */ { "x" : -1157, "y" : 655, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 44 */ { "x" : -1157, "y" : -655, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 45 */ { "x" : -1157, "y" : -605, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 46 */ { "x" : 1157, "y" : 605, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 47 */ { "x" : 1157, "y" : 655, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 48 */ { "x" : 1157, "y" : -655, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 49 */ { "x" : 1157, "y" : -605, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		
		/* 50 */ { "x" : -1300, "y" : -485, "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "color" : "ec644b", "vis" : false },
		/* 51 */ { "x" : 1300, "y" : -485, "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "color" : "ec644b", "vis" : false },
		/* 52 */ { "x" : -1300, "y" : 485, "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "color" : "ec644b", "vis" : false },
		/* 53 */ { "x" : 1300, "y" : 485, "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "color" : "ec644b", "vis" : false },
		/* 54 */ { "x" : -1295, "y" : -320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		/* 55 */ { "x" : -840, "y" : -320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		/* 56 */ { "x" : -840, "y" : 320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		/* 57 */ { "x" : -1295, "y" : 320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		/* 58 */ { "x" : 1295, "y" : -320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		/* 59 */ { "x" : 840, "y" : -320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		/* 60 */ { "x" : 840, "y" : 320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		/* 61 */ { "x" : 1295, "y" : 320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		/* 62 */ { "x" : -1150, "y" : -124, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ] },
		/* 63 */ { "x" : -1210, "y" : -124, "bCoef" : 0, "bias" : 0, "curve" : 5, "cGroup" : ["red","blue" ], "radius" : 4.5, "cMask" : ["ball" ], "color" : "f2d8d8" },
		/* 64 */ { "x" : -1150, "y" : 124, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ] },
		/* 65 */ { "x" : -1210, "y" : 124, "bCoef" : 0, "bias" : 0, "curve" : 5, "cGroup" : ["red","blue" ], "radius" : 4.5, "vis" : false, "cMask" : ["ball" ], "color" : "f2d8d8" },
		/* 66 */ { "x" : -1250, "y" : -158, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "color" : "f2d8d8" },
		/* 67 */ { "x" : -1250, "y" : 158, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "color" : "f2d8d8" },
		/* 68 */ { "x" : 1150, "y" : 124, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "color" : "ffffff" },
		/* 69 */ { "x" : 1210, "y" : 124, "bCoef" : 0, "curve" : -5, "cGroup" : ["red","blue" ], "cMask" : ["ball" ], "color" : "ffffff" },
		/* 70 */ { "x" : 1150, "y" : -124, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "color" : "ffffff" },
		/* 71 */ { "x" : 1210, "y" : -124, "bCoef" : 0, "curve" : -5, "cGroup" : ["red","blue" ], "radius" : 6, "cMask" : ["ball" ], "color" : "ffffff" },
		/* 72 */ { "x" : 1250, "y" : -158, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "color" : "e3f9fe" },
		/* 73 */ { "x" : 1250, "y" : 158, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "color" : "e3f9fe" },
		
		/* 74 */ { "trait" : "line", "x" : -1150, "y" : 600 },
		/* 75 */ { "trait" : "line", "x" : 1150, "y" : 600 },
		/* 76 */ { "trait" : "line", "x" : -1150, "y" : 600 },
		/* 77 */ { "trait" : "line", "x" : -1150, "y" : 600 },
		/* 78 */ { "trait" : "line", "x" : -1150, "y" : -600 },
		/* 79 */ { "trait" : "line", "x" : 1150, "y" : -600 },
		/* 80 */ { "trait" : "line", "x" : 1150, "y" : 600 },
		/* 81 */ { "trait" : "line", "x" : 1150, "y" : -600 },
		/* 82 */ { "trait" : "line", "x" : -1260, "y" : -655, "color" : "43774e" },
		/* 83 */ { "trait" : "line", "x" : -1260, "y" : 655, "color" : "43774e" },
		/* 84 */ { "trait" : "line", "x" : -1262, "y" : -655, "color" : "43774e" },
		/* 85 */ { "trait" : "line", "x" : -1262, "y" : 655, "color" : "43774e" },
		/* 86 */ { "trait" : "line", "x" : -1258, "y" : -655, "color" : "43774e" },
		/* 87 */ { "trait" : "line", "x" : -1258, "y" : 655, "color" : "43774e" },
		/* 88 */ { "trait" : "line", "x" : 1260, "y" : -665, "color" : "43774e" },
		/* 89 */ { "trait" : "line", "x" : 1260, "y" : 665, "color" : "43774e" },
		/* 90 */ { "trait" : "line", "x" : 1258, "y" : -665, "color" : "43774e" },
		/* 91 */ { "trait" : "line", "x" : 1258, "y" : 665, "color" : "43774e" },
		/* 92 */ { "trait" : "line", "x" : 1262, "y" : -665, "color" : "43774e" },
		/* 93 */ { "trait" : "line", "x" : 1262, "y" : 665, "color" : "43774e" },
		/* 94 */ { "trait" : "line", "x" : -2, "y" : -646.5, "color" : "6e965d", "curve" : 0 },
		/* 95 */ { "trait" : "line", "x" : -2, "y" : -601.5, "color" : "6e965d", "curve" : 0 },
		/* 96 */ { "trait" : "line", "x" : 0, "y" : -646.5, "color" : "6e965d", "curve" : 0 },
		/* 97 */ { "trait" : "line", "x" : 0, "y" : -601.5, "color" : "6e965d", "curve" : 0 },
		/* 98 */ { "trait" : "line", "x" : 2, "y" : -646.5, "color" : "6e965d", "curve" : 0 },
		/* 99 */ { "trait" : "line", "x" : 2, "y" : -601.5, "color" : "6e965d", "curve" : 0 },
		/* 100 */ { "trait" : "line", "x" : 0, "y" : 601.5, "color" : "7ea170", "curve" : 0 },
		/* 101 */ { "trait" : "line", "x" : 0, "y" : 646.5, "color" : "7ea170", "curve" : 0 },
		/* 102 */ { "trait" : "line", "x" : -2, "y" : 601.5, "color" : "7ea170", "curve" : 0 },
		/* 103 */ { "trait" : "line", "x" : -2, "y" : 646.5, "color" : "7ea170", "curve" : 0 },
		/* 104 */ { "trait" : "line", "x" : 2, "y" : 601.5, "color" : "7ea170", "curve" : 0 },
		/* 105 */ { "trait" : "line", "x" : 2, "y" : 646.5, "color" : "7ea170", "curve" : 0 },
		/* 106 */ { "trait" : "line", "x" : 1.142081210865527, "y" : -647.4445926432836, "color" : "7ea170", "curve" : 0 },
		/* 107 */ { "trait" : "line", "x" : -30.602942100934982, "y" : -615.5501809864863, "color" : "7ea170", "curve" : 0 },
		/* 108 */ { "trait" : "line", "x" : 2.559610617834295, "y" : -646.0337027183147, "color" : "7ea170", "curve" : 0 },
		/* 109 */ { "trait" : "line", "x" : -29.185412693966214, "y" : -614.1392910615175, "color" : "7ea170", "curve" : 0 },
		/* 110 */ { "trait" : "line", "x" : -1265, "y" : -650, "color" : "43774e", "curve" : 0 },
		/* 111 */ { "trait" : "line", "x" : 1265, "y" : -650, "color" : "43774e", "curve" : 0 },
		/* 112 */ { "trait" : "line", "x" : -1265, "y" : -648, "color" : "43774e", "curve" : 0 },
		/* 113 */ { "trait" : "line", "x" : 1265, "y" : -648, "color" : "43774e", "curve" : 0 },
		/* 114 */ { "trait" : "line", "x" : -1265, "y" : -652, "color" : "43774e", "curve" : 0 },
		/* 115 */ { "trait" : "line", "x" : 1265, "y" : -652, "color" : "43774e", "curve" : 0 },
		/* 116 */ { "trait" : "line", "x" : 28.41038434498239, "y" : 618.0793890634807, "color" : "6e965d", "curve" : 0 },
		/* 117 */ { "trait" : "line", "x" : -3.6831242630433323, "y" : 649.6231159394631, "color" : "6e965d", "curve" : 0 },
		/* 118 */ { "trait" : "line", "x" : 27.008440928272066, "y" : 616.6530109031239, "color" : "6e965d", "curve" : 0 },
		/* 119 */ { "trait" : "line", "x" : -5.085067679753664, "y" : 648.1967377791065, "color" : "6e965d", "curve" : 0 },
		/* 120 */ { "trait" : "line", "x" : -1265, "y" : 650, "color" : "43774e", "curve" : 0 },
		/* 121 */ { "trait" : "line", "x" : 1265, "y" : 650, "color" : "43774e", "curve" : 0 },
		/* 122 */ { "trait" : "line", "x" : -1265, "y" : 652, "color" : "43774e", "curve" : 0 },
		/* 123 */ { "trait" : "line", "x" : 1265, "y" : 652, "color" : "43774e", "curve" : 0 },
		/* 124 */ { "trait" : "line", "x" : -1265, "y" : 648, "color" : "43774e", "curve" : 0 },
		/* 125 */ { "trait" : "line", "x" : 1265, "y" : 648, "color" : "43774e", "curve" : 0 },
		/* 126 */ { "trait" : "line", "x" : -1239.5240259394243, "y" : -652.4006293133806, "curve" : -90 },
		/* 127 */ { "trait" : "line", "x" : -1260.3289235748528, "y" : -633.661466194945, "curve" : -90 },
		/* 128 */ { "trait" : "line", "x" : -1238.1855142881075, "y" : -650.9145651965642, "curve" : -90 },
		/* 129 */ { "trait" : "line", "x" : -1258.990411923536, "y" : -632.1754020781286, "curve" : -90 },
		/* 130 */ { "trait" : "line", "x" : -1236.8470026367906, "y" : -649.428501079748, "curve" : -90 },
		/* 131 */ { "trait" : "line", "x" : -1257.651900272219, "y" : -630.6893379613123, "curve" : -90 },
		/* 132 */ { "trait" : "line", "x" : -1260.8893083322516, "y" : 631.2171531285527, "curve" : -90 },
		/* 133 */ { "trait" : "line", "x" : -1241.9730164936645, "y" : 651.8611329550639, "curve" : -90 },
		/* 134 */ { "trait" : "line", "x" : -1259.4147383446436, "y" : 629.8659894257964, "curve" : -90 },
		/* 135 */ { "trait" : "line", "x" : -1240.4984465060566, "y" : 650.5099692523077, "curve" : -90 },
		/* 136 */ { "trait" : "line", "x" : -1257.9401683570356, "y" : 628.5148257230403, "curve" : -90 },
		/* 137 */ { "trait" : "line", "x" : -1239.0238765184486, "y" : 649.1588055495515, "curve" : -90 },
		/* 138 */ { "trait" : "line", "x" : 1240.6332966050222, "y" : 651.0394293358713, "curve" : -90 },
		/* 139 */ { "trait" : "line", "x" : 1261.114850634535, "y" : 631.9473905621797, "curve" : -90 },
		/* 140 */ { "trait" : "line", "x" : 1239.2695795497584, "y" : 649.5764611909061, "curve" : -90 },
		/* 141 */ { "trait" : "line", "x" : 1259.7511335792713, "y" : 630.4844224172144, "curve" : -90 },
		/* 142 */ { "trait" : "line", "x" : 1237.9058624944948, "y" : 648.1134930459408, "curve" : -90 },
		/* 143 */ { "trait" : "line", "x" : 1258.3874165240077, "y" : 629.0214542722492, "curve" : -90 },
		/* 144 */ { "trait" : "line", "x" : 1260.3945318749338, "y" : -631.2611957749441, "curve" : -90 },
		/* 145 */ { "trait" : "line", "x" : 1241.3024931012424, "y" : -651.7427498044569, "curve" : -90 },
		/* 146 */ { "trait" : "line", "x" : 1258.9315637299687, "y" : -629.8974787196803, "curve" : -90 },
		/* 147 */ { "trait" : "line", "x" : 1239.8395249562768, "y" : -650.3790327491931, "curve" : -90 },
		/* 148 */ { "trait" : "line", "x" : 1257.4685955850032, "y" : -628.5337616644167, "curve" : -90 },
		/* 149 */ { "trait" : "line", "x" : 1238.3765568113117, "y" : -649.0153156939296, "curve" : -90 },
		
		/* 150 */ { "x" : 1149, "y" : -635, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9", "cGroup" : ["all" ] },
		/* 151 */ { "x" : 1149, "y" : -600, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9", "cGroup" : ["all" ] },
		
		/* 152 */ { "x" : 1161, "y" : -633, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 153 */ { "x" : 1175, "y" : -633, "bCoef" : 0, "cMask" : ["wall" ], "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 154 */ { "x" : 1147, "y" : -633, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "fde73b", "cGroup" : ["all" ] },
		/* 155 */ { "x" : 1161, "y" : -630, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 156 */ { "x" : 1147, "y" : -630, "bCoef" : 0, "cMask" : ["wall" ], "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 157 */ { "x" : 1175, "y" : -630, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "fde73b", "cGroup" : ["all" ] },
		/* 158 */ { "x" : 1161, "y" : -635, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 159 */ { "x" : 1175, "y" : -635, "bCoef" : 0, "cMask" : ["wall" ], "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 160 */ { "x" : 1147, "y" : -635, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "fde73b", "cGroup" : ["all" ] },
		/* 161 */ { "x" : 1161, "y" : -628, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 162 */ { "x" : 1147, "y" : -628, "bCoef" : 0, "cMask" : ["wall" ], "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 163 */ { "x" : 1175, "y" : -628, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "fde73b", "cGroup" : ["all" ] },
		
		/* 164 */ { "x" : 1169.3924124236926, "y" : 572.0916290810089, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9", "cGroup" : ["all" ] },
		/* 165 */ { "x" : 1148.4570005362957, "y" : 600.139953970475, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9", "cGroup" : ["all" ] },
		
		/* 166 */ { "x" : 1177.8126717065154, "y" : 580.8722460075145, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 167 */ { "x" : 1189.0320016623018, "y" : 589.2464107624734, "bCoef" : 0, "cMask" : ["wall" ], "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 168 */ { "x" : 1166.593341750729, "y" : 572.4980812525557, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "fde73b", "cGroup" : ["all" ] },
		/* 169 */ { "x" : 1176.0182078304529, "y" : 583.2763881408973, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 170 */ { "x" : 1164.7988778746665, "y" : 574.9022233859386, "bCoef" : 0, "cMask" : ["wall" ], "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 171 */ { "x" : 1187.2375377862393, "y" : 591.6505528958561, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "fde73b", "cGroup" : ["all" ] },
		/* 172 */ { "x" : 1179.008980957224, "y" : 579.2694845852593, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 173 */ { "x" : 1190.22831091301, "y" : 587.6436493402181, "bCoef" : 0, "cMask" : ["wall" ], "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 174 */ { "x" : 1167.7896510014373, "y" : 570.8953198303005, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "fde73b", "cGroup" : ["all" ] },
		/* 175 */ { "x" : 1174.8218985797444, "y" : 584.8791495631525, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 176 */ { "x" : 1163.602568623958, "y" : 576.5049848081937, "bCoef" : 0, "cMask" : ["wall" ], "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 177 */ { "x" : 1186.0412285355308, "y" : 593.2533143181114, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "fde73b", "cGroup" : ["all" ] },
		
		/* 178 */ { "x" : -1149, "y" : -632, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9", "cGroup" : ["all" ] },
		/* 179 */ { "x" : -1149, "y" : -597, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9", "cGroup" : ["all" ] },
		
		/* 180 */ { "x" : -1161, "y" : -631, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 181 */ { "x" : -1147, "y" : -631, "bCoef" : 0, "cMask" : ["wall" ], "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 182 */ { "x" : -1175, "y" : -631, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "fde73b", "cGroup" : ["all" ] },
		/* 183 */ { "x" : -1161, "y" : -628, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 184 */ { "x" : -1175, "y" : -628, "bCoef" : 0, "cMask" : ["wall" ], "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 185 */ { "x" : -1147, "y" : -628, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "fde73b", "cGroup" : ["all" ] },
		/* 186 */ { "x" : -1161, "y" : -633, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 187 */ { "x" : -1147, "y" : -633, "bCoef" : 0, "cMask" : ["wall" ], "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 188 */ { "x" : -1175, "y" : -633, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "fde73b", "cGroup" : ["all" ] },
		/* 189 */ { "x" : -1161, "y" : -626, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 190 */ { "x" : -1175, "y" : -626, "bCoef" : 0, "cMask" : ["wall" ], "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 191 */ { "x" : -1147, "y" : -626, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "fde73b", "cGroup" : ["all" ] },
		
		/* 192 */ { "x" : -1168.2406115927063, "y" : 572.9938153222878, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9", "cGroup" : ["all" ] },
		/* 193 */ { "x" : -1147.8317517070022, "y" : 601.4275705819381, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9", "cGroup" : ["all" ] },
		
		/* 194 */ { "x" : -1177.4062173992804, "y" : 580.8035317190905, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 195 */ { "x" : -1166.0327152954208, "y" : 572.6399877648089, "bCoef" : 0, "cMask" : ["wall" ], "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 196 */ { "x" : -1188.779719503141, "y" : 588.9670756733724, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "fde73b", "cGroup" : ["all" ] },
		/* 197 */ { "x" : -1175.6568865519346, "y" : 583.2407107413463, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 198 */ { "x" : -1187.0303886557947, "y" : 591.4042546956281, "bCoef" : 0, "cMask" : ["wall" ], "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 199 */ { "x" : -1164.2833844480745, "y" : 575.0771667870647, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "fde73b", "cGroup" : ["all" ] },
		/* 200 */ { "x" : -1178.5724379641779, "y" : 579.1787457042534, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 201 */ { "x" : -1167.198935860318, "y" : 571.0152017499719, "bCoef" : 0, "cMask" : ["wall" ], "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 202 */ { "x" : -1189.9459400680385, "y" : 587.3422896585353, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "fde73b", "cGroup" : ["all" ] },
		/* 203 */ { "x" : -1174.4906659870371, "y" : 584.8654967561835, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 204 */ { "x" : -1185.8641680908975, "y" : 593.0290407104652, "bCoef" : 0, "cMask" : ["wall" ], "color" : "f83d38", "cGroup" : ["all" ] },
		
		/* 205 */ { "x" : -1163.117163883177, "y" : 576.7019528019019, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "fde73b", "cGroup" : ["all" ] },
		/* 206 */ { "trait" : "line", "x" : -42, "y" : 682 },
		/* 207 */ { "trait" : "line", "x" : -42, "y" : 668 },
		/* 208 */ { "trait" : "line", "x" : -42, "y" : 662 },
		/* 209 */ { "trait" : "line", "x" : -42, "y" : 653 },
		/* 210 */ { "trait" : "line", "x" : -62, "y" : 653 },
		/* 211 */ { "trait" : "line", "x" : -223, "y" : 682 },
		/* 212 */ { "trait" : "line", "x" : -223, "y" : 668 },
		/* 213 */ { "trait" : "line", "x" : -223, "y" : 662 },
		/* 214 */ { "trait" : "line", "x" : -223, "y" : 653 },
		/* 215 */ { "trait" : "line", "x" : -205, "y" : 653 },
		/* 216 */ { "trait" : "line", "x" : -120, "y" : 653 },
		/* 217 */ { "trait" : "line", "x" : -96, "y" : 653 },
		/* 218 */ { "trait" : "line", "x" : -172, "y" : 653 },
		/* 219 */ { "trait" : "line", "x" : -148, "y" : 653 },
		/* 220 */ { "trait" : "line", "x" : -42, "y" : 704 },
		/* 221 */ { "trait" : "line", "x" : -42, "y" : 690 },
		/* 222 */ { "trait" : "line", "x" : -223, "y" : 704 },
		/* 223 */ { "trait" : "line", "x" : -223, "y" : 690 },
		/* 224 */ { "trait" : "line", "x" : 223, "y" : 682 },
		/* 225 */ { "trait" : "line", "x" : 223, "y" : 668 },
		/* 226 */ { "trait" : "line", "x" : 223, "y" : 662 },
		/* 227 */ { "trait" : "line", "x" : 223, "y" : 653 },
		/* 228 */ { "trait" : "line", "x" : 203, "y" : 653 },
		/* 229 */ { "trait" : "line", "x" : 42, "y" : 682 },
		/* 230 */ { "trait" : "line", "x" : 42, "y" : 668 },
		/* 231 */ { "trait" : "line", "x" : 42, "y" : 662 },
		/* 232 */ { "trait" : "line", "x" : 42, "y" : 653 },
		/* 233 */ { "trait" : "line", "x" : 60, "y" : 653 },
		/* 234 */ { "trait" : "line", "x" : 145, "y" : 653 },
		/* 235 */ { "trait" : "line", "x" : 169, "y" : 653 },
		/* 236 */ { "trait" : "line", "x" : 93, "y" : 653 },
		/* 237 */ { "trait" : "line", "x" : 117, "y" : 653 },
		/* 238 */ { "trait" : "line", "x" : 223, "y" : 704 },
		/* 239 */ { "trait" : "line", "x" : 223, "y" : 690 },
		/* 240 */ { "trait" : "line", "x" : 42, "y" : 704 },
		/* 241 */ { "trait" : "line", "x" : 42, "y" : 690 }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "trait" : "line", "y" : 320 },
		{ "v0" : 1, "v1" : 3, "trait" : "line", "x" : 840 },
		{ "v0" : 2, "v1" : 3, "trait" : "line", "y" : -320 },
		{ "v0" : 4, "v1" : 5, "trait" : "line", "y" : 180 },
		{ "v0" : 5, "v1" : 7, "trait" : "line", "x" : 1030 },
		{ "v0" : 6, "v1" : 7, "trait" : "line", "y" : -180 },
		{ "v0" : 8, "v1" : 9, "curve" : -130, "trait" : "line", "x" : 840 },
		{ "v0" : 10, "v1" : 11, "trait" : "line", "y" : -320 },
		{ "v0" : 11, "v1" : 13, "trait" : "line", "x" : -840 },
		{ "v0" : 12, "v1" : 13, "trait" : "line", "y" : 320 },
		{ "v0" : 14, "v1" : 15, "trait" : "line", "y" : -175 },
		{ "v0" : 15, "v1" : 17, "trait" : "line", "x" : -1030 },
		{ "v0" : 16, "v1" : 17, "trait" : "line", "y" : 175 },
		{ "v0" : 18, "v1" : 19, "curve" : -130, "trait" : "line", "x" : -840 },
		{ "v0" : 20, "v1" : 21, "curve" : -180, "trait" : "line", "x" : 935 },
		{ "v0" : 22, "v1" : 23, "curve" : -180, "trait" : "line", "x" : -935 },
		{ "v0" : 20, "v1" : 21, "curve" : 180, "trait" : "line", "x" : 935 },
		{ "v0" : 22, "v1" : 23, "curve" : 180, "trait" : "line", "x" : -935 },
		{ "v0" : 20, "v1" : 21, "curve" : 90, "trait" : "line", "x" : 935 },
		{ "v0" : 22, "v1" : 23, "curve" : 90, "trait" : "line", "x" : -935 },
		{ "v0" : 20, "v1" : 21, "curve" : -90, "trait" : "line", "x" : 935 },
		{ "v0" : 22, "v1" : 23, "curve" : -90, "trait" : "line", "x" : -935 },
		{ "v0" : 20, "v1" : 21, "trait" : "line", "x" : 935 },
		{ "v0" : 22, "v1" : 23, "trait" : "line", "x" : -935 },
		{ "v0" : 24, "v1" : 25, "curve" : 90, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
		{ "v0" : 26, "v1" : 27, "curve" : 90, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
		{ "v0" : 28, "v1" : 29, "curve" : 90, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
		{ "v0" : 30, "v1" : 31, "curve" : 90, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
		{ "v0" : 32, "v1" : 33, "curve" : 70, "vis" : false, "color" : "576C46", "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "x" : -1030 },
		{ "v0" : 34, "v1" : 35, "curve" : -70, "vis" : false, "color" : "576C46", "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "x" : 1030 },
		{ "v0" : 36, "v1" : 37, "vis" : true, "color" : "576C46", "trait" : "line", "x" : 1030 },
		{ "v0" : 38, "v1" : 39, "vis" : true, "color" : "576C46", "trait" : "line", "x" : -1030 },
		{ "v0" : 40, "v1" : 41, "curve" : -180, "trait" : "line", "x" : -935 },
		{ "v0" : 40, "v1" : 41, "curve" : 180, "trait" : "line", "x" : -935 },
		{ "v0" : 40, "v1" : 41, "curve" : 90, "trait" : "line", "x" : -935 },
		{ "v0" : 40, "v1" : 41, "curve" : -90, "trait" : "line", "x" : -935 },
		{ "v0" : 40, "v1" : 41, "trait" : "line", "x" : -935 },
		
		{ "v0" : 42, "v1" : 43, "color" : "FFFF00", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1157 },
		{ "v0" : 44, "v1" : 45, "color" : "FFFF00", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1157 },
		{ "v0" : 46, "v1" : 47, "color" : "FFFF00", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1157 },
		{ "v0" : 48, "v1" : 49, "color" : "FFFF00", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1157 },
		
		{ "v0" : 50, "v1" : 51, "vis" : false, "color" : "ec644b", "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "y" : -485 },
		{ "v0" : 52, "v1" : 53, "vis" : false, "color" : "ec644b", "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "y" : 485 },
		{ "v0" : 54, "v1" : 55, "vis" : false, "color" : "ec644b", "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 55, "v1" : 56, "vis" : false, "color" : "ec644b", "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 56, "v1" : 57, "vis" : false, "color" : "ec644b", "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 58, "v1" : 59, "vis" : false, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 59, "v1" : 60, "vis" : false, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 60, "v1" : 61, "vis" : false, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 62, "v1" : 63, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ], "y" : -124, "cGroup" : ["red","blue" ] },
		{ "v0" : 64, "v1" : 65, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ], "y" : 124, "cGroup" : ["red","blue" ] },
		{ "v0" : 63, "v1" : 66, "color" : "f2d8d8", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 65, "v1" : 67, "color" : "f2d8d8", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 68, "v1" : 69, "color" : "ffffff", "bCoef" : 0, "cMask" : ["ball" ], "y" : 124, "cGroup" : ["red","blue" ] },
		{ "v0" : 70, "v1" : 71, "color" : "ffffff", "bCoef" : 0, "cMask" : ["ball" ], "y" : -124, "cGroup" : ["red","blue" ] },
		{ "v0" : 71, "v1" : 72, "color" : "e3f9fe", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 69, "v1" : 73, "color" : "e3f9fe", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ] },
		
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 74, "v1" : 75, "y" : 600 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 76, "v1" : 77, "x" : -1150 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 78, "v1" : 79, "y" : -600 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 80, "v1" : 81, "x" : 1150 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 78, "v1" : 77 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 82, "v1" : 83, "x" : -1260 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 84, "v1" : 85, "x" : -1262 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 86, "v1" : 87, "x" : -1258 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 88, "v1" : 89, "x" : -1260 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 90, "v1" : 91, "x" : -1262 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 92, "v1" : 93, "x" : -1258 },
		{ "vis" : true, "color" : "6e965d", "trait" : "line", "v0" : 94, "v1" : 95, "x" : -2, "curve" : 0 },
		{ "vis" : true, "color" : "6e965d", "trait" : "line", "v0" : 96, "v1" : 97, "x" : 0, "curve" : 0 },
		{ "vis" : true, "color" : "6e965d", "trait" : "line", "v0" : 98, "v1" : 99, "x" : 2, "curve" : 0 },
		{ "vis" : true, "color" : "7ea170", "trait" : "line", "v0" : 100, "v1" : 101, "x" : 0, "curve" : 0 },
		{ "vis" : true, "color" : "7ea170", "trait" : "line", "v0" : 102, "v1" : 103, "x" : -2, "curve" : 0 },
		{ "vis" : true, "color" : "7ea170", "trait" : "line", "v0" : 104, "v1" : 105, "x" : 2, "curve" : 0 },
		{ "vis" : true, "color" : "7ea170", "trait" : "line", "v0" : 106, "v1" : 107, "x" : 0, "curve" : 0 },
		{ "vis" : true, "color" : "7ea170", "trait" : "line", "v0" : 108, "v1" : 109, "x" : 2, "curve" : 0 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 110, "v1" : 111, "x" : -1260, "y" : -650, "curve" : 0 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 112, "v1" : 113, "x" : -1262, "curve" : 0, "y" : -648 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 114, "v1" : 115, "x" : -1258, "curve" : 0, "y" : -652 },
		{ "vis" : true, "color" : "6e965d", "trait" : "line", "v0" : 116, "v1" : 117, "x" : 0, "curve" : 0 },
		{ "vis" : true, "color" : "6e965d", "trait" : "line", "v0" : 118, "v1" : 119, "x" : -2, "curve" : 0 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 120, "v1" : 121, "x" : -1260, "y" : 650, "curve" : 0 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 122, "v1" : 123, "x" : -1262, "curve" : 0, "y" : 652 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 124, "v1" : 125, "x" : -1258, "curve" : 0, "y" : 648 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 126, "v1" : 127, "x" : -752, "curve" : -90 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 128, "v1" : 129, "x" : -750, "curve" : -90 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 130, "v1" : 131, "x" : -748, "curve" : -90 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 132, "v1" : 133, "x" : -752, "curve" : -90 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 134, "v1" : 135, "x" : -750, "curve" : -90 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 136, "v1" : 137, "x" : -748, "curve" : -90 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 138, "v1" : 139, "x" : -752, "curve" : -90 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 140, "v1" : 141, "x" : -750, "curve" : -90 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 142, "v1" : 143, "x" : -748, "curve" : -90 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 144, "v1" : 145, "x" : -752, "curve" : -90 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 146, "v1" : 147, "x" : -750, "curve" : -90 },
		{ "vis" : true, "color" : "43774e", "trait" : "line", "v0" : 148, "v1" : 149, "x" : -748, "curve" : -90 },
		
		{ "v0" : 150, "v1" : 151, "curve" : 0, "vis" : true, "color" : "D7D7D9", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "cGroup" : ["all" ], "x" : 780 },
		
		{ "v0" : 152, "v1" : 153, "curve" : 0, "vis" : true, "color" : "f7513e", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		{ "v0" : 152, "v1" : 153, "curve" : 0, "vis" : true, "color" : "f83d38", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : -553 },
		{ "v0" : 153, "v1" : 153, "curve" : 0, "vis" : true, "color" : "f7513e", "bCoef" : 0, "cMask" : ["wall" ], "x" : 903, "cGroup" : ["all" ] },
		
		{ "v0" : 152, "v1" : 154, "vis" : true, "color" : "fde73b", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "cGroup" : ["all" ], "y" : -553 },
		
		{ "v0" : 155, "v1" : 156, "curve" : 0, "vis" : true, "color" : "f7513e", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		{ "v0" : 155, "v1" : 156, "curve" : 0, "vis" : true, "color" : "f83d38", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : -550 },
		{ "v0" : 156, "v1" : 156, "curve" : 0, "vis" : true, "color" : "f7513e", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "x" : 875 },
		
		{ "v0" : 155, "v1" : 157, "vis" : true, "color" : "fde73b", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "cGroup" : ["all" ], "y" : -550 },
		
		{ "v0" : 158, "v1" : 159, "curve" : 0, "vis" : true, "color" : "f83d38", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : -555 },
		
		{ "v0" : 158, "v1" : 160, "vis" : true, "color" : "fde73b", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "cGroup" : ["all" ], "y" : -555 },
		
		{ "v0" : 161, "v1" : 162, "curve" : 0, "vis" : true, "color" : "f83d38", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : -548 },
		
		{ "v0" : 161, "v1" : 163, "vis" : true, "color" : "fde73b", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "cGroup" : ["all" ], "y" : -548 },
		
		{ "v0" : 164, "v1" : 165, "curve" : 0, "vis" : true, "color" : "D7D7D9", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "cGroup" : ["all" ], "x" : 780 },
		
		{ "v0" : 166, "v1" : 167, "curve" : 0, "vis" : true, "color" : "f7513e", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		{ "v0" : 166, "v1" : 167, "curve" : 0, "vis" : true, "color" : "f83d38", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : -553 },
		{ "v0" : 167, "v1" : 167, "curve" : 0, "vis" : true, "color" : "f7513e", "bCoef" : 0, "cMask" : ["wall" ], "x" : 903, "cGroup" : ["all" ] },
		
		{ "v0" : 166, "v1" : 168, "vis" : true, "color" : "fde73b", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "cGroup" : ["all" ], "y" : -553 },
		
		{ "v0" : 169, "v1" : 170, "curve" : 0, "vis" : true, "color" : "f7513e", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		{ "v0" : 169, "v1" : 170, "curve" : 0, "vis" : true, "color" : "f83d38", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : -550 },
		{ "v0" : 170, "v1" : 170, "curve" : 0, "vis" : true, "color" : "f7513e", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "x" : 875 },
		
		{ "v0" : 169, "v1" : 171, "vis" : true, "color" : "fde73b", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "cGroup" : ["all" ], "y" : -550 },
		
		{ "v0" : 172, "v1" : 173, "curve" : 0, "vis" : true, "color" : "f83d38", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : -555 },
		
		{ "v0" : 172, "v1" : 174, "vis" : true, "color" : "fde73b", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "cGroup" : ["all" ], "y" : -555 },
		
		{ "v0" : 175, "v1" : 176, "curve" : 0, "vis" : true, "color" : "f83d38", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : -548 },
		
		{ "v0" : 175, "v1" : 177, "vis" : true, "color" : "fde73b", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "cGroup" : ["all" ], "y" : -548 },
		
		{ "v0" : 178, "v1" : 179, "curve" : 0, "vis" : true, "color" : "D7D7D9", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "cGroup" : ["all" ], "x" : 877 },
		
		{ "v0" : 180, "v1" : 181, "curve" : 0, "vis" : true, "color" : "f7513e", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		{ "v0" : 180, "v1" : 181, "curve" : 0, "vis" : true, "color" : "f83d38", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : -553 },
		{ "v0" : 181, "v1" : 181, "curve" : 0, "vis" : true, "color" : "f7513e", "bCoef" : 0, "cMask" : ["wall" ], "x" : 903, "cGroup" : ["all" ] },
		
		{ "v0" : 180, "v1" : 182, "vis" : true, "color" : "fde73b", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "cGroup" : ["all" ], "y" : -553 },
		
		{ "v0" : 183, "v1" : 184, "curve" : 0, "vis" : true, "color" : "f7513e", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		{ "v0" : 183, "v1" : 184, "curve" : 0, "vis" : true, "color" : "f83d38", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : -550 },
		{ "v0" : 184, "v1" : 184, "curve" : 0, "vis" : true, "color" : "f7513e", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "x" : 875 },
		
		{ "v0" : 183, "v1" : 185, "vis" : true, "color" : "fde73b", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "cGroup" : ["all" ], "y" : -550 },
		
		{ "v0" : 186, "v1" : 187, "curve" : 0, "vis" : true, "color" : "f83d38", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : -555 },
		
		{ "v0" : 186, "v1" : 188, "vis" : true, "color" : "fde73b", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "cGroup" : ["all" ], "y" : -555 },
		
		{ "v0" : 189, "v1" : 190, "curve" : 0, "vis" : true, "color" : "f83d38", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : -548 },
		
		{ "v0" : 189, "v1" : 191, "vis" : true, "color" : "fde73b", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "cGroup" : ["all" ], "y" : -548 },
		
		{ "v0" : 192, "v1" : 193, "curve" : 0, "vis" : true, "color" : "D7D7D9", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "cGroup" : ["all" ], "x" : 877 },
		
		{ "v0" : 194, "v1" : 195, "curve" : 0, "vis" : true, "color" : "f7513e", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		{ "v0" : 194, "v1" : 195, "curve" : 0, "vis" : true, "color" : "f83d38", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : -553 },
		{ "v0" : 195, "v1" : 195, "curve" : 0, "vis" : true, "color" : "f7513e", "bCoef" : 0, "cMask" : ["wall" ], "x" : 903, "cGroup" : ["all" ] },
		
		{ "v0" : 194, "v1" : 196, "vis" : true, "color" : "fde73b", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "cGroup" : ["all" ], "y" : -553 },
		
		{ "v0" : 197, "v1" : 198, "curve" : 0, "vis" : true, "color" : "f7513e", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		{ "v0" : 197, "v1" : 198, "curve" : 0, "vis" : true, "color" : "f83d38", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : -550 },
		{ "v0" : 198, "v1" : 198, "curve" : 0, "vis" : true, "color" : "f7513e", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "x" : 875 },
		
		{ "v0" : 197, "v1" : 199, "vis" : true, "color" : "fde73b", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "cGroup" : ["all" ], "y" : -550 },
		
		{ "v0" : 200, "v1" : 201, "curve" : 0, "vis" : true, "color" : "f83d38", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : -555 },
		
		{ "v0" : 200, "v1" : 202, "vis" : true, "color" : "fde73b", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "cGroup" : ["all" ], "y" : -555 },
		
		{ "v0" : 203, "v1" : 204, "curve" : 0, "vis" : true, "color" : "f83d38", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : -548 },
		
		{ "v0" : 203, "v1" : 205, "vis" : true, "color" : "fde73b", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "cGroup" : ["all" ], "y" : -548 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 206, "v1" : 207, "x" : -42 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 208, "v1" : 209, "x" : -42 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 209, "v1" : 210, "y" : 653 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 211, "v1" : 212, "x" : -223 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 213, "v1" : 214, "x" : -223 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 214, "v1" : 215 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 216, "v1" : 217, "y" : 653 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 218, "v1" : 219, "y" : 653 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 220, "v1" : 221, "x" : -42 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 222, "v1" : 223, "x" : -223 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 224, "v1" : 225, "x" : -42 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 226, "v1" : 227, "x" : -42 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 227, "v1" : 228, "y" : 653 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 229, "v1" : 230, "x" : -223 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 231, "v1" : 232, "x" : -223 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 232, "v1" : 233, "y" : 653 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 234, "v1" : 235, "y" : 653 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 236, "v1" : 237, "y" : 653 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 238, "v1" : 239, "x" : -42 },
		{ "vis" : true, "color" : "C7E6BD", "trait" : "line", "v0" : 240, "v1" : 241, "x" : -223 },
		
		{ "color" : "ffffff", "bCoef" : 0, "v0" : 69, "v1" : 71, "cMask" : ["ball" ], "cGroup" : ["red","blue" ] },
		{ "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "v0" : 63, "v1" : 65 }

	],

	"goals" : [
		

	],

	"discs" : [
		{ "radius" : 0, "invMass" : 0, "pos" : [-1311,-19 ], "color" : "ffffffff", "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["ball" ] },
		{ "radius" : 0, "invMass" : 0, "pos" : [-1310,29 ], "color" : "ffffffff", "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["ball" ] },
		{ "radius" : 0, "invMass" : 0, "pos" : [-1308,62 ], "color" : "ffffffff", "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["ball" ] },
		
		{ "radius" : 2.7, "pos" : [-1150,600 ], "cGroup" : ["ball" ], "trait" : "cornerflag", "color" : "7af769" },
		{ "radius" : 2.7, "pos" : [1150,-600 ], "cGroup" : ["ball" ], "trait" : "cornerflag", "color" : "7af769" },
		{ "radius" : 2.7, "pos" : [1150,600 ], "cGroup" : ["ball" ], "trait" : "cornerflag", "color" : "7af769" },
		
		{ "radius" : 5, "invMass" : 0, "pos" : [-1150,-124 ], "bCoef" : 0.5, "trait" : "goalPost", "color" : "d6cbcb" },
		{ "radius" : 5, "invMass" : 0, "pos" : [-1150,124 ], "bCoef" : 0.5, "trait" : "goalPost", "color" : "d6cbcb" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-1250,-158 ], "color" : "dd2e2e", "bCoef" : 1, "trait" : "goalPost" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-1250,158 ], "color" : "dd2e2e", "bCoef" : 1, "trait" : "goalPost" },
		{ "radius" : 5, "invMass" : 0, "pos" : [1150,-124 ], "bCoef" : 0.5, "trait" : "goalPost", "color" : "cbccd6" },
		{ "radius" : 5, "invMass" : 0, "pos" : [1150,124 ], "bCoef" : 0.5, "trait" : "goalPost", "color" : "cbccd6" },
		{ "radius" : 3, "invMass" : 0, "pos" : [1250,-158 ], "color" : "2e51dd", "bCoef" : 1, "trait" : "goalPost" },
		{ "radius" : 3, "invMass" : 0, "pos" : [1250,158 ], "color" : "2e51dd", "bCoef" : 1, "trait" : "goalPost" },
		
		{ "radius" : 2.7, "pos" : [-1150,-600 ], "cGroup" : ["ball" ], "trait" : "cornerflag", "color" : "7af769" },
		
		{ "radius" : 0, "pos" : [-1149,-485 ], "cMask" : ["none" ] },
		{ "radius" : 0, "pos" : [1149,-485 ], "cMask" : ["none" ] },
		{ "radius" : 0, "pos" : [-1149,-485 ], "cMask" : ["none" ] },
		{ "radius" : 0, "pos" : [1149,-485 ], "cMask" : ["none" ] },
		{ "radius" : 0, "pos" : [-1149,485 ], "cMask" : ["none" ] },
		{ "radius" : 0, "pos" : [1149,485 ], "cMask" : ["none" ] },
		{ "radius" : 0, "pos" : [-1149,485 ], "cMask" : ["none" ] },
		{ "radius" : 0, "pos" : [1149,485 ], "cMask" : ["none" ] },
		{ "radius" : 9, "bCoef" : 0.5, "invMass" : 1.05, "damping" : 0.99, "pos" : [-7,0 ], "color" : "FFFFFF", "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 9, "bCoef" : 0.5, "invMass" : 1.05, "damping" : 0.99, "pos" : [-2,0 ], "color" : "FFFFFF", "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 9, "bCoef" : 0.5, "invMass" : 1.05, "damping" : 0.99, "pos" : [0,7 ], "color" : "FFFFFF", "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 9, "bCoef" : 0.5, "invMass" : 1.05, "damping" : 0.99, "pos" : [-9,0 ], "color" : "FFFFFF", "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 9, "bCoef" : 0.5, "invMass" : 1.05, "damping" : 0.99, "pos" : [11,0 ], "color" : "FFFFFF", "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 9, "bCoef" : 0.5, "invMass" : 1.05, "damping" : 0.99, "pos" : [5,-4 ], "color" : "FFFFFF", "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 9, "bCoef" : 0.5, "invMass" : 1.05, "damping" : 0.99, "pos" : [8,7 ], "color" : "FFFFFF", "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 9, "bCoef" : 0.5, "invMass" : 1.05, "damping" : 0.99, "pos" : [-9,11 ], "color" : "FFFFFF", "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 9, "bCoef" : 0.5, "invMass" : 1.05, "damping" : 0.99, "pos" : [11,7 ], "color" : "FFFFFF", "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 9, "bCoef" : 0.5, "invMass" : 1.05, "damping" : 0.99, "pos" : [8,-4 ], "color" : "FFFFFF", "cGroup" : ["ball","kick","score" ] }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -627, "bCoef" : 0, "cGroup" : ["ball" ], "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -627, "bCoef" : 0, "cGroup" : ["ball" ], "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -706, "bCoef" : 0 },
		{ "normal" : [0,-1 ], "dist" : -706, "bCoef" : 0 },
		{ "normal" : [1,0 ], "dist" : -1300, "bCoef" : 0 },
		{ "normal" : [-1,0 ], "dist" : -1300, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -1240, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["ball" ] },
		{ "normal" : [-1,0 ], "dist" : -1240, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["ball" ] }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["ball" ] },
		"goalPost" : { "radius" : 5, "invMass" : 0, "bCoef" : 1, "cGroup" : ["ball" ] },
		"rightNet" : { "radius" : 0, "invMass" : 1, "bCoef" : 0, "cGroup" : ["ball","c3" ] },
		"leftNet" : { "radius" : 0, "invMass" : 1, "bCoef" : 0, "cGroup" : ["ball","c2" ] },
		"stanchion" : { "radius" : 3, "invMass" : 0, "bCoef" : 3, "cMask" : ["none" ] },
		"cornerflag" : { "radius" : 3, "invMass" : 0, "bCoef" : 0.2, "color" : "FFFF00", "cMask" : ["ball" ] },
		"reargoalNetleft" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : 10, "color" : "C7E6BD" },
		"reargoalNetright" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : -10, "color" : "C7E6BD" },
		"sidegoalNet" : { "vis" : true, "bCoef" : 1, "cMask" : ["ball","red","blue" ], "color" : "C7E6BD" },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"line" : { "vis" : true, "cMask" : [ ], "color" : "C7E6BD" }

	},

"joints":[{"d0":16,"d1":17,"strength":"rigid","color":"f5204b","length":null},{"d0":18,"d1":19,"strength":"rigid","color":"00e1ff","length":null},{"d0":20,"d1":21,"strength":"rigid","color":"f5204b","length":null},{"d0":22,"d1":23,"strength":"rigid","color":"00e1ff","length":null}

	],

	"canBeStored" : false
}


`;
	RSRMap = true;
	return realSoccerMap3;
}