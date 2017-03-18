# home-theater-react
A small app to keep track of our DVDs; this time built in React!

## Compiling

Successful Tutorial: https://www.christianengvall.se/electron-packager-tutorial/

For mac you need an ICNS file
For windows you need and ICO file
For everything else (linux) you need a PNG

Add an "icon: path.join(__dirname, '/file.[ico|icns|png]’)” to your main BrowserWindow.

**Note: not sure if adding `icon:` to the BrowserWindow is the ‘magic sauce’ or not.**

Compiling commands that worked for me (got me the icon and a running app):

Mac:
```
electron-packager . home-theater --overwrite --platform=win32 --icon=public/assets/icons/win/tv-icon.ico --prune=true --out=release-builds
```

Windows (Note: when I packaged strictly using the tutorial's command, I got an error trying to load the .exe. I removed the `asar=true` and `platform=ia32` flags and it worked fine after that):
```
electron-packager . home-theater --overwrite --platform=win32 --icon=public/assets/icons/win/tv-icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName=\"Home Theater\"
```

Linux: Haven't tried yet. Tutorial command will probably work.
