<template>
  <header>
    <div class="web-navbar">
      <div class="row-1">
        <img src="../assets/icons/logo.svg" alt="dictionary logo" />
      <h2>English dictionary</h2>
    </div>
    <div class="social-media">
      <div class="social-media-portfolio">
        <a href="https://github.com/banuaggun" target="_blank">
          <span>GitHub</span>
        </a>
        <a href="https://portfolio-banuaggun.vercel.app/" target="_blank">
          <span>Portfolio</span>
        </a>
      </div>
    </div>
    </div>
     <div class="mobile-navbar">
      <div class="mobile-navbar-row-1">
        <img src="../assets/icons/logo.svg" alt="dictionary logo" />
      <h2>English dictionary</h2>
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
    display:none;
  }
  .mobile-navbar{
    display:block;
  }
  h2{
    font-size:1.2rem;
  }
}
</style>