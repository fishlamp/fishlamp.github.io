---
layout: default
title: FishLamp Repository Topology
---

###Files at the Root:

1. .fishlamp-root:   
This is an invisible file that the build scripts use to locate the framework.

2. .gitmodules:   
List of submodules used by the framework, like cocos2d

3. LICENSE:   
The MIT license file

4. README.MD:   
Like, read me. Like. Totally.

5. Version.plist:   
This is a plist that has the current version of the framework in it. This will be in sync with tagged releases of the framework in the master branch. All of the tools will be set to the same version, this way if you're working with v3.0.0.125, PackMule will be the same version.

6. FishLamp.xcodeProject  
This is a Xcode project that contains everything. You can build the various libraries from here. You can include this library in your project and have your project build the libraries you need as needed, etc.

7. FishLamp.xcworkspace  
This Xcode workspace contains the FishLamp.xcodeProject.

###Frameworks

This is where all the source code lives. See the organization for this folder [here](/files.html).

###Scripts

Scripts for working with FishLamp. More info here [here](/scripts.html).

###Tools

Source code for the tools, including PackMule and Whittle. See the tools section [here](/tools.html).

###Submodules

We need to put our submodule dependencies somewhere. Instead of confusing things by putting them at the root of the repo, we'll put them here for clarity.

###Deprecated

This is where a bunch of random stuff is. Soon to be moved into it's own repo. You can ignore this.