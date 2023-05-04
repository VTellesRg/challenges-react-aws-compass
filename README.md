-  private repository created to upload Compass.UOL scholarship program challanges

# First challenge React / Aws Compass

## Frameworks, programming languages and tools 

- React 
- HTML
- CSS
- TypeScript
- node.js
- heroicons api
- Deployed on [Vercel](https://vercel.com/dashboard)

## Files and Folders

at [my-app](https://github.com/VTellesRg/challenges-react-aws-compass/tree/main/my-app) folder can be found all necessary files to run the application, there are:

- .json files, with main setups for frameworks, libs and tools
- public folder, where can be found images, public assets, etc.
- src folder, where are all the source code of the application.

### The src Folder

in this folder all the project is running, at [index.tsx](https://github.com/VTellesRg/challenges-react-aws-compass/blob/main/my-app/src/index.tsx) is render the main web page and imported [App.tsx](https://github.com/VTellesRg/challenges-react-aws-compass/blob/main/my-app/src/App.tsx) where the main functions are imported:
 - from [Pages](https://github.com/VTellesRg/challenges-react-aws-compass/tree/main/my-app/src/pages) folder both screens requested by Compass.UOL to be created and configured
 
 #### Pages
 - this folder contains both **Login** and **Register** pages, where can be found the render code of the pages, was imported **button** and **input** from the folder [components](https://github.com/VTellesRg/challenges-react-aws-compass/tree/main/my-app/src/components). at **Button.tsx** you find a simple code to use the same button on both pages, at **Input.tsx** was setted all input fields for both Login and Register page and exported as CustomInput function to be used in the pages.
 - another folder imported in the pages files was the [util](https://github.com/VTellesRg/challenges-react-aws-compass/tree/main/my-app/src/util) folder, that contains the **Validation.tsx** file. at this file can be found, as the name says, the validation functions, with Regular Expressions for check name, username, email and password, furthermore there are an object created to simulate an existing user account to be checked on both login and register pages.
 
 - from [App.css](https://github.com/VTellesRg/challenges-react-aws-compass/blob/main/my-app/src/App.css) all the style as required by Compass.UOL, with a little improvements
 
#### Styles
- at **App.css** all the pages was stylized, the whole page was setted as *.container*, while the login and register pages was *.container__left* and the [**side image**](https://github.com/VTellesRg/challenges-react-aws-compass/blob/main/my-app/public/assets/images/side_image.png) was treated as *.container_right*. to keep the responsivity of the pages was used Flexbox configurations and all CSS *px* was converted to *variable width*(vw) with help of an [online calculator](https://web-development.space/tools/px-to-vw/) for this purpose.
- another responsive treatment that was done with Media Queries (*@media*) found in line 239 and beyond, to make the pages readable from mobile devices. one of the ways to do this was to hide the **side image** after 768px width, the other treatments were just using flexbox and vw units.

### Deploy

- the project can be acessed online, [click here](https://challenges-react-aws-compass.vercel.app/)


# Second Challenge React / Aws Compass

## Frameworks, programming languages and tools 

All first challenge frameworks and tools and: 

- node.js with Express
- Fetch API
- dotenv
- path

## Files and Folders

 In this challenge some adjustments and improves was done, all **Pages** was organized as folders that contains **Index.tsx** and **styles.css** files. A **home** page was created with the features required for this challenge. Another folder created at *my-app* folder was the **helpers** folder, that contains **Auth.tsx** and **Data.tsx** files, at Auth.tsx can be found the *authentication functions*, at Data.tsx can be found the functions *GetUsers and GetPosts* used to get the data from the **API**.

 ### The API

The API is deployed in Vercel and its files can be found in the **src** folder found **outside** the my-app folder, this src Folder was created just for avaliation purposes, the files from this folder was deployed from another repository to Vercel and all reqs and res was called from the link https://my-api-nodejs.vercel.app/api/v1/user/ as a solution to work around Vercel's deployment limitations

### Problems and adjustments

Some problems and adjustments was commented at the code and will be fixed as soon as possible:

- Post date function cannot be setted because was return an error as commented at line **36** of *Home/index.tsx*
- Posts without a picture have a **undefined** url_imagem and at the style this posts load an empty image frame, I didn't had time to adjust all home page components styles
- for the same reason of the url_imagem problem, the button all-comments is not functional
- home page does not have responsivity
- as explained at **Files and Folders** the styles was separated for each page folder as independent files, so the *App.css* of the first challenge was deleted.
- before the next challenge I will try to separate all home page components to keep a pattern of files and folders as the first challenge was done.
