(this.webpackJsonpgamewave=this.webpackJsonpgamewave||[]).push([[0],Array(26).concat([function(t,e,i){t.exports=i.p+"static/media/Pawn.b3be38d2.svg"},function(t,e,i){t.exports=i.p+"static/media/Pawn-white.b24dced7.svg"},function(t,e,i){t.exports=i.p+"static/media/Knight.8b60a74f.svg"},function(t,e,i){t.exports=i.p+"static/media/Knight-white.ce2faf3c.svg"},function(t,e,i){t.exports=i.p+"static/media/King.912b64b4.svg"},function(t,e,i){t.exports=i.p+"static/media/King-white.ad1c5459.svg"},function(t,e,i){t.exports=i.p+"static/media/Queen.6a1f3004.svg"},function(t,e,i){t.exports=i.p+"static/media/Queen-white.3ac262da.svg"},function(t,e,i){t.exports=i.p+"static/media/Rook.9b12af1b.svg"},function(t,e,i){t.exports=i.p+"static/media/Rook-white.3dd20b2a.svg"},function(t,e,i){t.exports=i.p+"static/media/Bishop.58d796b2.svg"},function(t,e,i){t.exports=i.p+"static/media/Bishop-white.2433d126.svg"},function(t,e,i){t.exports=i(53)},,,,,function(t,e,i){},function(t,e,i){},,,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var a=i(0),o=i.n(a),n=i(19),l=i.n(n),s=(i(43),i(44),i(14));var r=function(){return o.a.createElement("header",null,o.a.createElement(s.b,{to:"/",className:"logo"},"GameWave"),o.a.createElement("nav",null,o.a.createElement(s.b,{to:"/",className:"link"},"Home")))},c=i(6);var h=function(){var t=Object(c.f)();return o.a.createElement("div",{className:"GameSelect"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"card-one img"}),o.a.createElement("div",{className:"title-one title"})),o.a.createElement("p",null,"Grab a cup of coffee and Your friend. Then challenge yourself in the most famous board game of all time - chess! "),o.a.createElement("button",{onClick:function(){t.push("/chess")},id:"chess-btn",className:"btn"},"Play")),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"card-two img"}),o.a.createElement("div",{className:"title-two title"})),o.a.createElement("p",null,"Scratch your head trying to solve a 3x3 Rubik's cube. Be patient and don't give up, it's not that hard!"),o.a.createElement("button",{onClick:function(){t.push("/rubiks")},id:"rubiks-btn",className:"btn"},"Play")),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"card-three img"}),o.a.createElement("div",{className:"title-three title"})),o.a.createElement("p",null,"Play a classic Tetris game just like in the 90s! Can you get over 9000 points?"),o.a.createElement("button",{onClick:function(){t.push("/tetris")},id:"tetris-btn",className:"btn"},"Play")))},u=i(16),p=i(1),m=i(4),d=i(12),f=i(2),y=i(3),v=(i(50),function(t){Object(f.a)(i,t);var e=Object(y.a)(i);function i(t){var a;return Object(p.a)(this,i),(a=e.call(this,t)).canvas=o.a.createRef(),a.state={score:0},a.setScore=a.setScore.bind(Object(d.a)(a)),a}return Object(m.a)(i,[{key:"setScore",value:function(t){this.setState({score:t})}},{key:"componentDidMount",value:function(){this.context=this.canvas.current.getContext("2d"),this.game=new b(this.context,this.setScore)}},{key:"render",value:function(){return o.a.createElement("div",{className:"wrapper"},o.a.createElement("canvas",{id:"can",ref:this.canvas,width:"300px",height:"600px"}),o.a.createElement("div",{className:"instructions"},o.a.createElement("div",{className:"arrows"},o.a.createElement("div",{className:"arrow arrow-left"}),o.a.createElement("div",{className:"arrow arrow-right"}),o.a.createElement("div",{className:"arrow arrow-down"})),o.a.createElement("h1",null,"Use arrows to move"),o.a.createElement("div",{className:"space-button"}),o.a.createElement("h1",null,"Use space to rotate the block"),o.a.createElement("h1",null,"Score: ",this.state.score)))}}]),i}(a.Component)),b=function t(e,i){var a=this;Object(p.a)(this,t),this.start=function(){a.time={then:Date.now(),now:0,elapsed:0,interval:1e3/30,dropCounter:0},a.gameBoard.drawBoard(a.context2D),a.gameLoop()},this.gameLoop=function(){a.frameID=requestAnimationFrame(a.gameLoop),a.time.now=Date.now(),a.time.elapsed=a.time.now-a.time.then,a.time.elapsed>a.time.interval&&(a.time.then=a.time.now-a.time.elapsed%a.time.interval,a.time.dropCounter+=1,a.context2D.clearRect(0,0,a.context2D.canvas.width,a.context2D.canvas.height),a.gameBoard.drawBoard(a.context2D),20==a.time.dropCounter&&(a.tetromino.moveDown(a.gameBoard),a.time.dropCounter=0),a.tetromino.drawTetromino(a.context2D),a.setScore(a.gameBoard.score),a.settings.loose&&(cancelAnimationFrame(a.frameID),a.context2D.clearRect(0,0,a.context2D.canvas.width,a.context2D.canvas.height),a.context2D.font="30px Comic Sans MS",a.context2D.fillStyle="white",a.context2D.textAlign="center",a.context2D.fillText("You loose!",a.context2D.canvas.width/2,130),a.context2D.fillText("press 'q' to",a.context2D.canvas.width/2,170),a.context2D.fillText("restart game",a.context2D.canvas.width/2,200)))},this.setScore=i,this.context2D=e,this.settings={cellSize:30,rows:20,columns:10,intervals:250,loose:!1},this.gameBoard=new g(this.settings.rows,this.settings.columns,this.settings.cellSize),this.tetromino=new w(this.settings.cellSize,this.settings),window.addEventListener("keydown",(function(t){37==t.keyCode&&a.tetromino.moveLeft(a.gameBoard.gameBoard),39==t.keyCode&&a.tetromino.moveRight(a.gameBoard.gameBoard),32==t.keyCode&&a.tetromino.rotate(a.gameBoard.gameBoard),40==t.keyCode&&a.tetromino.drop(a.gameBoard),81==t.keyCode&&(a.gameBoard=new g(a.settings.rows,a.settings.columns,a.settings.cellSize),a.tetromino=new w(a.settings.cellSize,a.settings),a.settings.loose=!1,a.start())})),this.start()},g=function(){function t(e,i,a){Object(p.a)(this,t),this.boardHeight=e,this.boardWidth=i,this.score=0,this.cellSize=a,this.gameBoard=[];for(var o=0;o<this.boardHeight;o++){this.gameBoard[o]=[];for(var n=0;n<this.boardWidth;n++)this.gameBoard[o][n]=0}}return Object(m.a)(t,[{key:"drawBoard",value:function(t){for(var e=0;e<this.boardHeight;e++)for(var i=0;i<this.boardWidth;i++)t.fillStyle="#000000",0==this.gameBoard[e][i]&&(t.fillStyle="#DDDDDD"),t.fillRect(i*this.cellSize,e*this.cellSize,this.cellSize-1,this.cellSize-1)}},{key:"lockOnBoard",value:function(t,e,i){for(var a=0;a<4;a++)for(var o=0;o<4;o++)1==t[o+4*a]&&(this.gameBoard[i+a][e+o]=1);this.checkFullRows()}},{key:"checkFullRows",value:function(){for(var t=!0,e=this.gameBoard.length-1;e>=0;e--){for(var i=0;i<this.gameBoard[0].length;i++)0==this.gameBoard[e][i]&&(t=!1);if(t){this.score+=100;for(var a=0;a<this.gameBoard[0].length;a++)this.gameBoard[e][a]=0;for(var o=e;o>=1;o--)this.gameBoard[o]=Object(u.a)(this.gameBoard[o-1]);e=this.gameBoard.length}t=!0}}}]),t}(),w=function(){function t(e,i){Object(p.a)(this,t),this.settings=i,this.cellSize=e,this.x=3,this.y=0,this.shapes=["00001111","01100110","00100111","01000111","00010111","00110110","01100011"],this.currentTetromino=this.generateRandomTetromino()}return Object(m.a)(t,[{key:"generateRandomTetromino",value:function(t){return this.x=3,this.y=-1,"0000"+this.shapes[Math.floor(7*Math.random())]+"0000"}},{key:"drawTetromino",value:function(t){for(var e=0;e<4;e++)for(var i=0;i<4;i++)1==this.currentTetromino[i+4*e]&&(t.fillStyle="#000000",t.fillRect((this.x+i)*this.cellSize,(this.y+e)*this.cellSize,this.cellSize-1,this.cellSize-1))}},{key:"collison",value:function(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=a;""===a&&(o=this.currentTetromino);for(var n=0;n<4;n++)for(var l=0;l<4;l++)if(1==o[l+4*n]){var s=this.x+l+e,r=this.y+n+i;if(s<0||s>=t[0].length||r>=t.length)return!0;if(0!==t[r][s])return!0}return!1}},{key:"rotate",value:function(t){var e="";for(var i in this.y<0&&(this.y=0),this.currentTetromino)e+=this.currentTetromino[(15-i)%4*4+Math.floor(i/4)];this.collison(t,0,0,e)||(this.currentTetromino=e)}},{key:"drop",value:function(t){for(;!this.collison(t.gameBoard,0,1);)this.moveDown(t)}},{key:"moveDown",value:function(t){this.collison(t.gameBoard,0,1)?(t.lockOnBoard(this.currentTetromino,this.x,this.y),this.currentTetromino=this.generateRandomTetromino(t),this.collison(t.gameBoard,0,0)&&(this.settings.loose=!0)):this.y+=1}},{key:"moveLeft",value:function(t){this.collison(t,-1,0)||(this.x-=1)}},{key:"moveRight",value:function(t){this.collison(t,1,0)||(this.x+=1)}}]),t}(),E=(i(51),i(5)),k=i(25),O=function(t){Object(f.a)(i,t);var e=Object(y.a)(i);function i(){var t;Object(p.a)(this,i),(t=e.call(this)).move=function(e,i){var a=new E.c;console.log(a.matrix);for(var o=t.cube.length-1;o>=0;o--)"blue"===i&&1===t.scene.children[o].position.z&&a.add(t.scene.children[o]),"green"===i&&-1===t.scene.children[o].position.z&&a.add(t.scene.children[o]),"white"===i&&1===t.scene.children[o].position.y&&a.add(t.scene.children[o]),"yellow"===i&&-1===t.scene.children[o].position.y&&a.add(t.scene.children[o]),"red"===i&&-1===t.scene.children[o].position.x&&a.add(t.scene.children[o]),"orange"===i&&1===t.scene.children[o].position.x&&a.add(t.scene.children[o]);"blue"!==i&&"green"!==i||a.rotateZ(e*Math.PI*.5),"white"!==i&&"yellow"!==i||a.rotateY(e*Math.PI*.5),"red"!==i&&"orange"!==i||a.rotateX(e*Math.PI*.5),a.updateWorldMatrix(),console.log(a.matrix),t.ungroup(a)},t.ungroup=function(e){for(var i=new E.m,a=new E.h,o=e.children.length-1;o>=0;o--){e.children[o].getWorldQuaternion(a),e.children[o].getWorldPosition(i);var n=e.getObjectById(e.children[o].id);n.quaternion.set(a.x,a.y,a.z,a.w),n.position.set(Math.round(i.x),Math.round(i.y),Math.round(i.z)),e.remove(e.getObjectById(e.children[o].id)),t.scene.add(n)}},t.mountRef=o.a.createRef(),t.scene=new E.i,t.camera=new E.g(75,.7*window.innerWidth/window.innerHeight,1,1e3),t.camera.position.z=7,t.camera.position.x=8,t.camera.position.y=9,t.renderer=new E.n,t.renderer.setSize(.7*window.innerHeight,.7*window.innerHeight),t.controls=new k.a(t.camera,t.renderer.domElement),t.initControls(),t.cube=(new C).getCube();for(var a=0;a<t.cube.length;a++)t.scene.add(t.cube[a]);return t.animate(),t}return Object(m.a)(i,[{key:"initControls",value:function(){this.controls.enableDamping=!1,this.controls.dampingFactor=.05,this.controls.screenSpacePanning=!1,this.controls.minDistance=5,this.controls.maxDistance=5,this.controls.maxPolarAngle=Math.PI/2}},{key:"animate",value:function(){var t=this;requestAnimationFrame((function(){return t.animate()})),this.controls.update(),this.renderer.render(this.scene,this.camera)}},{key:"componentDidMount",value:function(){this.mountRef.current.appendChild(this.renderer.domElement)}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"rubik-wrapper"},o.a.createElement("div",{ref:this.mountRef}),o.a.createElement("div",{className:"rubik-buttons"},o.a.createElement("button",{className:"blue-button",onClick:function(){return t.move(-1,"blue")}},"ROTATE BLUE WALL CLOCKWISE"),o.a.createElement("button",{className:"blue-button",onClick:function(){return t.move(1,"blue")}},"ROTATE BLUE WALL COUNTERCLOKWISE"),o.a.createElement("button",{className:"red-button",onClick:function(){return t.move(-1,"red")}},"ROTATE RED  WALL CLOCKWISE"),o.a.createElement("button",{className:"red-button",onClick:function(){return t.move(1,"red")}},"ROTATE RED WALL COUNTERCLOKWISE"),o.a.createElement("button",{className:"white-button",onClick:function(){return t.move(-1,"white")}},"ROTATE WHITE WALL CLOCKWISE"),o.a.createElement("button",{className:"white-button",onClick:function(){return t.move(1,"white")}},"ROTATE WHITE WALL COUNTERCLOKWISE"),o.a.createElement("button",{className:"orange-button",onClick:function(){return t.move(-1,"orange")}},"ROTATE ORANGE WALL CLOCKWISE"),o.a.createElement("button",{className:"orange-button",onClick:function(){return t.move(1,"orange")}},"ROTATE ORANGE WALL COUNTERCLOKWISE"),o.a.createElement("button",{className:"yellow-button",onClick:function(){return t.move(-1,"yellow")}},"ROTATE YELLOW WALL CLOCKWISE"),o.a.createElement("button",{className:"yellow-button",onClick:function(){return t.move(1,"yellow")}},"ROTATE YELLOW WALL COUNTERCLOKWISE"),o.a.createElement("button",{className:"green-button",onClick:function(){return t.move(-1,"green")}},"ROTATE GREEN WALL CLOCKWISE"),o.a.createElement("button",{className:"green-button",onClick:function(){return t.move(1,"green")}},"ROTATE GREEN WALL COUNTERCLOKWISE")))}}]),i}(a.Component),C=function(){function t(){Object(p.a)(this,t),this.cube=this.generateCube()}return Object(m.a)(t,[{key:"getCube",value:function(){return this.cube}},{key:"generateCube",value:function(){for(var t=[],e=[new E.f({color:15758607}),new E.f({color:12255232}),new E.f({color:15922158}),new E.f({color:16775037}),new E.f({color:54015}),new E.f({color:5934339})],i=-1;i<=1;i++)for(var a=-1;a<=1;a++)for(var o=-1;o<=1;o++){var n=new E.e(new E.a(.99,.99,.99),e);n.name="cubie",n.position.set(i,a,o),t.push(n)}return t}}]),t}(),x=(i(52),function(){function t(e,i,a){Object(p.a)(this,t),this.player=e,this.location=a,this.icon=i,this.style={backgroundImage:"url('"+this.icon+"')",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain",width:"100%",height:"80%"}}return Object(m.a)(t,[{key:"setCurrentLocation",value:function(t){this.location=t}}]),t}()),M=i(26),j=i.n(M),N=i(27),L=i.n(N),S=function(t){Object(f.a)(i,t);var e=Object(y.a)(i);function i(t,a){return Object(p.a)(this,i),e.call(this,t,"white"===t?L.a:j.a,a)}return Object(m.a)(i,[{key:"isAvilable",value:function(t,e){var i=[];return"white"===this.player&&(this.location>=48&&this.location<56&&null===t[this.location-8]&&null===t[this.location-16]&&i.push(this.location-16),null===t[this.location-8]&&i.push(this.location-8),null!==t[this.location-7]&&t[this.location-7].player!==this.player&&i.push(this.location-7),null!==t[this.location-9]&&t[this.location-9].player!==this.player&&i.push(this.location-9),null!==t[this.location-7]&&t[this.location-7].player!==this.player&&i.push(this.location-9)),"black"===this.player&&(this.location>=8&&this.location<16&&null===t[this.location+8]&&null===t[this.location+16]&&i.push(this.location+16),null===t[this.location+8]&&i.push(this.location+8),null!==t[this.location+7]&&t[this.location+7].player!==this.player&&i.push(this.location+7),null!==t[this.location+9]&&t[this.location+9].player!==this.player&&i.push(this.location+9),null!==t[this.location+7]&&t[this.location+7].player!==this.player&&i.push(this.location+9)),i.push(this.location),i}}]),i}(x),T=i(28),A=i.n(T),B=i(29),R=i.n(B),D=function(t){Object(f.a)(i,t);var e=Object(y.a)(i);function i(t,a){return Object(p.a)(this,i),e.call(this,t,"white"===t?R.a:A.a,a)}return Object(m.a)(i,[{key:"isAvilable",value:function(t,e){var i=[],a=[Math.floor(this.location/8)-2>=0&&this.location%8+1<8&&(null===t[8*(Math.floor(this.location/8)-2)+this.location%8+1]||t[8*(Math.floor(this.location/8)-2)+this.location%8+1].player!==this.player),Math.floor(this.location/8)-2>=0&&this.location%8-1>=0&&(null===t[8*(Math.floor(this.location/8)-2)+this.location%8-1]||t[8*(Math.floor(this.location/8)-2)+this.location%8-1].player!==this.player),Math.floor(this.location/8)+2<8&&this.location%8-1>=0&&(null===t[8*(Math.floor(this.location/8)+2)+this.location%8-1]||t[8*(Math.floor(this.location/8)+2)+this.location%8-1].player!==this.player),Math.floor(this.location/8)+2<8&&this.location%8+1<8&&(null===t[8*(Math.floor(this.location/8)+2)+this.location%8+1]||t[8*(Math.floor(this.location/8)+2)+this.location%8+1].player!==this.player),Math.floor(this.location/8)+1<8&&this.location%8+2<8&&(null===t[8*(Math.floor(this.location/8)+1)+this.location%8+2]||t[8*(Math.floor(this.location/8)+1)+this.location%8+2].player!==this.player),Math.floor(this.location/8)+1<8&&this.location%8-2>=0&&(null===t[8*(Math.floor(this.location/8)+1)+this.location%8-2]||t[8*(Math.floor(this.location/8)+1)+this.location%8-2].player!==this.player),Math.floor(this.location/8)-1>=0&&this.location%8+2<8&&(null===t[8*(Math.floor(this.location/8)-1)+this.location%8+2]||t[8*(Math.floor(this.location/8)-1)+this.location%8+2].player!==this.player),Math.floor(this.location/8)-1>=0&&this.location%8-2>=0&&(null===t[8*(Math.floor(this.location/8)-1)+this.location%8-2]||t[8*(Math.floor(this.location/8)-1)+this.location%8-2].player!==this.player)];return a[0]&&i.push(this.location-15),a[1]&&i.push(this.location-17),a[2]&&i.push(this.location+15),a[3]&&i.push(this.location+17),a[4]&&i.push(this.location+10),a[5]&&i.push(this.location+6),a[6]&&i.push(this.location-6),a[7]&&i.push(this.location-10),a[7]&&i.push(this.location),i}}]),i}(x),W=i(30),P=i.n(W),z=i(31),I=i.n(z),K=function(t){Object(f.a)(i,t);var e=Object(y.a)(i);function i(t,a){return Object(p.a)(this,i),e.call(this,t,"white"===t?I.a:P.a,a)}return Object(m.a)(i,[{key:"isAvilable",value:function(t,e){var i=[],a=[];if("white"===e)for(var o=0;o<64;o++)null!==t[o]&&"black"===t[o].player&&null!==t[o].isAvilable(t)&&t[o].isAvilable(t).length>0&&a.push.apply(a,Object(u.a)(t[o].isAvilable(t)));if("black"===e)for(var n=0;n<64;n++)null!==t[n]&&"white"===t[n].player&&null!==t[n].isAvilable(t)&&t[n].isAvilable(t).length>0&&a.push.apply(a,Object(u.a)(t[n].isAvilable(t)));return this.location+8<64&&(null===t[this.location+8]||t[this.location+8].player!==this.player)&&!a.includes(this.location+8)&&i.push(this.location+8),this.location+9<64&&(null===t[this.location+9]||t[this.location+9].player!==this.player)&&!a.includes(this.location+9)&&i.push(this.location+9),this.location+7<64&&(null===t[this.location+7]||t[this.location+7].player!==this.player)&&!a.includes(this.location+7)&&i.push(this.location+7),this.location+1<64&&(null===t[this.location+1]||t[this.location+1].player!==this.player)&&!a.includes(this.location+1)&&i.push(this.location+1),this.location-1>=0&&(null===t[this.location-1]||t[this.location-1].player!==this.player)&&!a.includes(this.location-1)&&i.push(this.location-1),this.location-7>=0&&(null===t[this.location-7]||t[this.location-7].player!==this.player)&&!a.includes(this.location-7)&&i.push(this.location-7),this.location-8>=0&&(null===t[this.location-8]||t[this.location-8].player!==this.player)&&!a.includes(this.location-8)&&i.push(this.location-8),this.location-9>=0&&(null===t[this.location-9]||t[this.location-9].player!==this.player)&&!a.includes(this.location-9)&&i.push(this.location-9),i.push(this.location),i}}]),i}(x),U=i(32),H=i.n(U),G=i(33),F=i.n(G),Y=function(t){Object(f.a)(i,t);var e=Object(y.a)(i);function i(t,a){return Object(p.a)(this,i),e.call(this,t,"white"===t?F.a:H.a,a)}return Object(m.a)(i,[{key:"isAvilable",value:function(t,e){for(var i=[],a=[!1,!1,!1,!1],o=1;o<8;o++)!a[1]&&this.location%8+o<8&&(null!==t[this.location+o]&&this.player!==t[this.location+o].player&&(console.log("ziemniak: "+t[this.location+o].player),i.push(this.location+o),a[1]=!0),null!==t[this.location+o]&&this.player===t[this.location+o].player&&(a[1]=!0),a[1]||i.push(this.location+o)),!a[3]&&this.location%8-o>=0&&(null!==t[this.location-o]&&this.player!==t[this.location-o].player&&(i.push(this.location-o),a[3]=!0),null!==t[this.location-o]&&this.player===t[this.location-o].player&&(a[3]=!0),a[3]||i.push(this.location-o)),!a[2]&&Math.floor(this.location/8)+o<8&&(null!==t[this.location+8*o]&&this.player!==t[this.location+8*o].player&&(i.push(this.location+8*o),a[2]=!0),null!==t[this.location+8*o]&&this.player===t[this.location+8*o].player&&(a[2]=!0),a[2]||i.push(this.location+8*o)),!a[0]&&Math.floor(this.location/8)-o>=0&&(null!==t[this.location-8*o]&&this.player!==t[this.location-8*o].player&&(i.push(this.location-8*o),a[0]=!0),null!==t[this.location-8*o]&&this.player===t[this.location-8*o].player&&(a[0]=!0),a[0]||i.push(this.location-8*o));for(var n=[!1,!1,!1,!1],l=1;l<8;l++){if(this.location%8+l<8){if(Math.floor(this.location/8)-l>=0){var s=8*(Math.floor(this.location/8)-l)+this.location%8+l;n[0]||null!==t[s]||i.push(s),n[0]||null===t[s]||t[s].player!==this.player||(n[0]=!0),n[0]||null===t[s]||t[s].player===this.player||(i.push(s),n[0]=!0)}if(Math.floor(this.location/8)+l<8){var r=8*(Math.floor(this.location/8)+l)+this.location%8+l;n[1]||null!==t[r]||i.push(r),n[1]||null===t[r]||t[r].player!==this.player||(n[1]=!0),n[1]||null===t[r]||t[r].player===this.player||(i.push(r),n[1]=!0)}}if(this.location%8-l>=0){if(Math.floor(this.location/8)-l>=0){var c=8*(Math.floor(this.location/8)-l)+this.location%8-l;n[2]||null!==t[c]||i.push(c),n[2]||null===t[c]||t[c].player!==this.player||(n[2]=!0),n[2]||null===t[c]||t[c].player===this.player||(i.push(c),n[2]=!0)}if(Math.floor(this.location/8)+l<8){var h=8*(Math.floor(this.location/8)+l)+this.location%8-l;n[3]||null!==t[h]||i.push(h),null!==t[h]&&t[h].player===this.player&&(n[3]=!0),null!==t[h]&&t[h].player!==this.player&&(i.push(h),n[3]=!0)}}}return i}}]),i}(x),q=i(34),Q=i.n(q),J=i(35),X=i.n(J),Z=function(t){Object(f.a)(i,t);var e=Object(y.a)(i);function i(t,a){return Object(p.a)(this,i),e.call(this,t,"white"===t?X.a:Q.a,a)}return Object(m.a)(i,[{key:"isAvilable",value:function(t,e){for(var i=[],a=[!1,!1,!1,!1],o=1;o<8;o++)!a[1]&&this.location%8+o<8&&(null!==t[this.location+o]&&this.player!==t[this.location+o].player&&(console.log("ziemniak: "+t[this.location+o].player),i.push(this.location+o),a[1]=!0),null!==t[this.location+o]&&this.player===t[this.location+o].player&&(a[1]=!0),a[1]||i.push(this.location+o)),!a[3]&&this.location%8-o>=0&&(null!==t[this.location-o]&&this.player!==t[this.location-o].player&&(i.push(this.location-o),a[3]=!0),null!==t[this.location-o]&&this.player===t[this.location-o].player&&(a[3]=!0),a[3]||i.push(this.location-o)),!a[2]&&Math.floor(this.location/8)+o<8&&(null!==t[this.location+8*o]&&this.player!==t[this.location+8*o].player&&(i.push(this.location+8*o),a[2]=!0),null!==t[this.location+8*o]&&this.player===t[this.location+8*o].player&&(a[2]=!0),a[2]||i.push(this.location+8*o)),!a[0]&&Math.floor(this.location/8)-o>=0&&(null!==t[this.location-8*o]&&this.player!==t[this.location-8*o].player&&(i.push(this.location-8*o),a[0]=!0),null!==t[this.location-8*o]&&this.player===t[this.location-8*o].player&&(a[0]=!0),a[0]||i.push(this.location-8*o));return i}}]),i}(x),$=i(36),V=i.n($),_=i(37),tt=i.n(_),et=function(t){Object(f.a)(i,t);var e=Object(y.a)(i);function i(t,a){return Object(p.a)(this,i),e.call(this,t,"white"===t?tt.a:V.a,a)}return Object(m.a)(i,[{key:"isAvilable",value:function(t,e){for(var i=[!1,!1,!1,!1],a=[],o=1;o<8;o++){if(this.location%8+o<8){if(Math.floor(this.location/8)-o>=0){var n=8*(Math.floor(this.location/8)-o)+this.location%8+o;i[0]||null!==t[n]||a.push(n),i[0]||null===t[n]||t[n].player!==this.player||(i[0]=!0),i[0]||null===t[n]||t[n].player===this.player||(a.push(n),i[0]=!0)}if(Math.floor(this.location/8)+o<8){var l=8*(Math.floor(this.location/8)+o)+this.location%8+o;i[1]||null!==t[l]||a.push(l),i[1]||null===t[l]||t[l].player!==this.player||(i[1]=!0),i[1]||null===t[l]||t[l].player===this.player||(a.push(l),i[1]=!0)}}if(this.location%8-o>=0){if(Math.floor(this.location/8)-o>=0){var s=8*(Math.floor(this.location/8)-o)+this.location%8-o;i[2]||null!==t[s]||a.push(s),i[2]||null===t[s]||t[s].player!==this.player||(i[2]=!0),i[2]||null===t[s]||t[s].player===this.player||(a.push(s),i[2]=!0)}if(Math.floor(this.location/8)+o<8){var r=8*(Math.floor(this.location/8)+o)+this.location%8-o;i[3]||null!==t[r]||a.push(r),null!==t[r]&&t[r].player===this.player&&(i[3]=!0),null!==t[r]&&t[r].player!==this.player&&(a.push(r),i[3]=!0)}}}return a}}]),i}(x),it=function(t){Object(f.a)(i,t);var e=Object(y.a)(i);function i(t){var a;return Object(p.a)(this,i),(a=e.call(this,t)).renderPiece=function(t){if(null!==t)return o.a.createElement("div",{style:t.style})},a.initBoard=function(){for(var t=Array(64).fill(null),e=0;e<64;e++)1===Math.floor(e/8)&&(t[e]=new S("black",e)),6===Math.floor(e/8)&&(t[e]=new S("white",e)),0===Math.floor(e/8)&&(e%8!==0&&e%8!==7||(t[e]=new Z("black",e)),e%8!==1&&e%8!==6||(t[e]=new D("black",e)),e%8!==2&&e%8!==5||(t[e]=new et("black",e)),e%8===3&&(t[e]=new Y("black",e)),e%8===4&&(t[e]=new K("black",e))),7===Math.floor(e/8)&&(e%8!==0&&e%8!==7||(t[e]=new Z("white",e)),e%8!==1&&e%8!==6||(t[e]=new D("white",e)),e%8!==2&&e%8!==5||(t[e]=new et("white",e)),e%8===3&&(t[e]=new Y("white",e)),e%8===4&&(t[e]=new K("white",e)));return t},a.state={board:a.initBoard(),currentPiece:null,currentPlayer:"white"},a}return Object(m.a)(i,[{key:"handleClick",value:function(t){if(null===this.state.currentPiece&&null!==this.state.board[t]&&this.state.board[t].player===this.state.currentPlayer&&(this.setState({currentPiece:this.state.board[t]}),this.state.board[t]=null),null!==this.state.currentPiece&&this.state.currentPiece.isAvilable(this.state.board,this.state.currentPlayer).includes(t)){this.state.currentPiece.location!==t&&this.setState({currentPlayer:"white"===this.state.currentPlayer?"black":"white"});var e=this.state.board;e[t]=this.state.currentPiece,this.state.currentPiece.setCurrentLocation(t),this.setState({board:e,currentPiece:null})}}},{key:"render",value:function(){var t=this,e=this.state.board.map((function(e,i){return o.a.createElement("div",{key:i,className:"cell ".concat((Math.floor(i/8)+i)%2===0?"light":"darker"),onClick:function(){return t.handleClick(i)}},t.renderPiece(e))})),i={};return null!==this.state.currentPiece&&(i={cursor:"url('"+this.state.currentPiece.icon+"'),auto"}),o.a.createElement("div",{className:"chessGameBoard",style:i},e)}}]),i}(a.Component);var at=function(){return o.a.createElement(s.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(r,null),o.a.createElement(c.c,null,o.a.createElement(c.a,{path:"/",exact:!0,component:h}),o.a.createElement(c.a,{path:"/tetris",exact:!0,component:v}),o.a.createElement(c.a,{path:"/chess",exact:!0,component:it}),o.a.createElement(c.a,{path:"/rubiks",exact:!0,component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(at,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}]),[[38,1,2]]]);
//# sourceMappingURL=main.eb691d85.chunk.js.map