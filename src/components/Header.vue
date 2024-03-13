<template>
  <header>
    <div class="web">
    <div class="web-navbar">
      <div class="web-navbar-row-2">
            <a href="https://portfolio-banuaggun.vercel.app/" target="_blank">
              Portfolio
            </a>
            <a href="https://github.com/banuaggun" target="_blank">
              Project repository
            </a>
            
      </div>
      <div class="web-navbar-row-1">
        <img src="../assets/icons/logo.svg" alt="dictionary logo" />
        <h3>English Dictionary</h3>      
    </div>
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
          Project Repository
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
header .web{
  width:80px;
  height:calc((100vh / 1.5) - 20px);
  position:fixed;
  top:20%;
  left:40px;
  display:flex;
  align-items:center;
  justify-content:center;
  border:1px solid green;
}
header .web-navbar{
  width:80px;
  height:calc((100vh / 1.5) - 20px);
  position:absolute;
  top:10px;
  bottom:10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  writing-mode: vertical-lr;
  transform:rotate(180deg);
  background-color: var(--text-color);
  border:2px solid var(--border-color);
  box-shadow: -4px 2px 6px var(--border-color), 2px -2px 6px var(--border-color-2);
  border-radius:100px;
}
.web-navbar-row-1{
  display:flex;
  align-items: center;
}
.web-navbar-row-1 img{
  position: absolute;
  bottom:20px;
  width:40px;
  height:40px;
}
.web-navbar-row-1 h3{
  bottom:80px;
  position:absolute;
}

.web-navbar-row-2{
  position: absolute;
  top:20px;
}
.web-navbar-row-2 a{
  font-size:1.1rem;
  font-weight:600;
  letter-spacing: 0.25px;
  border:none;
  border-left:3px solid var(--border-color-2);
}
.web-navbar-row-2 a:nth-child(1){
  margin-bottom:15px;
}
.web-navbar-row-2 a:hover{
  color: var(--bg-color-button);
  transition:all 0.3s ease-in-out;
  border-left:3px solid var(--bg-color-button);
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