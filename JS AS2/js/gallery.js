// Gallery data (image filenames and titles)
const galleryData = [
    { filename: 'pink large', title: 'pink large' },
    { filename: 'purple large', title: 'purple large' },
    { filename: 'red large', title: 'red large' },
    { filename: 'sunflower large', title: 'sunflower large' },
    { filename: 'white large', title: 'white large' }
  ];
  
  // Get the featured image and image title elements
  const featuredImage = document.getElementById('featured-image');
  const imageTitle = document.getElementById('image-title');
  
  // Get the thumbnail list element
  const thumbnailList = document.getElementById('thumbnail-list');
  
  // Add event listener to the thumbnail list
  thumbnailList.addEventListener('click', event => {
    // Check if the clicked element is an image
    if (event.target.nodeName === 'IMG') {
      // Get the clicked image source
      const clickedImageSrc = event.target.src;
  
      // Set the clicked image as the featured image
      featuredImage.src = clickedImageSrc;
  
      // Get the index of the clicked image in the thumbnail list
      const thumbnailIndex = Array.from(thumbnailList.children).indexOf(event.target.parentNode);
  
      // Set the corresponding image title
      imageTitle.textContent = galleryData[thumbnailIndex].title;
    }
  });
  
  // Initialize the gallery with the first image
  
  
  // Dynamically build the thumbnail list
  galleryData.forEach(item => {
    const thumbnailItem = document.createElement('li');
    const thumbnailImage = document.createElement('img');
    thumbnailImage.alt = item.title;
    thumbnailImage.width = 240;
    thumbnailImage.height = 160;
    
  });
  