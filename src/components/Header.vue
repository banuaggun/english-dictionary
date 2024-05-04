<template>
  <header>
    <div class="mobile">
      <div class="mobile-row-1">
        <img src="../assets/icons/logo.svg"   alt="dictionary logo" />
          <h3>English Dictionary</h3> 
      </div>
      <div class="mobile-row-2">
        <a href="https://github.com/banuaggun/english-dictionary" target="_blank">
          Project Repository
        </a>
        <a href="https://portfolio-banuaggun.vercel.app/" target="_blank">
          Portfolio
        </a>
      </div>
    </div>
    <div class="tablet">
      <div class="tablet-left">
        <img src="../assets/icons/logo.svg"   alt="dictionary logo" />
          <h3>English Dictionary</h3> 
      </div>
      <div class="tablet-right">
        <a href="https://github.com/banuaggun" target="_blank">
          Project Repository
        </a>
        <a href="https://portfolio-banuaggun.vercel.app/" target="_blank">
          Portfolio
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>

.mobile, 
.tablet{
  background-color: var(--text-color);
  border:2px solid var(--border-color);
  box-shadow: -4px 2px 6px var(--border-color), 2px -2px 6px var(--border-color-2);
  border-radius:100px;
}

.mobile{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  margin:20px auto;
}
.mobile-row-1{
  margin:10px auto;
  display: flex;
  align-items: center;
}

.mobile-row-1 img{
  width: 28px;
  height:28px;
}
.mobile-row-2{
  padding-bottom:8px;
}
.mobile-row-2 a{
  font-size:1.1rem;
}

.mobile-row-2 a:nth-child(1), 
.tablet-right a:nth-child(1){
  margin-right:12px;
}

.mobile-row-1 h3, 
.tablet-left h3{
  text-transform: capitalize;
}

.tablet{
  display:flex;
  margin:20px 80px;
  padding:12px 0;
  align-items:center;
  justify-content: space-between;
}

.tablet-left{
  display:flex;
  align-items:center;
  margin-left:30px;
}

.tablet-left img{
  width:40px;
  height:40px;
  margin-right:4px;
}

.tablet-right{
  margin-right:30px;
}

.tablet-right a{
  font-size:1.1rem;
}

.mobile-row-2 a:hover, 
.mobile-row-2 a.active, 
.tablet-right a:hover,
.tablet-right a.active{
  color: var(--bg-color-button);
  transition:all 0.3s ease-in-out;
}


@media only screen and (min-width:300px) and (max-width:400px){
  header .mobile{
    max-width:280px;
  }
  header .tablet{
    display:none;
  }
}
@media only screen and (min-width:401px) and (max-width:600px){
  header .mobile{
    min-width:auto;
    margin-left:40px;
    margin-right:40px;
  }
  header .tablet{
    display:none;
  }
}

@media only screen and (min-width:601px) and (max-width:1921px){
  header .mobile{
    display:none;
  }
  header .tablet{
    display:flex;
  }
}

</style>