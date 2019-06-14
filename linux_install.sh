#!/bin/bash

##############################################
# Author: GwenDragon
# License: GPL
##############################################

if [ $UID != 0 ] ; then
    echo "Only root is allowed!
Please login with su or sudo -i as root and start the script."
    exit 255
fi

mod_dir=./mods
if [ ! "$1" = "" ] ; then
    mod_dir=$1
fi

vivaldi_installs=$(dirname $(find /opt -name "vivaldi-bin" )) ;
vivaldi_install_dirs=( $vivaldi_installs ) ;

echo "---------------------"
count=1
selected=0
echo "Found installations:"
for dir in $vivaldi_installs ; do    
	echo $dir": "$count ;
	((count++)) ;
done
read -p "
Which installation patch?
Please enter number and press enter or X for cancel
Enter selection: " selected ;
if [ "$selected" = "X" ] ; then 
	exit ;
fi
((selected--)) ;
if [ $selected -ge ${#vivaldi_install_dirs[@]} ] ; then
    echo "Selection too big!"
fi
dir=${vivaldi_install_dirs[$selected]} ;
echo "---------------------
"
echo "Patch from "${mod_dir}" to "${vivaldi_install_dirs[$selected]} ;

cp "$dir/resources/vivaldi/browser.html" "$dir/resources/vivaldi/browser.html-$(date +%Y-%m-%dT%H-%M-%S)"

alreadypatched=$(grep '<link rel="stylesheet" href="style/custom.css" />' $dir/resources/vivaldi/browser.html);
if [ "$alreadypatched" = "" ] ; then
    echo Patching browser.html
	sed -i -e 's/<\/head>/<link rel="stylesheet" href="style\/custom.css" \/> <\/head>/' "$dir/resources/vivaldi/browser.html"
	sed -i -e 's/<\/body>/<script src="custom.js"><\/script> <\/body>/' "$dir/resources/vivaldi/browser.html"
else
        echo "browser.html is already patched!"
fi

if [ -f "$mod_dir/custom.css" ] ; then	
    echo Copying custom.css
    cp -f "$mod_dir/custom.css" "$dir/resources/vivaldi/style/custom.css"
else 
    echo custom.css is missing in $mod_dir
fi

if [ -f "$mod_dir/custom.js" ] ; then	
    echo Copying custom.js
    cp -f "$mod_dir/custom.js" "$dir/resources/vivaldi/custom.js"
else 
    echo custom.js is missing in $mod_dir!
fi
