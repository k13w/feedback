var style = document.createElement('style');
  style.innerHTML = `
  .homeImage{
    width: 60%;
    margin-top: 10%;
  }
  .goButton{
    background-color: #33CC99;
    border-radius: 50px !important;
    
  }
  .goButton:hover{
    background-color: #2EBA8B;
  }
  .homeImageSmall{
    width: 100%;
    margin-top: 20%;
    margin-bottom: 10%;
  }
  .goButtonSmall{
    background-color: #33CC99;
    border-radius: 50px !important;
    margin-top: 20%;
  }

  `;
  document.head.appendChild(style);