class AllCats {
  constructor() {
    this.catList = ['cat1','cat2','cat3'];
    this.catListing = [];
  }
  createList(cat) {
    return `<li class="${cat}"><img class="${cat}_picture" src="cat clicker/images/${cat}.jpg"></li>`
  }
  fillList() {
    for(var i = 0; i < this.catList.length; i++) {
      var cat = this.catList[i];
      // console.log(cat);
      this.catListing.push(this.createList(cat));
      // console.log(listItem)
      // console.log(document.querySelector('.list').innerHTML)
    }
    document.querySelector('.list').innerHTML = this.catListing.join('');
  }
}

let allCats = new AllCats();
allCats.fillList();
