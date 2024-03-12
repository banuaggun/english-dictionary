<template>
  <header>
    <div class="web-navbar">
      <div class="web-navbar-row-2">
        <div class="social-media">
          <div class="social-media-portfolio">
            <a href="https://github.com/banuaggun" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://portfolio-banuaggun.vercel.app/" target="_blank">
              <img src="../assets/icons/portfolio.png" />
            </a>
          </div>
        </div>
      </div>
      <div class="web-navbar-row-1">
        <img src="../assets/icons/logo.svg" alt="dictionary logo" />
        <h2>English Dictionary</h2>      
    </div>
    
    </div>
     <div class="mobile-navbar">
      <div class="mobile-navbar-row-1">
        <img src="../assets/icons/logo.svg" alt="dictionary logo" />
      <h3>English dictionary</h3>
    </div>
    <div class="mobile-navbar-row-2">
      <div class="social-media-portfolio">
        <a href="https://github.com/banuaggun" target="_blank">
          GitHub
        </a>
        <a href="https://portfolio-banuaggun.vercel.app/" target="_blank">
          Portfolio
        </a>
      </div>
    </div>
    </div>
  </header>
</template>

<style scoped>
header .web-navbar{
  border:1px solid red;
  width:80px;
  height:100vh;
  position:absolute;
  top:0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  writing-mode: vertical-lr;
  transform:rotate(180deg);
}
.web-navbar-row-1{
  border:1px solid blue; 
  display:flex;
  align-items: center;
}
.web-navbar-row-1 img{
  position: absolute;
  bottom:40px;
  border:1px solid black;
  width:44px;
  height:44px;
}
.web-navbar-row-1 h2{
  bottom:100px;
  position:absolute;
}

.web-navbar-row-2{
  border:1px solid black;
  position: absolute;
  top:20px;
}
.web-navbar-row-2 img{
  background-color:red;
  border:1px solid red;
  width:44px;
  height:44px;
  
}
i{
  font-size:2rem;
  transform:rotate(180deg);
}
header .mobile-navbar {
  border:1px solid green;
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  margin:20px auto;
  height:70px;
}

.mobile-navbar-row-1{
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border:1px solid red;
}
.mobile-navbar-row-2 {
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
  border:1px solid green;
  width: 100%;
  padding-right:40px;
}

.mobile-navbar-row-2 a:nth-child(1){
  margin-right:20px;
}

.mobile-navbar-row-2 a:hover,
.mobile-navbar-row-2 a.active{
  border-bottom:3px solid var(--bg-color-button);
  color:var(--bg-color-button);
  letter-spacing:0.25px;
  transition:all 0.3s ease;
}

img{
  margin-right:6px;
  width:28px;
  height:28px;
  
}

header h3,
header h2{
  text-transform: uppercase;
  color:#242424;
  /*
  writing-mode: vertical-rl;
text-orientation: mixed;
*/
}
@media only screen and (min-width:300px) and (max-width:600px){
  .web-navbar{
    display:none !important;
  }
  .mobile-navbar{
    display:block;
  }
}

 @media only screen and (min-width:601px) and (max-width:1920px){
   .web-navbar{
     display:block;
   }
   .mobile-navbar{
     display:none !important;
   }
 }
</style>