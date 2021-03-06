function startGame() {
    myGameArea.start();
    myGameArea.draw(redSquare);
  }
  
  
  var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.interval = setInterval(updateGameArea, 20);
    },
    draw: function (component) {
      this.context.fillStyle = component.color;
      this.context.fillRect(component.x, component.y, component.width, component.height);
    },
  
    clear: function () {
      this.context.fillStyle = 'white';
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      //this.contex.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
    }
  }
  
  function updateGameArea() {
    myGameArea.clear();
    myGameArea.draw(redSquare);
  }
  
  
  
  var redSquare = {
    width: 20,
    height: 20,
    x: 10,
    y: 120,
    color: "red"
  } 
  function up() {
    redSquare.y -= 30;
  
  }
  
  function down() {
    redSquare.y += 30;
  
  }
  function left() {
    redSquare.x -= 30;
  
  }
  function right() {
    redSquare.x += 30;
  
  }