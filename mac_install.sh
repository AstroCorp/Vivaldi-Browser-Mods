#!/bin/bash

# Find path to Framework folder of current version and save it as variable
findPath="`find /Applications/Vivaldi.app -name Vivaldi\ Framework.framework`"

# Copy custom files to Vivaldi.app
cp ./mods/custom.css "$findPath"/Resources/vivaldi/style/
cp ./mods/custom.js "$findPath"/Resources/vivaldi/

# Save path to browser.html as variable
browserHtml="$findPath"/Resources/vivaldi/browser.html

# Insert references, if not present, and save to temporary file
sed 's|  </head>|    <link rel="stylesheet" href="style/custom.css" /></head>|;s|  </body>|    <script src="custom.js"></script></body>|' "$browserHtml" > "$browserHtml".temp

# Backup original file
cp "$browserHtml" "$browserHtml".bak

# Overwrite
mv "$browserHtml".temp "$browserHtml"

# Pause script
read -rsp $'Press [Enter] to close install...\n'
