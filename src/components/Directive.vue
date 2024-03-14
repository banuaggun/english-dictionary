<template>
  <section class="directive">
    <p>
      Type a word in the search bar and press 'Enter' to see the results.
    </p>
  </section>
</template>

<style scoped>
.directive{
  width:calc(100% - 40px);
  display:flex;
  align-items:center;
  justify-content: center;
  border:1px solid #dcdcdc;
  box-shadow:-1px 2px 3px #dcdcdc;
  border-radius:4px;
  margin:30px 20px;
  padding:20px;
}

@media only screen and (min-width:500px) and (max-width:1000px){
  .directive{
    width:calc(100% - 50%);
  }
}
@media only screen and (min-width:1001px) and (max-width:1600px){
  .directive{
    width:calc(100% - 60%);
  }
}
</style>