new Vue({
  el:'#vue-app',
  data: {
    name:'Dean Standerwick',
    job:'Front-end Developer',
    website: 'https://www.linkedin.com/in/deanstanderwick/',
    websiteTag:'<a href="https://www.linkedin.com/in/deanstanderwick/">Linkedin</a>',
    age: 22,
    x:0,
    y:0,
    namespan:'',
    agespan:'',
    a:0,
    b:0,
    available: false,
    nearby: false,
    characters: ['Jin','Kazuya','Nina','Mokujin'],
    non_humans:[
      {name: 'Kuma', race:'Bear'},
      {name: 'Yoshimitsu', race:'Cyborg-Ninja'},
      {name: 'Mokujin', race:'Wood Person'},
      {name: 'Alex', race:'Velociraptor'}
    ],
    health: 100,
    ended: false,
  },
  methods: {
    greet: function(time){
      return 'Good' + time + ' ' + this.name;
    },
    add:function(inc){
      this.age+=inc;
    },
    subtract:function(dec){
      this.age-=dec;
    },
    updateXY:function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click:function(){
      alert('Try middle clicking instead or opening in a new tab.');
    },
    logName: function(){
      console.log('You entered your name');
    },
    logAge: function(){
      console.log('You entered your age');
    },
    punch: function(){
      this.health -= 10;
      if (this.health <= 0){
          this.ended = true;
      }
    },
    restart:function(){
      this.health = 100;
      this.ended = false;
    }
  },
  computed:{
    addToA:function(){
      console.log('addToA');
      return this.a + this.age;
    },
    addToB:function(){
      console.log('addToB');
      return this.b + this.age;
    },
    compClasses:function(){
      return{
        available:this.available,
        nearby:this.nearby
      }
    }
  }
});
