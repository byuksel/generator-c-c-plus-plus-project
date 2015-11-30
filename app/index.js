var chalk = require('chalk'),
    generators = require('yeoman-generator'),
    us = require('underscore.string');

exports = module.exports = generators.Base.extend({
  _copyToDest: function(from, to) {
    this.fs.copy(this.templatePath(from), this.destinationPath(to));
  },
  _makeDestDir: function(dir) {
    var newDir = this.destinationPath(dir);
    if (!this.fs.exists(newDir)) {
      this.mkdir(newDir);
    }
  },
  _copyToDestWithTemplate: function (from, to, template) {
    this.fs.copyTpl(
      this.templatePath(from),
      this.destinationPath(to),
      template);
  },
  prompting: function () {
    var done = this.async();

    var prompts = [{
      name: 'generatorModuleName',
      message: 'What is your module\'s name ?',
      default : this.determineAppname(),
      desc: 'Name of your module. We will create an app with this name in current directory'
    }];

    this.prompt(prompts, function (answers) {
      this.answers = answers;
      done();
    }.bind(this));
  },
  deriveAnswers: function() {
    this.answers['generatorModuleClass'] = us.classify(this.answers['generatorModuleName']);
    this.answers['generatorModuleNameWithDashes'] = us(
      this.answers['generatorModuleName']).decapitalize().dasherize().value();

  },
  askModuleWebsite: function() {
    var done = this.async();
    var prompts = [ {
      name: 'generatorModuleNameWithDashes',
      message: 'What is your module\'s dasherized name ? Will use this as the main module name:',
      default : this.answers['generatorModuleNameWithDashes'],
      desc: 'Main exported class from entry file.'
    }, {
      name: 'generatorModuleDescription',
      message: 'What is your module\'s description ?',
      default : this.determineAppname(),
      desc: 'Description of your module.'
    }, {
      name: 'generatorUserEmail',
      message: 'What is your email ?',
      default : this.user.git.email(),
      desc: 'Your email, does into package.json'
    }, {
      name: 'generatorUserName',
      message: 'What is your name ?',
      default : this.user.git.name(),
      desc: 'Your name, does into package.json'
    }];
    this.prompt(prompts, function (answers) {
      var propNames = Object.getOwnPropertyNames(answers);
      for (var i = 0; i < propNames.length; i++) {
        this.answers[propNames[i]] = answers[propNames[i]];
      }
      done();
    }.bind(this));
  },
  fixUsername: function() {
    this.answers['generatorUserName'] = us.titleize(this.answers['generatorUserName']);
  },
  tellUserOurTemplate: function(){
    this.log('We will use the values below for templating:');
    this.log(this.answers);
  },
  scaffoldFolders: function(){
    this._makeDestDir('src');
    this._makeDestDir('my_inc');
  },
  copyFiles: function(){
    this._copyToDest('._gitignore', '.gitignore');
    this._copyToDestWithTemplate('_configure.ac', 'configure.ac', this.answers);
    this._copyToDest('_Makefile.am', 'Makefile.am');
    this._copyToDestWithTemplate('_AUTHORS', 'AUTHORS', this.answers);
    this._copyToDestWithTemplate('_LICENCE.md', 'LICENCE.md', this.answers);
    this._copyToDestWithTemplate('_README.md', 'README.md', this.answers);
    // src dir
    this._copyToDestWithTemplate('_src/_Makefile.am', 'src/Makefile.am', this.answers);
    this._copyToDest('_src/_main.cpp', 'src/' + this.answers['generatorModuleNameWithDashes'] + '.cpp');
    this._copyToDest('_src/_helper.cc', 'src/helper.cc');
    this._copyToDest('_src/_helper.cpp', 'src/helper.cpp');
    this._copyToDest('_src/_helper.h', 'src/helper.h');

    // my_inc dir
    this._copyToDest('_my_inc/_Makefile.am', 'my_inc/Makefile.am');
    this._copyToDest('_my_inc/_myadd.cpp', 'my_inc/myadd.cpp');
    this._copyToDest('_my_inc/_myadd.h', 'my_inc/myadd.h');

  },
  finalRound: function() {
    console.log(chalk.yellow('\nEverything is ready!'));
    console.log(chalk.yellow('You can type "grunt", and run your unittests, get coverage reports, ' +
                             'get browserified and minimized versions of your module/library.'));
    console.log(chalk.cyan('\nFor more information, refer to HOW_TO_GUIDE.md.'));
    console.log(chalk.green('\nEnjoy the ride, and have fun coding!'));
  }
});
