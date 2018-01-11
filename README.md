# 3D Product Viewer JavaScript Plugin
360 Degree Product Viewer using plain JavaScript
<br><br>
# Live Demo
http://goo.gl/C4tfs9
<br><br>
[![3D Product Viewer JavaScript Plugin](/sample-pic.png)](http://goo.gl/C4tfs9)
<br><br>

  <strong>Options:</strong>
<br>
```js

pdt360DegViewer('car0', 51, './img/', 'png', true, true, false, false, false, false, false);    
//pdt360DegViewer(imgDivid, count, path, imgType, playable, autoPlay, drag, mouseMove, buttonNavigation, keyNavigation, scroll);

  //imgDivid--> ID of div on which img is going to append. Ex: 'car'
  
  //count--> number of images to be displayed in 3D Product Viewer. Ex: 18
  
  //path--> path of the image (without file name). Ex: './img/car/'
  
  //imgType--> extension of the image file name. Ex: 'png', 'jpg', 'gif'
  
  //playable--> enables play/pause/stop/diretcion/speed option with control buttons
  
  //autoPlay--> start autoplaying images, if set to true
  
  //drag--> enables drag over image, if set to true
  
  //mouseMove--> enables mouse move over image, if set to true
  
  //buttonNavigation--> enables buttonNavigation, if set to true
  
  //keyNavigation--> enables keypress navigation, if set to true
  
  //scroll--> enables scroll over image, if set to true
```
-------------
## Note:
<br>File Name should be in the form of <strong>"1.jpg"/"1.png"</strong> starting from 1 to total number of images 
<br>Example: 1-18(1.jpg, 2.jpg, 3.jpg.....17.jpg, 18.jpg).
<br> File extension can be anything- jpg,gif,png,svf
