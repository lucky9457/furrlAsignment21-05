
# building mobile website UI

A E-commerce website developed using react js in which there are several components that provides functionality to the web page 

# Components used : 
Different components are used to develop this web page that makes a code to understand easily and can make changes easily.
The components that are used for developing this web page is as follows 
# 1.Homepage
Homepage component as an
Index.js file. This component is the main Homepage of this web page that as the path "/". 

# 2.Navbar:
The Navbar component is a fixed component that helps the user to interact with the route paths. It's a common component for every page and as contains the buttons  that is used to navigate towards the cark component and wishlist routes.

# 3.Cart:
The Cart component can be navigated from the Navbar. The route path of the Cart is "/Cart".The Cart component can be enhanced with the list buying products of user.

# 4.WishListPage:
The WishListPage component can be navigated from the Navbar. The route path off the WishListPage is "/Wishlist".

# 5.ProductList:
The ProductList component represent the products and handles infinite scrolling. The Api fetch calls of the data of the products is handled in this component.Api fetch calls of the productlist and tab filters.

# 6.ProductItem:
ProductItem component represent and display a single product.
 
# 7.TabItem:
TabItem represents a single tab filter.

# API CALLS :
Api fetch calls are done in ProductList components. The post method is used fetching the ProductList data. The body for the post method of fetching ProductList consists of an "input"  object. This object consists data of page number, total pages and the filter list to filter the data according to the user interaction with tab filters.

An API fetch calls using post method is also done to fetch the filter list.



App.js file handles the route paths of the components. 




