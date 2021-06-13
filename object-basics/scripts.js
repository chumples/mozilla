/////////////////// Object Basics 1

let cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Meow!');
    }
  }
  
  // Put your code here
  let catName = cat['name'];
      cat.greeting()
      cat['color'] = 'black';
  // Don't edit the code below here
  
  let para1 = document.createElement('p');
  let para2 = document.createElement('p');
  
  para1.textContent = `The cat's name is ${ catName }.`;
  para2.textContent = `The cat's color is ${ cat.color }.`;
  
  section.appendChild(para1);
  section.appendChild(para2);

  // Object Basics 2
  let bandInfo;

  // Put your code here
  let band = {
      name: 'Crystal Castles',
      nationality: 'Canadian',
      genre: 'electronic',
      members: 2,
      formed: 2006,
      split: false,
      albums: [
          {
              name: 'Crystal Castles',
              released: 2008,
          },
          {
              name: 'Crystal Castles II',
              released: 2010,
          },
          {
              name: 'Crystal Castles III',
              released: 2012,
          },
          {
              name: 'Amnesty',
              released: 2016,
          }
      ]
  }
  
  bandInfo = `${band.name} is a ${band.nationality} ${band.genre} band that was formed in ${band.formed}. Their first album, ${band.albums[0].name}, was released in ${band.albums[0].released}.`

  // Don't edit the code below here
  
  let para1 = document.createElement('p');
  para1.textContent = bandInfo;
  section.appendChild(para1);
      
///////////////// Object Basics 3

let cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log(`Hello, said ${this.name} the ${this.breed}.`);
    }
  }

  let cat2 = {
    name : 'Lucyfur',
    breed : 'American shorthair',
    color : 'black',
    greeting: function() {
     console.log(`Hello, said ${this.name} the ${this.breed}.`);
    }
  }
      
cat.greeting();
cat2.greeting();