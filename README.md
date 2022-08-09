# FruitBasket Inventory Tracker

[View the Deployed Project Here]()

## Description

FruitBasket is a simple inventory tracker for all your favorite fruits. If your inventory runs out, FruitBasket will notify you!

## Objectives:
This application was built for the Code The Dream Tech Challenge. The following are the primary requirements:
- Keep track of at least one product.
- Manage the quantities of the product(s). There should be a way to increase and decrease the number of items of the product(s) in the inventory.
- Send an email if the quantity of a product hits zero.


## Deployment/Walkthrough
This site is deployed on Surge and can be found [here]()!
Alternatively, this repo can be cloned to your local machine. run `npm i` before running `npm start`.

This application was bootstrapped using `creat-react-app`

## Loading Page: Fruits List

![Loading Screen](https://media.giphy.com/media/ySqDGEeq9y05cFLF1x/giphy.gif)

You will be greeted with a prompt to add your email address to the site. The email is stored in state and an email notification will be sent to the user immediately.

![Welcome Email](https://user-images.githubusercontent.com/35410545/183556774-0ebb1bcb-3cee-4585-a848-2d18a9b677c6.png)

## Search Filtering

You can filter your fruits search in real-time simply by typing in the search bar. If there are no matches, you will receive a message. As soon as you clear the search bar, all fruits will be listed. 

![Search Bar](https://media.giphy.com/media/kVWERJVh8MQ0Uc4v41/giphy.gif)

## Adding Fruits to User Inventory
You can add fruits to your tracker page by clicking into the input field and entering a value between 1 and 50. If you attempt to type a larger number, the maximum will still be 50 items of that fruit.

![Add Fruits](https://media.giphy.com/media/DxWxXM9Kkuj1j5i3bm/giphy.gif)

## Fruit Inventory Tracker
Now let's go to the inventory tracker. Here you will see all the fruits you added. Here, you can increment or decrement the stock counts of your fruits.

![Fruit Tracker Page](https://media.giphy.com/media/jFrXQLKiTDNOYLg2Ow/giphy.gif)

If your stock hits zero, a modal will notify you.

![Run Down Stock](https://media.giphy.com/media/q2RfaLhIMggT22JFxD/giphy.gif)

An email will also be sent to your account as a reminder.

![Out of Stock Email](https://user-images.githubusercontent.com/35410545/183556792-ee1bec8e-33d7-4c30-adab-519bdb8b740d.png)

If you no longer wish to track a fruit, you can remove it from your list. A modal will confirm your deletion. You can always re-add the fruit from the Fruit List Page

![Remove Fruit from Inventory](https://media.giphy.com/media/3XM235g3US2dkKLFku/giphy.gif)

This app is responsive and will scale across most devices.

![Responsive Design](https://media.giphy.com/media/oUTkWDlcNyriTWTy0u/giphy.gif)

## Technology Stack
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
 ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
 ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
 ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
 ![CSS3](https://img.shields.io/badge/CSS3-hotpink.svg?style=for-the-badge&logo=CSS3&logoColor=white)
- ![ESLINT](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
- ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Dribbble](https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white)

- #### EMailJS was used to send the custom email notifications.
- #### React Context Api was used to track global state across the application.

- Fruit data was fetched from the FruityVice API `https://www.fruityvice.com/api/fruit/all`



### Future Features

- Implement Redux or Zustand for global state management
- Add images and track user state using a custom Express Server
- Persistent state management or user logins to retain inventory history

### Thank you for the opportunity to do this challenge and to apply to be part of Code The Dream!
## Contributors

> [Eric Matlock](https://github.com/ermatlock)
