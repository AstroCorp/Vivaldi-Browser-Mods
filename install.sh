#!/bin/bash

##############################################
# Author: GwenDragon
# License: GPL
##############################################

if [ $UID != 0 ] ; then
    echo "Nur root darf das!
Bitte mit su oder sudo -i als root einloggen und dann das Skript starten."
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
echo "Gefundene Installationen:"
for dir in $vivaldi_installs ; do    
	echo $dir": "$count ;
	((count++)) ;
done
read -p "
Welche Installation patchen?
Bitte Nummer eingeben und Enter drücken oder X für Abbruch
Auswahl eingeben: " selected ;
if [ "$selected" = "X" ] ; then 
	exit ;
fi
((selected--)) ;
if [ $selected -ge ${#vivaldi_install_dirs[@]} ] ; then
    echo "Auswahl zu groß!"
fi
dir=${vivaldi_install_dirs[$selected]} ;
echo "---------------------
"
echo "Patch von "${mod_dir}" für "${vivaldi_install_dirs[$selected]} ;

cp "$dir/resources/vivaldi/browser.html" "$dir/resources/vivaldi/browser.html-$(date +%Y-%m-%dT%H-%M-%S)"

alreadypatched=$(grep '<link rel="stylesheet" href="style/custom.css" />' $dir/resources/vivaldi/browser.html);
if [ "$alreadypatched" = "" ] ; then
    echo Patche browser.html
	sed -i -e 's/<\/head>/<link rel="stylesheet" href="style\/custom.css" \/> <\/head>/' "$dir/resources/vivaldi/browser.html"
	sed -i -e 's/<\/body>/<script src="custom.js"><\/script> <\/body>/' "$dir/resources/vivaldi/browser.html"
else
        echo "browser.html ist schon gepatcht!"
fi

if [ -f "$mod_dir/custom.css" ] ; then	
    echo Kopiere custom.css
    cp -f "$mod_dir/custom.css" "$dir/resources/vivaldi/style/custom.css"
else 
    echo custom.css fehlt in $mod_dir
fi

if [ -f "$mod_dir/custom.js" ] ; then	
    echo Kopiere custom.js
    cp -f "$mod_dir/custom.js" "$dir/resources/vivaldi/custom.js"
else 
    echo custom.js fehlt in $mod_dir!
fi
