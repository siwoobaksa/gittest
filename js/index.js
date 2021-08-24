let a = new Vue({
  el:"vues",
  data:{
    mid:"",
    mpass:"",
  },
  methods:{
    gopage:function(){
      if(this.mid==""){
          alert("아이디를 입력해주세요");
          return false;
      }
      else if(this.mpass==""){
        alert("아이디를 입력해주세요");
          return false;
      }
      else{      
        location.href="http://lswhobby.dothome.co.kr";
      }
    }
  }

});
