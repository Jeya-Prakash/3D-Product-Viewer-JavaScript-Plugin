# 3D Product Viewer JavaScript Plugin
360 Degree Product Viewer using plain JavaScript
<br><br>
<strong>Demo</strong>
<br>
https://rawgit.com/Jeya-Prakash/3D-Product-Viewer-JavaScript-Plugin/master/demo-html.html
<br>
![alt text](/sample-pic.png)
<br><br>

  <strong>Options:</strong>
<br>
```js

pdt360DegViewer('car0', 51, './img/', 'png', true, true, false, false, false, false, false);    
//pdt360DegViewer(imgDivid, count, path, imgType, playable, autoPlay, drag, mouseMove, 
                                                   buttonNavigation, keyNavigation, scroll);

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
