'use strict';const a0_0x2fb9aa=a0_0x44a6;(function(_0x217f91,_0x4ae433){const _0x6fab49=a0_0x44a6,_0x56adb2=_0x217f91();while(!![]){try{const _0x5e7f38=parseInt(_0x6fab49(0x16c))/0x1+-parseInt(_0x6fab49(0x197))/0x2*(-parseInt(_0x6fab49(0x1ab))/0x3)+parseInt(_0x6fab49(0x19e))/0x4*(-parseInt(_0x6fab49(0x1bf))/0x5)+parseInt(_0x6fab49(0x16e))/0x6*(-parseInt(_0x6fab49(0x190))/0x7)+parseInt(_0x6fab49(0x1b9))/0x8*(parseInt(_0x6fab49(0x1ad))/0x9)+-parseInt(_0x6fab49(0x18d))/0xa+-parseInt(_0x6fab49(0x1a8))/0xb*(parseInt(_0x6fab49(0x198))/0xc);if(_0x5e7f38===_0x4ae433)break;else _0x56adb2['push'](_0x56adb2['shift']());}catch(_0x46657b){_0x56adb2['push'](_0x56adb2['shift']());}}}(a0_0x50ee,0x1dddd));function a0_0x44a6(_0x3490b1,_0x2f0f9c){const _0x50ee3d=a0_0x50ee();return a0_0x44a6=function(_0x44a66b,_0x351733){_0x44a66b=_0x44a66b-0x167;let _0x26904f=_0x50ee3d[_0x44a66b];return _0x26904f;},a0_0x44a6(_0x3490b1,_0x2f0f9c);}process['on'](a0_0x2fb9aa(0x188),_0x36d3c6=>{const _0x10564f=a0_0x2fb9aa;if(_0x36d3c6&&_0x36d3c6[_0x10564f(0x17f)]&&_0x36d3c6[_0x10564f(0x17f)][_0x10564f(0x1ac)](_0x10564f(0x1a9))){}else console[_0x10564f(0x19f)](_0x10564f(0x167),_0x36d3c6);}),process['on']('unhandledRejection',(_0x2709ef,_0x34affb)=>{const _0xda26e=a0_0x2fb9aa;if(_0x2709ef&&_0x2709ef['message']&&_0x2709ef[_0xda26e(0x17f)][_0xda26e(0x1ac)]('TIMEOUT')){}else console[_0xda26e(0x19f)]('Unhandled\x20Rejection:',_0x2709ef);});const fs=require('fs'),path=require('path'),readline=require(a0_0x2fb9aa(0x199)),{exec}=require('child_process'),{promisify}=require(a0_0x2fb9aa(0x16a)),execPromise=promisify(exec),{TelegramClient,Api}=require(a0_0x2fb9aa(0x168)),{StringSession}=require(a0_0x2fb9aa(0x1c9)),APP_ID=0x10e3ace,APP_HASH=a0_0x2fb9aa(0x179);function log(_0x254ce6,_0x3c54ed=''){const _0x1b878d=a0_0x2fb9aa,_0x264334=new Date()[_0x1b878d(0x1b5)]()['replace']('T',_0x1b878d(0x1c5))['split']('.')[0x0];console[_0x1b878d(0x1b1)](_0x1b878d(0x1a1)+_0x264334+_0x1b878d(0x1ca)+_0x3c54ed+_0x254ce6+_0x1b878d(0x19d));}function readConfig(_0xc74404){const _0x3c089f=a0_0x2fb9aa;return JSON[_0x3c089f(0x182)](fs[_0x3c089f(0x177)](_0xc74404,_0x3c089f(0x174)));}function readLines(_0x18e8d1){const _0x2e3f13=a0_0x2fb9aa;return fs[_0x2e3f13(0x177)](_0x18e8d1,_0x2e3f13(0x174))[_0x2e3f13(0x1d9)]('\x0a')[_0x2e3f13(0x192)](_0x19a340=>_0x19a340[_0x2e3f13(0x193)]()!=='');}function readSessions(_0x1cc5f3){const _0x480fb3=a0_0x2fb9aa,_0x1be4c3=[];for(const _0x3575e9 of readLines(_0x1cc5f3)){const _0x22612e=_0x3575e9[_0x480fb3(0x1d9)](',')[_0x480fb3(0x1b4)](_0x3dbc40=>_0x3dbc40[_0x480fb3(0x193)]());_0x22612e[_0x480fb3(0x1a6)]===0x3&&_0x1be4c3[_0x480fb3(0x1d5)]({'sessionName':_0x22612e[0x0],'directory':_0x22612e[0x1],'command':_0x22612e[0x2]});}return _0x1be4c3;}async function autoGitPull(_0x43bd17,_0x1d2eec){const _0x484d08=a0_0x2fb9aa;if(!_0x1d2eec){log(_0x484d08(0x1be),_0x484d08(0x1b3));return;}for(const {directory:_0x3f7073}of _0x43bd17){log('📂\x20Updating\x20repository\x20in\x20\x27'+_0x3f7073+'\x27.',_0x484d08(0x1c4));try{const {stdout:_0x43ccc5,stderr:_0x5849e9}=await execPromise(_0x484d08(0x19b)+_0x3f7073+'\x22\x20pull');_0x5849e9&&!_0x5849e9['includes'](_0x484d08(0x1a9))?log(_0x484d08(0x180)+_0x3f7073+_0x484d08(0x1a2)+_0x5849e9,'\x1b[91m'):(log(_0x484d08(0x1bb)+_0x3f7073+'\x27\x20updated\x20successfully.',_0x484d08(0x1d6)),log('📤\x20'+_0x43ccc5,_0x484d08(0x1c4)));}catch(_0x4f63b1){!_0x4f63b1[_0x484d08(0x17f)]['includes'](_0x484d08(0x1a9))&&log(_0x484d08(0x1af)+_0x3f7073+_0x484d08(0x1a2)+_0x4f63b1,_0x484d08(0x1c2));}}}async function manageSessions(_0x120edd){const _0x5412c9=a0_0x2fb9aa;for(const {sessionName:_0x1110ea,directory:_0x56f12f,command:_0x2bd196}of _0x120edd){try{process[_0x5412c9(0x1c0)](_0x56f12f);}catch(_0x534aae){log(_0x5412c9(0x1c6)+_0x56f12f+'\x27:\x20'+_0x534aae,_0x5412c9(0x1c2));continue;}try{await execPromise(_0x5412c9(0x187)+_0x1110ea),log(_0x5412c9(0x1c3)+_0x1110ea+_0x5412c9(0x1a4),_0x5412c9(0x1d6));}catch(_0x29a95e){log('🟡\x20Starting\x20session:\x20\x27'+_0x1110ea+'\x27',_0x5412c9(0x1b3));try{const {stderr:_0x3c69b8}=await execPromise('tmux\x20new-session\x20-d\x20-s\x20'+_0x1110ea+_0x5412c9(0x1b7)+_0x2bd196+'\x22');_0x3c69b8?log(_0x5412c9(0x16d)+_0x1110ea+_0x5412c9(0x1a2)+_0x3c69b8,_0x5412c9(0x1c2)):log('✅\x20Session\x20\x27'+_0x1110ea+_0x5412c9(0x1aa),_0x5412c9(0x1d6));}catch(_0xd6a5){log('❌\x20Failed\x20to\x20create\x20session\x20\x27'+_0x1110ea+_0x5412c9(0x1a2)+_0xd6a5,_0x5412c9(0x1c2));}}}}function readAccountFile(_0x2064af){const _0x26a502=a0_0x2fb9aa,_0x528681=[];for(const _0x5e53a of readLines(_0x2064af)){const _0x23f00a=_0x5e53a[_0x26a502(0x1d9)](',')[_0x26a502(0x1b4)](_0x505be8=>_0x505be8[_0x26a502(0x193)]());if(_0x23f00a[_0x26a502(0x1a6)]<0x2)continue;const _0x46d08f=_0x23f00a[0x0],_0xb7b51f=[];for(let _0x18df7d=0x1;_0x18df7d<_0x23f00a[_0x26a502(0x1a6)];_0x18df7d++){const _0x567ef1=_0x23f00a[_0x18df7d][_0x26a502(0x1d9)]('|')[_0x26a502(0x1b4)](_0x107b04=>_0x107b04['trim']());if(_0x567ef1[_0x26a502(0x1a6)]>=0x2){const _0x39feb0=_0x567ef1[0x0],_0x4ad569=_0x567ef1[0x1],_0x4c9743=_0x567ef1[_0x26a502(0x1a6)]>=0x3&&_0x567ef1[0x2][_0x26a502(0x183)]()===_0x26a502(0x191);_0xb7b51f['push']({'username':_0x39feb0,'dapp_url':_0x4ad569,'raw':_0x4c9743});}}_0x528681[_0x26a502(0x1d5)]({'phone':_0x46d08f,'queries':_0xb7b51f});}return _0x528681;}function readScriptFile(_0x357960){const _0x1d9719=a0_0x2fb9aa,_0xfc7b92={};for(const _0x50859a of readLines(_0x357960)){if(_0x50859a[_0x1d9719(0x1ac)](',')){const [_0x5f0ca8,_0x25eb89]=_0x50859a[_0x1d9719(0x1d9)](',',0x2);_0xfc7b92[_0x5f0ca8[_0x1d9719(0x193)]()]=_0x25eb89['trim']();}}return _0xfc7b92;}function sanitizePhone(_0x3c6342){return _0x3c6342['replace'](/\D/g,'');}function prompt(_0x30a093){const _0x2691d5=a0_0x2fb9aa,_0x50c56e=readline[_0x2691d5(0x181)]({'input':process[_0x2691d5(0x178)],'output':process[_0x2691d5(0x18b)]});return new Promise(_0x175ac1=>_0x50c56e[_0x2691d5(0x18a)](_0x30a093,_0x357b25=>{const _0x128021=_0x2691d5;_0x50c56e[_0x128021(0x1a7)](),_0x175ac1(_0x357b25['trim']());}));}function a0_0x50ee(){const _0x479d54=['257411zXpbEQ','TIMEOUT','\x27\x20created\x20successfully.','12507rIynbl','includes','25884EoIzZH','account.txt','❌\x20Error\x20running\x20git\x20pull\x20in\x20\x27','delay_minutes','log','script_bot.txt','\x1b[93m','map','toISOString','auto_query','\x20sh\x20-c\x20\x22','🛑\x20TMUX\x20session\x20management\x20disabled\x20since\x20Termux\x20mode\x20is\x20disabled.','584BbnXgZ','join','✅\x20Repository\x20in\x20\x27','username','💾\x20Query\x20for\x20','🛑\x20Skipping\x20Git\x20updates\x20as\x20per\x20configuration.','14125tdtgqo','chdir','termux-wake-lock','\x1b[91m','🟢\x20Session\x20\x27','\x1b[94m','\x20~\x20','❌\x20Failed\x20to\x20change\x20directory\x20to\x20\x27','RequestWebView','android','telegram/sessions',']\x1b[0m\x20','queries','invoke','bot','🚀\x20Running\x20Auto\x20Query\x20System...','session','indexOf','connect','\x20not\x20found.\x20Starting\x20login\x20process...','Query\x20not\x20found','Entity\x20is\x20a\x20channel\x20and\x20not\x20a\x20bot\x20user','push','\x1b[92m','❌\x20Request\x20query\x20failed\x20for\x20','\x20minutes...','split','Uncaught\x20Exception:','telegram','✅\x20Signed\x20in\x20as\x20','util','writeFileSync','186622wBPcly','❌\x20Failed\x20to\x20create\x20session\x20\x27','55098hktGlg','sessions','appendFileSync','disconnect','termux','🔑\x20Session\x20for\x20','utf8','existsSync','stringify','readFileSync','stdin','ecb718e2f356a062fce2bbd7af4ac76b','auto_run','getEntity','className',';\x20please\x20follow\x20the\x20ToS.','dapp_url','message','❌\x20Failed\x20to\x20update\x20repository\x20in\x20\x27','createInterface','parse','toLowerCase','sessions.txt','tgWebAppData=','config_bot.json','tmux\x20has-session\x20-t\x20','uncaughtException','⚠️\x20\x20Warning:\x20termux-wake-lock\x20failed:\x20','question','stdout','substring','1244100ViNNfi','🔐\x20Please\x20enter\x20your\x20password\x20(if\x20required):\x20','InputPeerChannel','98fvxVVq','raw','filter','trim','update_repos','📴\x20Termux\x20mode\x20disabled.','save','86GKNSrH','84UuIeYV','readline','Client\x20error:\x20','git\x20-C\x20\x22','mkdirSync','\x1b[0m','52fRdGgS','error','inputPeerChannel','\x1b[90m[','\x27:\x20','📝\x20Please\x20enter\x20the\x20code\x20you\x20received:\x20','\x27\x20is\x20already\x20running.','url','length','close'];a0_0x50ee=function(){return _0x479d54;};return a0_0x50ee();}async function loginForAccount(_0x188e3f){const _0x5a0629=a0_0x2fb9aa;log(_0x5a0629(0x173)+_0x188e3f+_0x5a0629(0x1d2),_0x5a0629(0x1b3));const _0x2ff395=new StringSession(''),_0x49ec30=new TelegramClient(_0x2ff395,APP_ID,APP_HASH,{'connectionRetries':0x5});await _0x49ec30['start']({'phoneNumber':()=>_0x188e3f,'phoneCode':()=>prompt(_0x5a0629(0x1a3)),'password':()=>prompt(_0x5a0629(0x18e)),'onError':_0x389e7d=>{console['error'](_0x389e7d);}}),log(_0x5a0629(0x169)+_0x49ec30[_0x5a0629(0x1cf)]['userId']+_0x5a0629(0x17d),_0x5a0629(0x1d6));const _0x21c287=_0x49ec30['session'][_0x5a0629(0x196)]();return await _0x49ec30[_0x5a0629(0x171)](),_0x21c287;}async function ensureSessionForAccount(_0x3c26ed){const _0x45a0fd=a0_0x2fb9aa,_0x2cfb24=sanitizePhone(_0x3c26ed),_0x1ea616=path[_0x45a0fd(0x1ba)](_0x45a0fd(0x168),_0x45a0fd(0x16f),_0x2cfb24),_0x2a4771=path[_0x45a0fd(0x1ba)](_0x1ea616,'session.txt');if(!fs[_0x45a0fd(0x175)](_0x2a4771)){fs[_0x45a0fd(0x19c)](_0x1ea616,{'recursive':!![]});const _0x541c45=await loginForAccount(_0x3c26ed);return fs[_0x45a0fd(0x16b)](_0x2a4771,_0x541c45,_0x45a0fd(0x174)),_0x541c45;}else return fs[_0x45a0fd(0x177)](_0x2a4771,'utf8');}async function requestQueryForAccount(_0x488019,_0x21ae24){const _0x317632=a0_0x2fb9aa;try{let _0x3974d7=await _0x488019['getInputEntity'](_0x21ae24[_0x317632(0x1bc)]);if(_0x3974d7[_0x317632(0x17c)]===_0x317632(0x1a0)||_0x3974d7['className']===_0x317632(0x18f)){const _0x5c0d05=await _0x488019[_0x317632(0x17b)](_0x21ae24['username']);if(_0x5c0d05[_0x317632(0x1cd)])_0x3974d7=new Api['InputPeerUser']({'userId':_0x5c0d05['id'],'accessHash':_0x5c0d05['accessHash']});else throw new Error(_0x317632(0x1d4));}const _0x3135a3=await _0x488019[_0x317632(0x1cc)](new Api['messages'][(_0x317632(0x1c7))]({'peer':_0x3974d7,'bot':_0x3974d7,'fromBotMenu':![],'url':_0x21ae24[_0x317632(0x17e)],'platform':_0x317632(0x1c8)}));log('📥\x20Response\x20for\x20'+_0x21ae24[_0x317632(0x1bc)]+':\x20'+JSON[_0x317632(0x176)](_0x3135a3),_0x317632(0x1c4));if(_0x3135a3[_0x317632(0x1a5)]){const _0x32c1a8=new URL(_0x3135a3[_0x317632(0x1a5)]),_0x94d22d=_0x32c1a8['hash'];if(_0x94d22d){const _0x2e9d51=_0x94d22d[_0x317632(0x18c)](0x1),_0x292350=_0x317632(0x185),_0x436f13=_0x2e9d51['indexOf'](_0x292350);if(_0x436f13!==-0x1){let _0x421ddd=_0x2e9d51[_0x317632(0x18c)](_0x436f13+_0x292350[_0x317632(0x1a6)]);const _0x28ec53=_0x421ddd[_0x317632(0x1d0)]('&');return _0x28ec53!==-0x1&&(_0x421ddd=_0x421ddd[_0x317632(0x18c)](0x0,_0x28ec53)),!_0x21ae24[_0x317632(0x191)]?decodeURIComponent(_0x421ddd):_0x421ddd;}}}return'Query\x20not\x20found';}catch(_0x30a71d){return log(_0x317632(0x1d7)+_0x21ae24[_0x317632(0x1bc)]+':\x20'+_0x30a71d,_0x317632(0x1c2)),_0x317632(0x1d3);}}async function autoQuerySystem(){const _0x12f17d=a0_0x2fb9aa,_0x46178e=readAccountFile(_0x12f17d(0x1ae)),_0xae547d=readScriptFile(_0x12f17d(0x1b2)),_0x539dbd={};for(const _0x1b7423 of _0x46178e){const _0x3484f2=await ensureSessionForAccount(_0x1b7423['phone']),_0x176159=new TelegramClient(new StringSession(_0x3484f2),APP_ID,APP_HASH,{'connectionRetries':0x5});await _0x176159[_0x12f17d(0x1d1)](),_0x176159['on'](_0x12f17d(0x19f),_0x5aa309=>{const _0x29ec30=_0x12f17d;!_0x5aa309[_0x29ec30(0x17f)][_0x29ec30(0x1ac)](_0x29ec30(0x1a9))&&log(_0x29ec30(0x19a)+_0x5aa309,_0x29ec30(0x1c2));});for(const _0x17a118 of _0x1b7423[_0x12f17d(0x1cb)]){const _0x2d5649=await requestQueryForAccount(_0x176159,_0x17a118);if(_0xae547d[_0x17a118[_0x12f17d(0x1bc)]]){const _0x5ba302=_0xae547d[_0x17a118[_0x12f17d(0x1bc)]];!_0x539dbd[_0x17a118[_0x12f17d(0x1bc)]]&&(fs[_0x12f17d(0x16b)](_0x5ba302,'',_0x12f17d(0x174)),_0x539dbd[_0x17a118[_0x12f17d(0x1bc)]]=!![]),fs[_0x12f17d(0x170)](_0x5ba302,_0x2d5649+'\x0a','utf8'),log(_0x12f17d(0x1bd)+_0x17a118[_0x12f17d(0x1bc)]+'\x20saved\x20to\x20'+_0x5ba302,_0x12f17d(0x1d6));}}await _0x176159[_0x12f17d(0x171)]();}}async function main(){const _0x11a3d1=a0_0x2fb9aa,_0x529b78=readConfig(_0x11a3d1(0x186));if(_0x529b78[_0x11a3d1(0x172)])try{await execPromise(_0x11a3d1(0x1c1));}catch(_0x3920ae){log(_0x11a3d1(0x189)+_0x3920ae,_0x11a3d1(0x1b3));}else log(_0x11a3d1(0x195),_0x11a3d1(0x1b3));_0x529b78[_0x11a3d1(0x1b6)]&&(log(_0x11a3d1(0x1ce),'\x1b[96m'),await autoQuerySystem(),log('✅\x20All\x20Telegram\x20connections\x20have\x20been\x20disconnected\x20after\x20auto\x20query.','\x1b[92m'));const _0x696f00=readSessions(_0x11a3d1(0x184));await autoGitPull(_0x696f00,_0x529b78[_0x11a3d1(0x194)]);if(_0x529b78['termux'])while(_0x529b78[_0x11a3d1(0x17a)]){await manageSessions(_0x696f00),log('😴\x20Sleeping\x20for\x20'+_0x529b78[_0x11a3d1(0x1b0)]+_0x11a3d1(0x1d8),_0x11a3d1(0x1c4)),await new Promise(_0x3f46b0=>setTimeout(_0x3f46b0,_0x529b78['delay_minutes']*0x3c*0x3e8));}else log(_0x11a3d1(0x1b8),_0x11a3d1(0x1b3));}main()['catch'](_0x28d941=>{const _0xdca135=a0_0x2fb9aa;log('❌\x20'+_0x28d941,_0xdca135(0x1c2));});