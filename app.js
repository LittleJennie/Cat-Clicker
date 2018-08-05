var model = {
  Cat1: {
    name:'Cat1',
    clickCount:0,
    image:'images/cat1.jpg',
  }, 
  Cat2: {
    name:'Cat2',
    clickCount:0,
    image:'images/cat2.jpg',
  }, 
  Cat3: {
    name:'Cat3',
    clickCount: 0,
    image:'images/cat3.jpg',
  }, 
  Cat4: {
    name:'Cat4',
    clickCount:0,
    image:'images/cat4.jpg',
  },
};

var octopus = {
  init: function() {
    listView.init();
    imageView.init();
  },
  //Display cat data in list.
  displayCatList: function() {
    var catList = [];
    for (cat in model) {
      catList.push(`<li class="${model[cat].name}"> Cat Name: ${model[cat].name}</li>`);
    }
    document.querySelector('.list').innerHTML = catList.join('');
  },
  // get selected cat object.
  selectedCat: function() {

  }
  // Update click count holder.
  countClick: function() {
    model.generalClickCount ++;
  },
  // Update and store individual click count.
  updateClickCount: function(i) {
    model.cat[i].clickCount += model.generalClickCount;
  },
  updateDisplayImage: function() {

  },
  //Select 'clicked' cat image source.
  selectedImageSource: function() {
    var selectedClass;
    var imageSourceLink = "";
    document.querySelector('.list').onclick = function(e) {
      selectedClass = e.className;
      '/image/`${selectedClass}'
    }
  },
  //Display selected cat image.
  displayCatImage: function() {
    var displayImage = this.selectedImageSource();
    document.querySelector('img').src = displayImage;
  }
};

var listView = {
  // Display cat data in list.
  init: function() {
    octopus.displayCatList();
  }
};

var imageView = {
  //Display selected cat image.
  init: function() {
    octopus.displayCatImage();
  },
}

octopus.init();




// class AllCats {
//   constructor() {
//     this.catList = ['Cat1','Cat2','Cat3'];
//     this.catListing = [];
//   }
//   createList(cat) {
//     return `<li class="${cat}">Cat Name: ${cat}</li>`
//   }
//   fillList() {
//     for(var i = 0; i < this.catList.length; i++) {
//       var cat = this.catList[i];
//       // console.log(cat);
//       this.catListing.push(this.createList(cat));
//       // console.log(listItem)
//       // console.log(document.querySelector('.list').innerHTML)
//     }
//     document.querySelector('.list').innerHTML = this.catListing.join('');
//   }
//   displayImage() {
//     document.querySelector('.list').onclick = function(e) {
//       document.querySelector('img').className = `${e.srcElement.className}`;
//       document.querySelector('img').src = `cat clicker/images/${e.srcElement.className}.jpg`
//     }
//   }
//   clickCount() {
//     for(var i = 1; i <= this.catList.length; i++) {
//       this["clickCountCat"+i] = 0;
//     }
//     console.log(this.clickCountCat1)
//     document.querySelector('img').onclick = function(e) {
//       this[`clickCount${e.srcElement.className}`] ++;
//       console.log(this.clickCount`${e.srcElement.className}`);
//     }
//   }
// }
//
// let allCats = new AllCats();
// allCats.fillList();
// allCats.displayImage();
// allCats.clickCount();
