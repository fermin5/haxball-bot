(()=>{var e={637:e=>{RoomParams={roomName:"Private Room",maxPlayers:40,public:!1,noPlayer:!0,token:"Aca iria el token de la sala",timeLimit:3,scoreLimit:3,teamsLock:!1};var t={roomName:RoomParams.roomName,maxPlayers:RoomParams.maxPlayers,public:RoomParams.public,noPlayer:RoomParams.noPlayer};"string"==typeof token&&39==token.length&&(t.token=token);const a=HBInit(t);e.exports=a},220:(e,t,a)=>{const{getDate:n,pointDistance:o,getMinutesReport:i,getSecondsReport:r,getTimeGame:l,getTimeEmbed:s,getGoalGame:m}=a(956),{Game:d,Goal:c,PlayerComposition:u,BallTouch:f}=a(207),{commands:h}=a(630),{stadiumCommand:p}=a(640);let{roomPassword:y,players:g,teamRed:A,teamBlue:v,teamSpec:b,gameState:C,playSituation:T,goldenGoal:x,banList:P,possession:E,actionZoneHalf:k,lastTouches:L,lastTeamTouched:w,authArray:S,adminList:N,masterList:M,Team:O,State:$,Role:R,HaxNotification:H,Situation:G}=a(173);RoomParams={roomName:"Private Room",maxPlayers:40,public:!1,noPlayer:!0,token:"Aca iria el token de la sala",timeLimit:3,scoreLimit:3,teamsLock:!1};const B=a(637);B.setScoreLimit(RoomParams.scoreLimit),B.setTimeLimit(RoomParams.timeLimit),B.setTeamsLock(RoomParams.teamsLock),B.setKickRateLimit(6,0,0);var I,D,F,K=12.926939297558633,_=0,U=15,Y=10,j=U+Y+.01,Z=16773078,W=16763187,J=16731212,q=6474751,z=10747904,Q=null,V=!1,X=!0,ee=!1,te=!1;p({id:0},"!big");var ae=new d(B,A,v,S);function ne(e){if(null==e||0==e.id)return null;var t=ae.playerComp,a=t[0].findIndex((t=>t.auth==S[e.id][0]));return-1!=a?t[0][a]:-1!=(a=t[1].findIndex((t=>t.auth==S[e.id][0])))?t[1][a]:null}function oe(e){return e==O.RED?A:e==O.BLUE?v:b}function ie(e,t,a){if(null!=e&&e.length>=t+1){var n=e[t];if(null!=n&&null!=n.goal&&n.goal==a)return n}return null}function re(e){const t=B.getScores();ae.scores=t,ee=!0,e==O.RED?B.sendAnnouncement(`✨ Red Team won ${t.red} - ${t.blue} !`,null,J,"bold",H.CHAT):e==O.BLUE?B.sendAnnouncement(`✨ Blue Team won ${t.blue} - ${t.red} !`,null,q,"bold",H.CHAT):B.sendAnnouncement("💤 Draw limit reached !",null,Z,"bold",H.CHAT);let a=E[0]/(E[0]+E[1])*100,n=100-a,o=`🔴 ${a.toFixed(0)}% - ${n.toFixed(0)}% 🔵`,i=k[0]/(k[0]+k[1])*100,r=100-i,l=`🔴 ${i.toFixed(0)}% - ${r.toFixed(0)}% 🔵`,s=function(e){let t=function(e){let t=[],a=fe(O.RED),n=fe(O.BLUE);return null!=a&&0==e.blue&&t.push(a.player.name),null!=n&&0==e.red&&t.push(n.player.name),t}(e);return 0==t.length?"🥅 No CS":1==t.length?`🥅 ${t[0]} had a CS.`:`🥅 ${t[0]} and ${t[1]} had a CS.`}(t);B.sendAnnouncement(`📊 Possession: 🔴 ${o}\n📊 Action Zone: 🔴 ${l}\n${s}`,null,Z,"bold",H.NONE)}function le(){g=B.getPlayerList(),A=g.filter((e=>e.team==O.RED)),v=g.filter((e=>e.team==O.BLUE)),b=g.filter((e=>e.team==O.SPECTATORS))}function se(e=0){if(0!=g.length&&g.filter((e=>e.admin)).length<4){let t=g.filter((t=>t.id!=e&&!t.admin)).map((e=>e.id));B.setPlayerAdmin(Math.min(...t),!0)}}function me(e){return 2*!!M.find((t=>t==S[e.id][0]))+1*!!N.find((t=>t[0]==S[e.id][0]))+1*e.admin}function de(e,t){var a=oe(e.team).map((e=>e.id));if(a.splice(a.findIndex((t=>t==e.id)),1,t.id),B.kickPlayer(e.id,"Ghost kick",!1),B.setPlayerTeam(t.id,e.team),B.setPlayerAdmin(t.id,e.admin),B.reorderPlayers(a,!0),e.team!=O.SPECTATORS&&T!=G.STOP){var n=B.getPlayerDiscProperties(e.id);B.setPlayerDiscProperties(t.id,n)}}function ce(e){let t=ne(e);return null!=t?(t.inactivityTicks++,t.inactivityTicks):0}function ue(){for(let e of g){let t=ne(e);null!=t&&(t.inactivityTicks=0)}}function fe(e){return e==O.SPECTATORS?null:(e==O.RED?ae.playerComp[0]:ae.playerComp[1]).reduce(((e,t)=>e?.GKTicks>t.GKTicks?e:t),null)}function he(e,t){let a=[],n=t==O.RED?0:1,o=t==O.RED?1:0;for(let t of e[n])if(null!=t[0]){if(a.find((e=>e[0].id==t[0].id))){let e=a.findIndex((e=>e[0].id==t[0].id));a[e][1]++}else a.push([t[0],1,0,0]);if(null!=t[1])if(a.find((e=>e[0].id==t[1].id))){let e=a.findIndex((e=>e[0].id==t[1].id));a[e][2]++}else a.push([t[1],0,1,0])}if(0==e[o].length){let e=fe(t)?.player;if(null!=e)if(a.find((t=>t[0].id==e.id))){let t=a.findIndex((t=>t[0].id==e.id));a[t][3]++}else a.push([e,0,0,1])}return a.sort(((e,t)=>e[1]+e[2]+e[3]-(t[1]+t[2]+t[3]))),a}function pe(e){var t={name:"🔴        **RED TEAM STATS**",value:"⌛ __**Game Time:**__\n\n",inline:!0},a={name:"🔵       **BLUE TEAM STATS**",value:"⌛ __**Game Time:**__\n\n",inline:!0},n=e.playerComp[0].map((e=>[e.player,0]));for(let t=0;t<e.playerComp[0].length;t++){var o=e.playerComp[0][t];for(let a=0;a<o.timeEntry.length;a++)o.timeExit.length<a+1?n[t][1]+=e.scores.time-o.timeEntry[a]:n[t][1]+=o.timeExit[a]-o.timeEntry[a]}var l=e.playerComp[1].map((e=>[e.player,0]));for(let t=0;t<e.playerComp[1].length;t++){o=e.playerComp[1][t];for(let a=0;a<o.timeEntry.length;a++)o.timeExit.length<a+1?l[t][1]+=e.scores.time-o.timeEntry[a]:l[t][1]+=o.timeExit[a]-o.timeEntry[a]}for(let e of n){var s=i(e[1]),m=r(e[1]);t.value+=`> **${e[0].name}:** ${s>0?`${s}m`:""}`+(m>0||0==s?`${m}s`:"")+"\n"}t.value+=`\n${l.length-n.length>0?"\n".repeat(l.length-n.length):""}`,t.value+="=====================";for(let e of l)s=i(e[1]),m=r(e[1]),a.value+=`> **${e[0].name}:** ${s>0?`${s}m`:""}`+(m>0||0==s?`${m}s`:"")+"\n";return a.value+=`\n${n.length-l.length>0?"\n".repeat(n.length-l.length):""}`,a.value+="=====================",[t,a]}function ye(e){var t={name:"🔴        **RED TEAM STATS**",value:"📊 __**Player Stats:**__\n\n",inline:!0},a={name:"🔵       **BLUE TEAM STATS**",value:"📊 __**Player Stats:**__\n\n",inline:!0},n=[[],[]];for(let t of e.goals)n[t.team-1].push([t.striker,t.assist]);var o=he(n,O.RED);if(o.length>0)for(let e of o)t.value+=`> **${e[0].team!=O.RED?"[OG] ":""}${e[0].name}:**`+(e[1]>0?` ${e[1]}G`:"")+(e[2]>0?` ${e[2]}A`:"")+(e[3]>0?` ${e[3]}CS`:"")+"\n";var i=he(n,O.BLUE);if(i.length>0)for(let e of i)a.value+=`> **${e[0].team!=O.BLUE?"[OG] ":""}${e[0].name}:**`+(e[1]>0?` ${e[1]}G`:"")+(e[2]>0?` ${e[2]}A`:"")+(e[3]>0?` ${e[3]}CS`:"")+"\n";return t.value+=`\n${i.length-o.length>0?"\n".repeat(i.length-o.length):""}`,t.value+="=====================",a.value+=`\n${o.length-i.length>0?"\n".repeat(o.length-i.length):""}`,a.value+="=====================",[t,a]}"function"!=typeof String.prototype.replaceAll&&(String.prototype.replaceAll=function(e,t){return this.split(e).join(t)}),B.onPlayerJoin=function(e){if(S[e.id]=[e.auth,e.conn],B.sendAnnouncement(`👋 Welcome ${e.name} !\nEnter "t" before your message to use team chat and "@@" followed by a player name to PM him !`,e.id,12910437,"bold",H.CHAT),le(),se(),-1!=M.findIndex((t=>t==e.auth))?(B.sendAnnouncement(`Master ${e.name} has connected to the room !`,null,Z,"bold",H.CHAT),B.setPlayerAdmin(e.id,!0)):-1!=N.map((e=>e[0])).findIndex((t=>t==e.auth))&&(B.sendAnnouncement(`Admin ${e.name} has connected to the room !`,null,Z,"bold",H.CHAT),B.setPlayerAdmin(e.id,!0)),g.filter((t=>t.id!=e.id&&S[t.id][0]==e.auth)).length>0){var t=g.filter((t=>t.id!=e.id&&S[t.id][0]==e.auth));for(let a of t)de(a,e)}},B.onPlayerTeamChange=function(e,t){!function(e){var t;if(C!=$.STOP)if(e.team==O.RED?-1!=(a=ae.playerComp[0].map((e=>e.auth)).findIndex((t=>t==S[e.id][0])))?(t=ae.playerComp[0][a]).timeExit.includes(ae.scores.time)?t.timeExit=t.timeExit.filter((e=>e!=ae.scores.time)):t.timeEntry.push(ae.scores.time):(t=new u(e,S[e.id][0],[ae.scores.time],[]),ae.playerComp[0].push(t)):e.team==O.BLUE&&(-1!=(a=ae.playerComp[1].map((e=>e.auth)).findIndex((t=>t==S[e.id][0])))?(t=ae.playerComp[1][a]).timeExit.includes(ae.scores.time)?t.timeExit=t.timeExit.filter((e=>e!=ae.scores.time)):t.timeEntry.push(ae.scores.time):(t=new u(e,S[e.id][0],[ae.scores.time],[]),ae.playerComp[1].push(t))),A.some((t=>t.id==e.id))){var a=ae.playerComp[0].map((e=>e.auth)).findIndex((t=>t==S[e.id][0]));(t=ae.playerComp[0][a]).timeEntry.includes(ae.scores.time)?0==ae.scores.time?ae.playerComp[0].splice(a,1):t.timeEntry=t.timeEntry.filter((e=>e!=ae.scores.time)):t.timeExit.push(ae.scores.time)}else v.some((t=>t.id==e.id))&&(a=ae.playerComp[1].map((e=>e.auth)).findIndex((t=>t==S[e.id][0])),(t=ae.playerComp[1][a]).timeEntry.includes(ae.scores.time)?0==ae.scores.time?ae.playerComp[1].splice(a,1):t.timeEntry=t.timeEntry.filter((e=>e!=ae.scores.time)):t.timeExit.push(ae.scores.time))}(e),le(),function(e){if(e.team==O.SPECTATORS){let t=ne(e);null!=t&&(t.inactivityTicks=0)}}(e)},B.onPlayerLeave=function(e){!function(e){if(T!=G.STOP)if(e.team==O.RED){var t=ae.playerComp[0].map((e=>e.auth)).findIndex((t=>t==S[e.id][0]));(a=ae.playerComp[0][t]).timeEntry.includes(ae.scores.time)?0==ae.scores.time?ae.playerComp[0].splice(t,1):a.timeEntry=a.timeEntry.filter((e=>e!=ae.scores.time)):a.timeExit.push(ae.scores.time)}else if(e.team==O.BLUE){var a;t=ae.playerComp[1].map((e=>e.auth)).findIndex((t=>t==S[e.id][0])),(a=ae.playerComp[1][t]).timeEntry.includes(ae.scores.time)?0==ae.scores.time?ae.playerComp[1].splice(t,1):a.timeEntry=a.timeEntry.filter((e=>e!=ae.scores.time)):a.timeExit.push(ae.scores.time)}}(e),le(),se()},B.onPlayerKicked=function(e,t,a,n){return a&&(null!=n&&(n.id==e.id||me(n)<R.MASTER)||(me(e),R.MASTER)),void B.clearBan(e.id)},B.onPlayerChat=function(e,t){let a=t.split(/ +/);if("!"==a[0][0]){let n=function(e){if(h.hasOwnProperty(e))return e;for(const[t,a]of Object.entries(h))for(let n of a.aliases)if(n==e)return t;return!1}(a[0].slice(1).toLowerCase());return 0!=n&&h[n].roles<=me(e)?h[n].function(e,t):B.sendAnnouncement("The command you tried to enter does not exist for you. Please enter '!help' to get the available commands to you.",e.id,z,"bold",H.CHAT),!1}return"t"==a[0].toLowerCase()?(function(e,t){var a=t.split(/ +/).slice(1);!function(e,t,a,n,o){for(let n of t)B.sendAnnouncement(e,n.id,a,"bold",o)}(t=`${e.team==O.RED?"🔴":e.team==O.BLUE?"🔵":"⚪"} [TEAM] ${e.name}: ${a.join(" ")}`,oe(e.team),e.team==O.RED?J:e.team==O.BLUE?q:null,0,H.CHAT)}(e,t),!1):"@@"===a[0].substring(0,2)?(function(e,t){var a=t.split(/ +/),n=g.findIndex((e=>e.name.replaceAll(" ","_")==a[0].substring(2)));if(-1==n)return B.sendAnnouncement("Invalid player, make sure the name you entered is correct.",e.id,z,"bold",null),!1;var o=g[n];if(e.id==o.id)return B.sendAnnouncement("You can't send a PM to yourself!",e.id,z,"bold",null),!1;var i=`📝 [PM with ${o.name}] ${e.name}: ${a.slice(1).join(" ")}`,r=`📝 [PM with ${e.name}] ${e.name}: ${a.slice(1).join(" ")}`;B.sendAnnouncement(i,e.id,W,"bold",H.CHAT),B.sendAnnouncement(r,o.id,W,"bold",H.CHAT)}(e,t),!1):void 0},B.onPlayerActivity=function(e){if(C!==$.STOP){let t=ne(e);null!=t&&(t.inactivityTicks=0)}},B.onPlayerBallKick=function(e){if(T!=G.GOAL){var t=B.getBallPosition();0!=ae.touchArray.length&&e.id==ae.touchArray[ae.touchArray.length-1].player.id||(T==G.KICKOFF&&(T=G.PLAY),w=e.team,ae.touchArray.push(new f(e,ae.scores.time,m(ae),t)),L[0]=ie(ae.touchArray,ae.touchArray.length-1,m(ae)),L[1]=ie(ae.touchArray,ae.touchArray.length-2,m(ae)))}},B.onGameStart=function(e){clearTimeout(D),null!=e&&clearTimeout(I),ae=new d(B,A,v,S),E=[0,0],k=[0,0],C=$.PLAY,ee=!1,x=!1,T=G.KICKOFF,L=Array(2).fill(null),w=O.SPECTATORS,X&&A.length+v.length>0&&(X=!1,setTimeout((()=>{let e=B.getDiscProperties(0),t=B.getPlayerDiscProperties(A.concat(v)[0].id);Y=e.radius,U=t.radius,j=Y+U+.01,K=100/(5*e.invMass*(e.damping**60+1))}),1))},B.onGameStop=function(e){clearTimeout(I),clearTimeout(F),null!=e&&clearTimeout(D),ae.rec=B.stopRecording(),!te&&ae.playerComp[0].length+ae.playerComp[1].length>0&&(0!=ae.scores.timeLimit&&(ae.scores.time>=.5*ae.scores.timeLimit&&ae.scores.time<.75*ae.scores.timeLimit&&ae.scores.red!=ae.scores.blue||ae.scores.time>=.75*ae.scores.timeLimit)||ee)&&(function(e){var t=[pe,ye],a=[{name:"🔴        **RED TEAM STATS**",value:"=====================\n\n",inline:!0},{name:"🔵       **BLUE TEAM STATS**",value:"=====================\n\n",inline:!0}];for(let o=0;o<t.length;o++){var n=t[o](e);a[0].value+=n[0].value+"\n\n",a[1].value+=n[1].value+"\n\n"}a[0].value=a[0].value.substring(0,a[0].value.length-2),a[1].value=a[1].value.substring(0,a[1].value.length-2)}(ae),setTimeout((e=>{fetchRecording(e)}),500,ae)),te=!1,C=$.STOP,T=G.STOP,le(),ue()},B.onGamePause=function(e){C==$.PAUSE&&(null!=e?B.sendAnnouncement(`Game paused by ${e.name} !`,null,Q,"bold",H.NONE):B.sendAnnouncement("Game paused !",null,Q,"bold",H.NONE)),clearTimeout(F),C=$.PAUSE},B.onGameUnpause=function(e){F=setTimeout((()=>{C=$.PLAY}),2e3),null!=e?B.sendAnnouncement(`Game unpaused by ${e.name} !`,null,Q,"bold",H.NONE):B.sendAnnouncement("Game unpaused !",null,Q,"bold",H.NONE)},B.onTeamGoal=function(e){const t=B.getScores();var a;ae.scores=t,T=G.GOAL,a=B.getDiscProperties(0),_=Math.sqrt(a.xspeed**2+a.yspeed**2)*K;var n=function(e){var t,a=ae.scores,n=function(e){var t=Array(2).fill(null);return null!=L[0]&&(t=L[0].player.team==e&&null!=L[1]&&L[1].player.team==e?[L[0].player,L[1].player]:[L[0].player,null]),t}(e);return null!=n[0]?n[0].team==e?null!=n[1]&&n[1].team==e?(t=`⚽ ${l(a.time)} Goal by ${n[0].name} ! Assist by ${n[1].name}. Goal speed : ${_.toFixed(2)}km/h.`,ae.goals.push(new c(a.time,e,n[0],n[1]))):(t=`⚽ ${l(a.time)} Goal by ${n[0].name} ! Goal speed : ${_.toFixed(2)}km/h.`,ae.goals.push(new c(a.time,e,n[0],null))):(t=`😂 ${l(a.time)} Own goal by ${n[0].name} ! Goal speed : ${_.toFixed(2)}km/h.`,ae.goals.push(new c(a.time,e,n[0],null))):(t=`⚽ ${l(a.time)} Goal for ${e==O.RED?"red":"blue"} team ! Goal speed : ${_.toFixed(2)}km/h.`,ae.goals.push(new c(a.time,e,null,null))),t}(e);B.sendAnnouncement(n,null,e==O.RED?J:q,null,H.CHAT),(0!=t.scoreLimit&&(t.red==t.scoreLimit||t.blue==t.scoreLimit)||x)&&(re(e),x=!1,I=setTimeout((()=>{B.stopGame()}),1e3))},B.onPositionsReset=function(){L=Array(2).fill(null),w=O.SPECTATORS,T=G.KICKOFF},B.onPlayerAdminChange=function(e,t){le(),!e.admin&&me(e)>=R.ADMIN_TEMP?B.setPlayerAdmin(e.id,!0):se(null==t||e.admin||e.id!=t.id?0:e.id)},B.onKickRateLimitSet=function(e,t,a,n){null!=n&&(B.sendAnnouncement('It is not allowed to change the kickrate limit. It must stay at "6-0-0".',player.id,z,"bold",H.CHAT),B.setKickRateLimit(6,0,0))},B.onStadiumChange=function(e,t){X=!0},B.onGameTick=function(){!function(){const e=B.getScores();if(null!=ae&&(ae.scores=e),Math.abs(e.time-e.timeLimit)<=.01&&0!=e.timeLimit&&T==G.PLAY){if(e.red!=e.blue)return void(V||(V=!0,setTimeout((()=>{V=!1}),3e3),e.red>e.blue?re(O.RED):re(O.BLUE),I=setTimeout((()=>{B.stopGame()}),2e3)));x=!0,B.sendAnnouncement("⚽ First goal wins !",null,Z,"bold",H.CHAT)}Math.abs(e.time-1/0-e.timeLimit)<=.01&&0!=e.timeLimit&&(V||(V=!0,setTimeout((()=>{V=!1}),10),re(O.SPECTATORS),B.stopGame(),x=!1))}(),function(){const e=B.getBallPosition();le();let t=[];for(let n of g)if(null!=n.position){var a=o(n.position,e);a<j&&(T==G.KICKOFF&&(T=G.PLAY),t.push([n,a]))}if(0!=t.length){let a=t.sort(((e,t)=>e[1]-t[1]))[0][0];w!=a.team&&w!=O.SPECTATORS||(null==L[0]||null!=L[0]&&L[0].player.id!=a.id)&&(ae.touchArray.push(new f(a,ae.scores.time,m(ae),e)),L[0]=ie(ae.touchArray,ae.touchArray.length-1,m(ae)),L[1]=ie(ae.touchArray,ae.touchArray.length-2,m(ae))),w=a.team}}(),T==G.PLAY&&C==$.PLAY&&(w==O.RED?E[0]++:E[1]++,B.getBallPosition().x<0?k[0]++:k[1]++),function(){if(C==$.PLAY&&g.length>1){var e=0;for(let a of A){var t=ce(a);e=Math.max(t,e)}for(let a of v)t=ce(a),e=Math.max(t,e);e>=18e3&&(te=!0,B.stopGame(),B.sendAnnouncement("⚠️ Game was stopped due to inactivity !",null,Z,"bold",H.CHAT),ue())}}()}},207:(e,t,a)=>{a(637);class n{constructor(e,t,a,n){this.player=e,this.auth=t,this.timeEntry=a,this.timeExit=n,this.inactivityTicks=0,this.GKTicks=0}}e.exports={Goal:class{constructor(e,t,a,n){this.time=e,this.team=t,this.striker=a,this.assist=n}},Game:class{constructor(e,t,a,o){this.date=Date.now(),this.scores=e.getScores(),this.playerComp=function(e,t,a){var o=[[],[]];for(let t of e)o[0].push(new n(t,a[t.id][0],[0],[]));for(let e of t)o[1].push(new n(e,a[e.id][0],[0],[]));return o}(t,a,o),this.goals=[],this.rec=e.startRecording(),this.touchArray=[]}},PlayerComposition:n,BallTouch:class{constructor(e,t,a,n){this.player=e,this.time=t,this.goal=a,this.position=n}}}},630:(e,t,a)=>{const n=a(637),{clearbansCommand:o,banListCommand:i,adminListCommand:r,setAdminCommand:l,removeAdminCommand:s,passwordCommand:m}=a(858),{restartCommand:d,restartSwapCommand:c,swapCommand:u,stadiumCommand:f}=a(640),{masterCommand:h}=a(314);let{roomPassword:p,players:y,teamRed:g,teamBlue:A,teamSpec:v,gameState:b,playSituation:C,goldenGoal:T,banList:x,possession:P,actionZoneHalf:E,lastTouches:k,lastTeamTouched:L,authArray:w,adminList:S,masterList:N,Team:M,State:O,Role:$,HaxNotification:R,Situation:H}=a(173);var G=12500670;function B(e){return 2*!!N.find((t=>t==w[e.id][0]))+1*!!S.find((t=>t[0]==w[e.id][0]))+1*e.admin}const I={help:{aliases:["commands"],roles:$.PLAYER,desc:"\n\tThis command shows all the available commands. It also can show the description of a command in particular.\nExample: '!help bb' will show the description of the 'bb' command.",function:function(e,t){var a=t.split(/ +/).slice(1);if(0==a.length){var o="Player commands :";for(const[e,t]of Object.entries(I))t.desc&&t.roles==$.PLAYER&&(o+=` !${e},`);if(o=o.substring(0,o.length-1)+".\n",B(e)>=$.ADMIN_TEMP){o+="Admin commands :";for(const[e,t]of Object.entries(I))t.desc&&t.roles==$.ADMIN_TEMP&&(o+=` !${e},`);":"==o.slice(o.length-1)&&(o+=" None,"),o=o.substring(0,o.length-1)+".\n"}if(B(e)>=$.MASTER){o+="Master commands :";for(const[e,t]of Object.entries(I))t.desc&&t.roles==$.MASTER&&(o+=` !${e},`);":"==o.slice(o.length-1)&&(o+=" None,"),o=o.substring(0,o.length-1)+".\n"}o+="\nTo get information on a specific command, type ''!help <command name>'.",n.sendAnnouncement(o,e.id,G,"bold",R.CHAT)}else if(a.length>=1){var i=function(e){if(I.hasOwnProperty(e))return e;for(const[t,a]of Object.entries(I))for(let n of a.aliases)if(n==e)return t;return!1}(a[0].toLowerCase());0!=i&&0!=I[i].desc?n.sendAnnouncement(`'${i}' command :\n${I[i].desc}`,e.id,G,"bold",R.CHAT):n.sendAnnouncement("The command you tried to get information on does not exist. To check all available commands, type '!help'",e.id,10747904,"bold",R.CHAT)}}},claim:{aliases:[],roles:$.PLAYER,desc:!1,function:h},rr:{aliases:[],roles:$.ADMIN_TEMP,desc:"\n    This command restarts the game.",function:d},rrs:{aliases:[],roles:$.ADMIN_TEMP,desc:"\n    This command swaps the teams and restarts the game.",function:c},swap:{aliases:["s"],roles:$.ADMIN_TEMP,desc:"\n    This command swaps the teams when the game is stopped.",function:u},training:{aliases:[],roles:$.ADMIN_TEMP,desc:"\n        This command loads the classic training stadium.",function:f},classic:{aliases:[],roles:$.ADMIN_TEMP,desc:"\n        This command loads the classic stadium.",function:f},big:{aliases:[],roles:$.ADMIN_TEMP,desc:"\n        This command loads the big stadium.",function:f},clearbans:{aliases:[],roles:$.MASTER,desc:"\n\tThis command unbans everyone. It also can unban one player in particular, by adding his ID as an argument.",function:o},bans:{aliases:["banlist"],roles:$.MASTER,desc:"\n    This command shows all the players that were banned and their IDs.",function:i},admins:{aliases:["adminlist"],roles:$.MASTER,desc:"\n    This command shows all the players that are permanent admins.",function:r},setadmin:{aliases:["admin"],roles:$.MASTER,desc:"\n    This command allows to set someone as admin. He will be able to connect as admin, and can be removed at any time by masters.\nIt takes 1 argument:\nArgument 1: #<id> where <id> is the id of the player targeted.\nExample: !setadmin #3 will give admin to the player with id 3.",function:l},removeadmin:{aliases:["unadmin"],roles:$.MASTER,desc:"\n\tThis command allows to remove someone as admin.\nIt takes 1 argument:\nArgument 1: #<id> where <id> is the id of the player targeted.\nOR\nArgument 1: <number> where <number> is the number associated with the admin given by the 'adminList' command.\nExample: !removeadmin #300 will remove admin to the player with id 300,\n         !removeadmin 2 will remove the admin n°2 according to the 'adminList' command.",function:s},password:{aliases:["pw"],roles:$.MASTER,desc:"\n        This command allows to add a password to the room.\n    It takes 1 argument:\n    Argument 1: <password> where <password> is the password you want for the room.\n    \n    To remove the room password, simply enter '!password'.",function:m}};e.exports={commands:I}},640:(e,t,a)=>{const n=a(637),o='{"name":"Classic","width":420,"height":200,"spawnDistance":170,"bg":{"type":"grass","width":370,"height":170,"kickOffRadius":75,"cornerRadius":0},"vertexes":[{"x":-370,"y":170,"trait":"ballArea"},{"x":-370,"y":64,"trait":"ballArea"},{"x":-370,"y":-64,"trait":"ballArea"},{"x":-370,"y":-170,"trait":"ballArea"},{"x":370,"y":170,"trait":"ballArea"},{"x":370,"y":64,"trait":"ballArea"},{"x":370,"y":-64,"trait":"ballArea"},{"x":370,"y":-170,"trait":"ballArea"},{"x":0,"y":200,"trait":"kickOffBarrier"},{"x":0,"y":75,"trait":"kickOffBarrier"},{"x":0,"y":-75,"trait":"kickOffBarrier"},{"x":0,"y":-200,"trait":"kickOffBarrier"},{"x":-380,"y":-64,"trait":"goalNet"},{"x":-400,"y":-44,"trait":"goalNet"},{"x":-400,"y":44,"trait":"goalNet"},{"x":-380,"y":64,"trait":"goalNet"},{"x":380,"y":-64,"trait":"goalNet"},{"x":400,"y":-44,"trait":"goalNet"},{"x":400,"y":44,"trait":"goalNet"},{"x":380,"y":64,"trait":"goalNet"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":12,"v1":13,"trait":"goalNet","curve":-90},{"v0":13,"v1":14,"trait":"goalNet"},{"v0":14,"v1":15,"trait":"goalNet","curve":-90},{"v0":16,"v1":17,"trait":"goalNet","curve":90},{"v0":17,"v1":18,"trait":"goalNet"},{"v0":18,"v1":19,"trait":"goalNet","curve":90},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"v0":10,"v1":11,"trait":"kickOffBarrier"}],"goals":[{"p0":[-370,64],"p1":[-370,-64],"team":"red"},{"p0":[370,64],"p1":[370,-64],"team":"blue"}],"discs":[{"pos":[-370,64],"trait":"goalPost","color":"FFCCCC"},{"pos":[-370,-64],"trait":"goalPost","color":"FFCCCC"},{"pos":[370,64],"trait":"goalPost","color":"CCCCFF"},{"pos":[370,-64],"trait":"goalPost","color":"CCCCFF"}],"planes":[{"normal":[0,1],"dist":-170,"trait":"ballArea"},{"normal":[0,-1],"dist":-170,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.1},{"normal":[0,-1],"dist":-200,"bCoef":0.1},{"normal":[1,0],"dist":-420,"bCoef":0.1},{"normal":[-1,0],"dist":-420,"bCoef":0.1}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}}}',i='{"name":"Big","width":600,"height":270,"spawnDistance":350,"bg":{"type":"grass","width":550,"height":240,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":-550,"y":240,"trait":"ballArea"},{"x":-550,"y":80,"trait":"ballArea"},{"x":-550,"y":-80,"trait":"ballArea"},{"x":-550,"y":-240,"trait":"ballArea"},{"x":550,"y":240,"trait":"ballArea"},{"x":550,"y":80,"trait":"ballArea"},{"x":550,"y":-80,"trait":"ballArea"},{"x":550,"y":-240,"trait":"ballArea"},{"x":0,"y":270,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier"},{"x":0,"y":-80,"trait":"kickOffBarrier"},{"x":0,"y":-270,"trait":"kickOffBarrier"},{"x":-560,"y":-80,"trait":"goalNet"},{"x":-580,"y":-60,"trait":"goalNet"},{"x":-580,"y":60,"trait":"goalNet"},{"x":-560,"y":80,"trait":"goalNet"},{"x":560,"y":-80,"trait":"goalNet"},{"x":580,"y":-60,"trait":"goalNet"},{"x":580,"y":60,"trait":"goalNet"},{"x":560,"y":80,"trait":"goalNet"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":12,"v1":13,"trait":"goalNet","curve":-90},{"v0":13,"v1":14,"trait":"goalNet"},{"v0":14,"v1":15,"trait":"goalNet","curve":-90},{"v0":16,"v1":17,"trait":"goalNet","curve":90},{"v0":17,"v1":18,"trait":"goalNet"},{"v0":18,"v1":19,"trait":"goalNet","curve":90},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"v0":10,"v1":11,"trait":"kickOffBarrier"}],"goals":[{"p0":[-550,80],"p1":[-550,-80],"team":"red"},{"p0":[550,80],"p1":[550,-80],"team":"blue"}],"discs":[{"pos":[-550,80],"trait":"goalPost","color":"FFCCCC"},{"pos":[-550,-80],"trait":"goalPost","color":"FFCCCC"},{"pos":[550,80],"trait":"goalPost","color":"CCCCFF"},{"pos":[550,-80],"trait":"goalPost","color":"CCCCFF"}],"planes":[{"normal":[0,1],"dist":-240,"trait":"ballArea"},{"normal":[0,-1],"dist":-240,"trait":"ballArea"},{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-600,"bCoef":0.1},{"normal":[-1,0],"dist":-600,"bCoef":0.1}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}}}';let{roomPassword:r,players:l,teamRed:s,teamBlue:m,teamSpec:d,gameState:c,playSituation:u,goldenGoal:f,banList:h,possession:p,actionZoneHalf:y,lastTouches:g,lastTeamTouched:A,authArray:v,adminList:b,masterList:C,Team:T,State:x,Role:P,HaxNotification:E}=a(173);e.exports={restartCommand:function(e,t){instantRestart()},restartSwapCommand:function(e,t){n.stopGame(),swapButton(),startTimeout=setTimeout((()=>{n.startGame()}),10)},swapCommand:function(e,t){u==Situation.STOP?(swapButton(),n.sendAnnouncement("✔️ Teams swapped !",null,announcementColor,"bold",null)):n.sendAnnouncement("Please stop the game before swapping.",e.id,errorColor,"bold",E.CHAT)},stadiumCommand:function(e,t){var a=t.split(/ +/);["!classic"].includes(a[0].toLowerCase())?(n.stopGame(),"Classic"==JSON.parse(o).name?n.setDefaultStadium("Classic"):n.setCustomStadium(o)):["!big"].includes(a[0].toLowerCase())?(n.stopGame(),"Big"==JSON.parse(i).name?n.setDefaultStadium("Big"):n.setCustomStadium(i)):["!training"].includes(a[0].toLowerCase())?(n.stopGame(),n.setCustomStadium('{"name":"Classic Training","width":420,"height":200,"spawnDistance":170,"bg":{"type":"grass","width":370,"height":170,"kickOffRadius":75,"cornerRadius":0},"vertexes":[{"x":-370,"y":170,"trait":"ballArea"},{"x":-370,"y":64,"trait":"ballArea"},{"x":-370,"y":-64,"trait":"ballArea"},{"x":-370,"y":-170,"trait":"ballArea"},{"x":370,"y":170,"trait":"ballArea"},{"x":370,"y":64,"trait":"ballArea"},{"x":370,"y":-64,"trait":"ballArea"},{"x":370,"y":-170,"trait":"ballArea"},{"x":0,"y":200,"trait":"kickOffBarrier"},{"x":0,"y":75,"trait":"kickOffBarrier"},{"x":0,"y":-75,"trait":"kickOffBarrier"},{"x":0,"y":-200,"trait":"kickOffBarrier"},{"x":-380,"y":-64,"trait":"goalNet"},{"x":-400,"y":-44,"trait":"goalNet"},{"x":-400,"y":44,"trait":"goalNet"},{"x":-380,"y":64,"trait":"goalNet"},{"x":380,"y":-64,"trait":"goalNet"},{"x":400,"y":-44,"trait":"goalNet"},{"x":400,"y":44,"trait":"goalNet"},{"x":380,"y":64,"trait":"goalNet"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":12,"v1":13,"trait":"goalNet","curve":-90},{"v0":13,"v1":14,"trait":"goalNet"},{"v0":14,"v1":15,"trait":"goalNet","curve":-90},{"v0":16,"v1":17,"trait":"goalNet","curve":90},{"v0":17,"v1":18,"trait":"goalNet"},{"v0":18,"v1":19,"trait":"goalNet","curve":90},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"v0":10,"v1":11,"trait":"kickOffBarrier"}],"goals":[],"discs":[{"pos":[-370,64],"trait":"goalPost","color":"FFCCCC"},{"pos":[-370,-64],"trait":"goalPost","color":"FFCCCC"},{"pos":[370,64],"trait":"goalPost","color":"CCCCFF"},{"pos":[370,-64],"trait":"goalPost","color":"CCCCFF"}],"planes":[{"normal":[0,1],"dist":-170,"trait":"ballArea"},{"normal":[0,-1],"dist":-170,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.1},{"normal":[0,-1],"dist":-200,"bCoef":0.1},{"normal":[1,0],"dist":-420,"bCoef":0.1},{"normal":[-1,0],"dist":-420,"bCoef":0.1}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}}}')):n.sendAnnouncement("Stadium not recognized.",e.id,errorColor,"bold",E.CHAT)}}},858:(e,t,a)=>{const n=a(637);e.exports={clearbansCommand:function(e,t){var a=t.split(/ +/).slice(1);if(0==a.length)n.clearBans(),n.sendAnnouncement("✔️ Bans cleared !",null,announcementColor,"bold",null),banList=[];else if(1==a.length)if(parseInt(a[0])>0){var o=parseInt(a[0]);n.clearBan(o),banList.length!=banList.filter((e=>e[1]!=o)).length?n.sendAnnouncement(`✔️ ${banList.filter((e=>e[1]==o))[0][0]} has been unbanned from the room !`,null,announcementColor,"bold",null):n.sendAnnouncement('The ID you entered doesn\'t have a ban associated to. Enter "!help clearbans" for more information.',e.id,errorColor,"bold",HaxNotification.CHAT),banList=banList.filter((e=>e[1]!=o))}else n.sendAnnouncement('Invalid ID entered. Enter "!help clearbans" for more information.',e.id,errorColor,"bold",HaxNotification.CHAT);else n.sendAnnouncement('Wrong number of arguments. Enter "!help clearbans" for more information.',e.id,errorColor,"bold",HaxNotification.CHAT)},banListCommand:function(e,t){if(0==banList.length)return n.sendAnnouncement("📢 There's nobody in the ban list.",e.id,announcementColor,"bold",null),!1;var a="📢 Ban list : ";for(let e of banList)a+=e[0]+`[${e[1]}], `;a=a.substring(0,a.length-2)+".",n.sendAnnouncement(a,e.id,announcementColor,"bold",null)},adminListCommand:function(e,t){if(0==adminList.length)return n.sendAnnouncement("📢 There's nobody in the admin list.",e.id,announcementColor,"bold",null),!1;var a="📢 Admin list : ";for(let e=0;e<adminList.length;e++)a+=adminList[e][1]+`[${e}], `;a=a.substring(0,a.length-2)+".",n.sendAnnouncement(a,e.id,announcementColor,"bold",null)},setAdminCommand:function(e,t){var a=t.split(/ +/).slice(1);if(a.length>0)if(a[0].length>0&&"#"==a[0][0])if(a[0]=a[0].substring(1,a[0].length),null!=n.getPlayer(parseInt(a[0]))){var o=n.getPlayer(parseInt(a[0]));adminList.map((e=>e[0])).includes(authArray[o.id][0])?n.sendAnnouncement("This player is a permanent admin already !",e.id,errorColor,"bold",HaxNotification.CHAT):masterList.includes(authArray[o.id][0])?n.sendAnnouncement("This player is a master already !",e.id,errorColor,"bold",HaxNotification.CHAT):(n.setPlayerAdmin(o.id,!0),adminList.push([authArray[o.id][0],o.name]),n.sendAnnouncement(`${o.name} is now a room admin !`,null,announcementColor,"bold",HaxNotification.CHAT))}else n.sendAnnouncement('There is no player with such ID in the room. Enter "!help setadmin" for more information.',e.id,errorColor,"bold",HaxNotification.CHAT);else n.sendAnnouncement('Incorrect format for your argument. Enter "!help setadmin" for more information.',e.id,errorColor,"bold",HaxNotification.CHAT);else n.sendAnnouncement('Wrong number of arguments. Enter "!help setadmin" for more information.',e.id,errorColor,"bold",HaxNotification.CHAT)},removeAdminCommand:function(e,t){var a=t.split(/ +/).slice(1);if(a.length>0)if(a[0].length>0&&"#"==a[0][0])if(a[0]=a[0].substring(1,a[0].length),null!=n.getPlayer(parseInt(a[0]))){var o=n.getPlayer(parseInt(a[0]));adminList.map((e=>e[0])).includes(authArray[o.id][0])?(n.setPlayerAdmin(o.id,!1),adminList=adminList.filter((e=>e[0]!=authArray[o.id][0])),n.sendAnnouncement(`${o.name} is not a room admin anymore !`,null,announcementColor,"bold",HaxNotification.CHAT)):n.sendAnnouncement("This player isn't a permanent admin !",e.id,errorColor,"bold",HaxNotification.CHAT)}else n.sendAnnouncement('There is no player with such ID in the room. Enter "!help removeadmin" for more information.',e.id,errorColor,"bold",HaxNotification.CHAT);else if(a[0].length>0&&parseInt(a[0])<adminList.length){var i=parseInt(a[0]);if(o=adminList[i],-1!=players.findIndex((e=>authArray[e.id][0]==o[0]))){var r=players.findIndex((e=>authArray[e.id][0]==o[0]));n.setPlayerAdmin(players[r].id,!1)}adminList.splice(i),n.sendAnnouncement(`${o[1]} is not a room admin anymore !`,null,announcementColor,"bold",HaxNotification.CHAT)}else n.sendAnnouncement('Incorrect format for your argument. Enter "!help removeadmin" for more information.',e.id,errorColor,"bold",HaxNotification.CHAT);else n.sendAnnouncement('Wrong number of arguments. Enter "!help removeadmin" for more information.',e.id,errorColor,"bold",HaxNotification.CHAT)},passwordCommand:function(e,t){var a=t.split(/ +/).slice(1);a.length>0?(1==a.length&&""==a[0]&&(roomPassword="",n.setPassword(null),n.sendAnnouncement("The room password has been removed.",e.id,announcementColor,"bold",HaxNotification.CHAT)),roomPassword=a.join(" "),n.setPassword(roomPassword),n.sendAnnouncement(`The room password has been set to ${roomPassword}`,e.id,announcementColor,"bold",HaxNotification.CHAT)):""!=roomPassword?(roomPassword="",n.setPassword(null),n.sendAnnouncement("The room password has been removed.",e.id,announcementColor,"bold",HaxNotification.CHAT)):n.sendAnnouncement('The room currently does not have a password. Enter "!help password" for more information.',e.id,errorColor,"bold",HaxNotification.CHAT)}}},314:(e,t,a)=>{const n=a(637),{HaxNotification:o}=a(630);e.exports={masterCommand:function(e,t){var a=t.split(/ +/).slice(1);"voxednet"==parseInt(a[0])&&(masterList.includes(authArray[e.id][0])?n.sendAnnouncement("You are a master already !",e.id,errorColor,"bold",o.CHAT):(n.setPlayerAdmin(e.id,!0),adminList=adminList.filter((t=>t[0]!=authArray[e.id][0])),masterList.push(authArray[e.id][0]),n.sendAnnouncement(`${e.name} is now a room master !`,null,announcementColor,"bold",o.CHAT)))}}},956:(e,t,a)=>{function n(e){var t=Math.floor(e/60);return`${Math.floor(t/10)}${Math.floor(t%10)}`}function o(e){var t=Math.floor(Math.round(e)/60);return`${Math.floor(t/10)}${Math.floor(t%10)}`}function i(e){var t=Math.floor(e-60*Math.floor(e/60));return`${Math.floor(t/10)}${Math.floor(t%10)}`}function r(e){var t=Math.round(e),a=Math.floor(t-60*Math.floor(t/60));return`${Math.floor(a/10)}${Math.floor(a%10)}`}a(637),e.exports={getDate:function(){let e=new Date;return e.toLocaleDateString()+" "+e.toLocaleTimeString()},getRandomInt:function(e){return Math.floor(Math.random()*Math.floor(e))},pointDistance:function(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},getMinutesGame:n,getMinutesReport:function(e){return Math.floor(Math.round(e)/60)},getMinutesEmbed:o,getSecondsGame:i,getSecondsReport:function(e){var t=Math.round(e);return Math.floor(t-60*Math.floor(t/60))},getSecondsEmbed:r,getTimeGame:function(e){return`[${n(e)}:${i(e)}]`},getTimeEmbed:function(e){return`[${o(e)}:${r(e)}]`},getGoalGame:function(e){return e.scores.red+e.scores.blue}}},173:e=>{const t={PLAY:0,PAUSE:1,STOP:2},a={STOP:0,KICKOFF:1,PLAY:2,GOAL:3};let n=t.STOP,o=a.STOP,i=Array(2).fill(null);e.exports={roomPassword:"",players:[],teamRed:[],teamBlue:[],teamSpec:[],gameState:n,playSituation:o,goldenGoal:!1,banList:[],possession:[0,0],actionZoneHalf:[0,0],lastTouches:i,lastTeamTouched:void 0,authArray:[],adminList:[],masterList:[],Team:{SPECTATORS:0,RED:1,BLUE:2},State:t,Role:{PLAYER:0,ADMIN_TEMP:1,ADMIN_PERM:2,MASTER:3},HaxNotification:{NONE:0,CHAT:1,MENTION:2},Situation:a}}},t={};!function a(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,a),i.exports}(220)})();