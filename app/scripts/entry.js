// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import $ from 'jquery';
import Backbone from 'backbone';

const ImageView = Backbone.View.extend({
  tagName: 'article',
  className: 'image-wrapper',
  events: {
    'click .delete': 'onDeleteClick',
    'click.like': 'onLikeClick' 
  },
  initialize: function (label, src){
    console.log(label, src);
    this.label = label;
    this.src = src;
    this.render();
    this.counter = 0;
    // this.$('.delete').click(this.onDeleteClick.bind(this));

  },
  render: function(){
    const template = `
      <div class=image>
          <button class="delete">Delete</button>
          <button class="like">Like</button>
          <img src=${this.src}>
          <p>${this.label}</p>
      </div>`; 
      this.$el.append(template);
      // console.log(this.el);
  },
  onLikeClick: function (){
    this.counter ++;
    if(this.counter === 1) {
      this.$('.like').html('1 like');
      
    } 
    else {
      this.$('.like').html(this.counter + ' Likes');
    };
  },
  onDeleteClick: function (){
    this.$el.remove();
    // console.log(this);
    // console.log('the delete button was clicked');
  }

});

// let angryBirdImage = new ImageView(
//   'I am Batman',
//   'http://wallpapercave.com/wp/MJAj7On.jpg'
//   );

// angryBirdImage.render();
// let airRide = new ImageView(
//   'Why so serious',
//   'http://www.wallpaperfo.com/thumbnails/detail/20120814/movies%20the%20joker%20batman%20the%20dark%20knight%20rises%201920x1080%20wallpaper_www.wallpaperfo.com_40.jpg');

// airRide.render();
// let hotAir = new ImageView(
//   'I am Bane',
//   'http://i.myegy.to/images/90e4783d45a0.original.jpeg');
 
// hotAir.render();
 

// $('#image-list').append(angryBirdImage.$el);
// $('#image-list').append(airRide.$el);
// $('#image-list').append(hotAir.$el);




// jquery example

const imageInfo = [
{
  label: 'I am Batman',
  src:'http://wallpapercave.com/wp/MJAj7On.jpg'
},
{
  label: 'Why So Serious',
  src: 'http://www.wallpaperfo.com/thumbnails/detail/20120814/movies%20the%20joker%20batman%20the%20dark%20knight%20rises%201920x1080%20wallpaper_www.wallpaperfo.com_40.jpg'
},
{
  label: 'I am Bane',
  src: 'http://i.myegy.to/images/90e4783d45a0.original.jpeg'
}

];

imageInfo.forEach((val, index, array) => {
    let newImageView = new ImageView(val.label,val.src);
    // newImageView.render();
    $('#image-list').append(newImageView.$el);
});





















// const imageTemplate1 = `
// <div class=image>
// <button class="delete1">Delete</button>
// <img src="http://wallpapercave.com/wp/MJAj7On.jpg">
// <p>This is my image caption</p>
// </div>
// `; 

// const imageTemplate2 = `
// <div class=image>
// <button class="delete1">Delete</button>
// <img src="http://www.wallpaperfo.com/thumbnails/detail/20120814/movies%20the%20joker%20batman%20the%20dark%20knight%20rises%201920x1080%20wallpaper_www.wallpaperfo.com_40.jpg">
// <p>This is my image caption</p>
// </div>
// `; 

// const imageTemplate3 = `
// <div class=image>
// <button class="delete1">Delete</button>
// <img src="http://i.myegy.to/images/90e4783d45a0.original.jpeg">
// <p>This is my image caption</p>
// </div>
// `; 

  

// $('#image-list').append(imageTemplate1);
// $('#image-list').append(imageTemplate2);
// $('#image-list').append(imageTemplate3);

// $('.delete1').click((e) => {
//   console.log('delete image 1');
// })