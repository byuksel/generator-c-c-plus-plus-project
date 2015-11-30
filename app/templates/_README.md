# <%= generatorModuleName %>
> <%= generatorModuleDescription %>
==================================

Write an awesome description for your new C/C++ project here. You can edit this file and its contents.

## Quick Installation ##

On Mac OS X, in order to install **automake**, **autoconf** and **aclocal**, you can follow the instructions [from this gist](https://gist.github.com/jellybeansoup/4192307):

# Usage ##

In order to make everything work, go the root of project, and type:
```
aclocal

autoconf

automake --add-missing
```

This should create all **"configure"** scripts along with all the **Makefile's.** Now, you can type
```
./configure

make
```

And your project should compile. Now you are all set with a lean template to build upon.

# Information #

This is a template project which was used in the "Automake C++ Tutorial" at http://youtu.be/7hBag3hr0xU

You can clone this template project to jump start your project with a automake/autoconf based build system.
It has the basic ingredients, so all you need is to replace the libraries and main file with your own code
while modifying the Makefile.am's and configure.ac's with the names of your files.

# License

[Apache 2.0 License](LICENSE.md) - &copy; 2015 <%= generatorUserName %>
