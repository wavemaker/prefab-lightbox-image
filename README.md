# prefab-lightbox-image

### Target:

A Prefab which supports the pinch zoom, and flip of an image in the modal on click of thumbnail.


### Libraries used: 

#### [PanZoom](https://github.com/anvaka/panzoom)  - This library  supports pinch zoom, which supports the DOM (text, image) and SVG.

#### [Jquery Magnify](https://nzbin.github.io/magnify/) - This Library supports the image zoom feature and rotate in the modal.

### Files Needed:
Jquery.magnify.js
Panzoom.min.js
Jquery.magnify.css
And Custom css for modal.
magnifyflip.css

### Steps to Create a Prefab:
* Go to Prefabs section, Click on Create a Prefab by providing the necessary data.
* Click On File Explorer -> Resources -> click on Upload Files and upload the above listed files.
* Click on Settings  -> Config Prefab 
* Under the styles section add Jquery.magnify.css after that add magnifyflip.css.
* Under the scripts section add Jquery.magnify.js after that add Panzoom.min.js.
* Now Click on Properties  tab after adding resources.
* Under the UI Properties click Add

		* Name : dataset , DataType : Object, IsList: True.
		* Name: toolbaroptions, DataType : Object, IsList: True.
		* Name: thumbnailclass, DataType : String. 

* Click on save and close the dialog.
* Click on Pages  -> under the widgets section search for a container.
* Drag and drop Container and give a class name as ‘imageContainer’.
* Click on script tab -> And add the script (refer prefabPage.js).


##### Note : Change the class , prefab properties names if changed.



### Implementation:
Push the changes and publish to Project.
Under the Prefabs section, Drag and Drop the Prefab added to the respective Project.
Now Map the Data for the properties mentioned above , and click on preview to view .
