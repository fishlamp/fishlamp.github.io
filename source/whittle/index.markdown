---
layout: page
title: "Whittle"
date: 2013-06-22 14:05
comments: false
sharing: true
footer: false
---

Whittle is a command line tool that generates code. It takes input files in either JSON or XML and outputs objective-c code. It is designed primarily to generate code that can be used with the object model abstraction in the framework. Since it is a command line tool, it makes it easy to automate code generation especially in large projects.

[PackMule](/packmule.html) is the Cocoa app for editing the project files individually.

Model objects in FishLamp can be saved to structured storage on the device, or serialized over the network (TCP, HTTP, JSON, XML, SOAP) etc.

Input files are in the FishLamp project format (flproj), see a screenshot below showing one of these files (a test file). Project files describe one or more objects, enumerations, and can import other project files. You can also import WSDL declarations from HTTP urls – this means you can generate and entire object model by just importing the WSDL.

Note that values redefined in the enclosing project file override the values in the imported project file – so you can add properties and storage options to objects defined externally in a WSDL declaration.

You can define properties for your objects and define how they are stored in structured storage, for example in the screen shot below you can see that the ‘testInt’ property is indexed and that the ‘databaseGuid’ is the primary key.

> BTW – I owe you documentation describing the FishLamp Object model.

![](/images/packmule-testobject.png)

And here’s a screenshot of the header that whittle generated:

![](/images/generated-header.png)


