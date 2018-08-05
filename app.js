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
  selectCat: function() {
    document.querySelector('.list').onclick = function(e) {
      let selectedCat =  model[e.srcElement.className];
      document.querySelector('img').src = selectedCat.image;
      document.querySelector('img').className = selectedCat.name;
      document.querySelector('.selected_name').innerHTML = `Selected Cat: ${selectedCat.name}`;
      document.querySelector('.selected_count').innerHTML = `${selectedCat.name} Accumulated ClickCount: ${selectedCat.clickCount}`;
    };
  },
  // Update and store individual click count.
  updateClickCount: function() {
    document.querySelector('img').onclick = function(e) {
      let selectedCat =  model[e.srcElement.className];
      selectedCat.clickCount ++;
      document.querySelector('.selected_count').innerHTML = `${selectedCat.name} Accumulated ClickCount: ${selectedCat.clickCount}`;
    };
  },
};

var listView = {
  // Display cat data in list.
  init: function() {
    octopus.displayCatList();
  },
};

var imageView = {
  //Display selected cat image and message.
  init: function() {
    octopus.selectCat();
    octopus.updateClickCount();
  },
}

octopus.init();

