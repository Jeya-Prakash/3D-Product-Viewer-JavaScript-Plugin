# 3D Product Viewer JavaScript Plugin
360 Degree Product Viewer using plain JavaScript
<br><br>
<strong>Demo</strong>
<br>
https://rawgit.com/Jeya-Prakash/3D-Product-Viewer-JavaScript-Plugin/master/demo.html
<br>
![alt text](/pic.jpg)
<br><br>

  <strong>Options:</strong>
<br>
```js
pdt360DegViewer('car', 51, './img/', 'png', true, false, true, true);
//pdt360DegViewer(imgDivid, count, path, imgType, drag, mouseMove, scroll, keyNavigation);

  //imgDivid--> ID of div on which img is going to append. Ex: 'car'
  //count--> number of images to be displayed in 3D Product Viewer. Ex: 18
  //path--> path of the image (without file name). Ex: './img/car/'
  //imgType--> extension of the image file name. Ex: 'png', 'jpg', 'gif'
  //drag--> enables drag over image. if set to true
  //mouseMove--> enables mouse move over image, if set to true
  //scroll--> enables scroll over image, if set to true
  //keyNavigation--> enables keypress navigation, if set to true
```
<br>
<strong>Note:</strong> For Mobile, Only drag event is possible

