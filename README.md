#SassPress
I've been looking for a way to incorporate SASS and Autoprefixer into my WordPress development process for a little while now and I think I've finally started to work something comfortable out.

##Usage
1. First clone the repo to wherever you'd like. These can be run from anywhere, be it your project file or somewhere else..
 `git clone git@github.com:Swingline0/SassPress.git`
2. Install dependencies
 `npm install`
3. Start the Grunt task with `--theme` flag to indicate the location of your `style.scss` 
 `grunt --theme=wp-content/themes/Something/`
4. Enjoy!

##My Worflow
I generally work with a local copy of the site but use Sublime Text to sync changed files to a development server. Using Sublime and the SFTP plugin, I keep the `style.scss` file open along with `style.css` and have Sublime monitor the compiled css file to upload it upon any detected change. (Here's a little explanation of that process)[http://stackoverflow.com/a/21557820/2354352]

##Considerations
I'm still pretty new to Grunt so please let me konw if you have any suggestions on improving this process. 

Enjoy!
