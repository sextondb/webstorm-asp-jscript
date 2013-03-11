# Webstorm ASP JScript

Provides code completion and links to documentation for the global ASP objects when using [JetBrain's WebStorm](http://www.jetbrains.com/webstorm/)

### Implemented
* All seven ASP global objects and their members
 * Application
 * ASPError
 * ObjectContext
 * Request
 * Response
 * Server
 * Session
* @see documentation links for each global object and their members
 * [How to view inline documentation](http://www.jetbrains.com/webstorm/webhelp/viewing-inline-documentation.html)
### Not Implemented

* Secondary collection properties
 * Request.Cookie("auth")("username")
 * Request.Form("ID").Count

* camelCasing for members

### Installation Instructions

[Directions on the WebStorm website](http://www.jetbrains.com/webstorm/webhelp/configuring-javascript-libraries.html#configure)


1. Download the /src/globals.js file to a local directory
2. Open a WebStorm project
3. Open File > Settings
4. Under the "Project Settings" section expand the "JavaScript" section
5. Click on the "Libraries" sub-option
6. On the right hand side of the screen, click on the "Add" button
7. On the resulting dialog box, enter a name for this library.  This will be shown in the UI. ex: ASP Globals
8. Change the visibility to project or global depending upon your needs.  Project means that this library is only available within this project.  Global means that the library is available inside of any project
9. Click on the "Attach..." button and open the file saved in step 1
10. Click the OK button to accept the new library settings
11. Exit the settings dialog

### Enabling/Disabling the Library

1. Open any javascript file in WebStorm
2. Right click inside of the file's text area
3. Hover over the "Use JavaScript Library" menu item
4. From the sub-menu click on the name that was entered in step 7 of the installation instructions

## Maintainers

* [David Sexton](mailto:code@dbsexton.com)

Copyright (c) 2013 David Sexton. This software is licensed under the MIT license.