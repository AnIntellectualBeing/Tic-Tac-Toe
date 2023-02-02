<!DOCTYPE html>
<html>
  <head>
    <style>
      .board {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-gap: 5px;
        width: 300px;
        height: 300px;
        margin: 0 auto;
      }
      .cell {
        background-color: lightgray;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 36px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="board">
      <div class="cell" id="0"></div>
      <div class="cell" id="1"></div>
      <div class="cell" id="2"></div>
      <div class="cell" id="3"></div>
      <div class="cell" id="4"></div>
      <div class="cell" id="5"></div>
      <div class="cell" id="6"></div>
      <div class="cell" id="7"></div>
      <div class="cell" id="8"></div>
    </div>
  </body>
  <script src="tictactoe.js"></script>
</html>
