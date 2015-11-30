#  C/C++ Template Project with Automake and Autoconf Generator

> Yeoman generator for Automake Autoconf C/C++ Project for "Automake C++ Tutorial" - lets you quickly set up a C/C++ project with Automake and Autoconf.

This is a template project which I used in the "Automake C++ Tutorial" at http://youtu.be/7hBag3hr0xU

## Quick Installation

Install `yo`, `grunt-cli`, `bower` and `generator-c-c-plus-plus-project`:
```
npm install -g grunt-cli yo bower generator-c-c-plus-plus-project
```

## Usage

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo c-c-plus-plus-project`:
```
yo c-c-plus-plus-project
```

## Variables the generator uses ##

* **generatorModuleName:** Module Name. The generator will try to generate a proper name with dashes from this name.
* **generatorModuleNameWithDashes:** (Generated but can be changed) Derived name from module name, used as your module's name in configure.ac and as the entry cpp file in src directory.
* **generatorModuleDescription:** Module Description. Goes into README.md of your project.
* **generatorUserEmail:** Your email. Goes into AUTHORS file and all the copyright notices in your source files.
* **generatorUserName:** Your name. Goes into AUTHORS file and all the copyright notices in your source files.

## Questions that the generator asks ##

* **'What is your module's name ?':** sets 'generatorModuleName'
* **'What is your module's dasherized name ? Will use this as the main module name':** sets 'generatorModuleNameWithDashes'
* **'What is your module's description ?':** sets 'generatorModuleDescription'.
* **'What is your email ?':** sets 'generatorUserEmail'.
* **'What is your name ?':** sets 'generatorUserName'.

# Scaffolding Explained #

In this section, we describe what each file does in this template and how you can modify them to your needs.

## Directory Structure ##

Once everything is installed, you will see a project structure like below:

```
├── Makefile.am           # Main makefile.
├── README.md             # README.md file
├── configure.ac          # File of magic. Main configuration is here.
├── my_inc                # Example includes directory which has a simple addition library.
│   ├── Makefile.am
│   ├── myadd.cpp         # Simple addition library cpp file.
│   └── myadd.h           # Simple addition library header file.
└── src
│   ├── Makefile.am
│   ├── helper.cc         # Helper cc file.
│   ├── helper.cpp        # Helper cpp file.
│   ├── helper.h          # Helper header file.
│   └── < pkg name >.cpp  # Main module cpp file.
```

## Details ##

You can generate this template project to jump start your project with a automake/autoconf based build system.
It has the basic ingredients, so all you need is to replace the libraries and main file with your own code
while modifying the Makefile.am's and configure.ac's with the names of your files.

In order to make everything work, go the root of project, and type:
```
> aclocal

> autoconf

> automake --add-missing
```
This should create all "configure" script along with all the Makefile's. Now, you can type
```
> ./configure

> make
```
And your project should compile. Now you are all set with a lean template to build upon.

# License

[Apache 2.0 License](LICENSE.md) - &copy; 2015 Baris Yuksel

# Bugs, Requests and Support #

For bug reports, feature requests and general questions, please feel free to email baris@onehundredyearsofcode.com
