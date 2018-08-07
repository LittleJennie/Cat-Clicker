var model = {
  currentCat: null,
  cats: [
    {
    name:'Cat1',
    clickCount:0,
    image:'images/cat1.jpg',
    imageURL: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
  }, {
    name:'Cat2',
    clickCount:0,
    image:'images/cat2.jpg',
    imageURL:'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
  }, {
    name:'Cat3',
    clickCount: 0,
    image:'images/cat3.jpg',
    imageURL: 'https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454',
  }, {
    name:'Cat4',
    clickCount:0,
    image:'images/cat4.jpg',
    imageURL: 'https://lh4.ggpht.com/dUJNejPqb_qLsV1kfWcvviqc7adxsw02BSAm8YLWNklP4lI6fQCLKXd-28uKuchtjoEUpqFN0K6kkTSDHw=s0#w=588&h=640',
  },{
    name: 'Cat5',
    clickCount:0,
    image:'images/cat5.jpg',
    imageURL: 'https://lh3.ggpht.com/cesD31eroFxIZ4IEeXPAJkx_8i5-haU3P9LQosGNfV-GfAPUh2bE4iw4zV6Mc9XobWOR70BQh2JAP57wZlM=s0#w=640&h=480',
  }],
};

var octopus = {
  init: function() {
    model.currentCat = model.cats[0];
    listView.init();
    imageView.init();
    adminView.init();
  },
  // Get cats.
  getCats: function() {
    return model.cats;
  },
  // Update current cat.
  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },
  // Get current cat. 
  getCurrentCat: function() {
    console.log(model.currentCat)
    return model.currentCat;
  },
  // Update and store individual click count.
  updateClickCount: function() {
    model.currentCat.clickCount ++;
    imageView.render();
  },
  // initialAdmin: function() {
  //   document.querySelector('form').style.display = "none";
  //   document.querySelector('.admin_button').onclick = function(e) {
  //     let selectedCat = model[document.querySelector('img').className];
  //     document.querySelector('form').style.display = "block";
  //     document.querySelector('.admin_name').value = `${selectedCat.name}`;
  //     document.querySelector('.admin_url').value = `${selectedCat.imageURL}`;
  //     document.querySelector('.admin_click').value = `${selectedCat.clickCount}`;
  //   };
  // },
  // submitAdmin: function() {
  //   document.querySelector('.submit').onclick = function(e) {
  //     let selectedCat = model[document.querySelector('img').className];
  //     console.log(selectedCat);
  //     selectedCat.name = document.querySelector('.admin_name').value;
  //     selectedCat.image = document.querySelector('.admin_url').value;
  //     selectedCat.imageURL = document.querySelector('.admin_url').value;
  //     selectedCat.clickCount = document.querySelector('.admin_click').value;
  //     return false;
  //   }
  // } 
};

var listView = {
  // Display cat data in list.
  init: function() {
    this.catListing = document.querySelector('.list');
    this.render();
  },
  render: function() {
    var cats, cat, i, listItem;

    cats = octopus.getCats();

    for (i = 0; i < cats.length; i ++) {

      cat = cats[i];
      listItem = document.createElement('li');
      listItem.innerHTML = cat.name;
      listItem.className = cat.name;
      this.catListing.appendChild(listItem);
      console.log(this.catListing)

      listItem.addEventListener('click', (function(catCopy) {
        return function() {
          octopus.setCurrentCat(catCopy);
          imageView.render();
        }
      })(cat));
    }
  }
};

var imageView = {
  //Display selected cat image and message.
  init: function() {
    this.displayCount = document.querySelector('.selected_count');
    this.imgElement = document.querySelector('img');
    this.displayName = document.querySelector('.selected_name');

    this.imgElement.addEventListener('click', function(){
      octopus.updateClickCount();
    });

    this.render();
  },
  render: function() {
    let currentCat = octopus.getCurrentCat();
    console.log(currentCat);
    this.displayCount.innerHTML = currentCat.clickCount;
    this.displayName.innerHTML = currentCat.name;
    this.imgElement.src = currentCat.image;
  }
}

var adminView = {
  init: function() {
    octopus.initialAdmin();
    octopus.submitAdmin();
  }
}

octopus.init();

