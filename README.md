# tech-ed-week-2-assignment

Hi guys,

A horrible experience of pretty abject failure from me. So given the amount of time I've spent with so little result, I thought it would be more beneficial to spend some time outlining my thinking.

Of course we have the brief, and it calls upon things we've covered in the past two weeks. My problem is really with the language and grammar required to put intentions into practice. So, for what it's worth, I'm going to try to express those intntions, given that I've not been able to put them into practice.

I won't repeat that overall task, but take it part by part.

I've managed to reverse engineer Sam's demo of a gallery. Even that was quite challenging for me as I made small typo's that had big effects. E.g. I missed a b out of thumbnails in my html and ended up with nothing on screen. However, as you can see, I got that done, and sized the row of thumbnails according to what I thought was suitable.


Successes

I got a row of thumbnails at a consistent height of my choosing

Clicking on each brings the correct large version into picture

I created buttonns for next and previous images

I gave aria labels to the buttons and alt text to the images

I used webp images for smaller file sizes - i.e. quicker loading and lower memory requirements.


Tried but failed

Making the next and previous buttons actually work. I think this requires that the buttons pull up the current ARRAY element plus or minus 1. Ideally I would have liked this to be circular such that the user has a continuous looping experience of the thumbnails.

Giving arrow images to the previous and next buttons. I managed to give them each different colours, ans get the previous button to the left and the next to the right, but they should have arrows. I put an arrow image in my working folder (rightarrow.jpg) but could not get it to display (I tried background-image: rightarrow.jpg, variously with = sign, '', etc).

Centre the thumbnails and full-size images in the viewport.


Hoped to do but not got to

Keyboard navigation - I would like the user to be able to tab and shift-tab around the screen in order to 'operate' it. E.g. tab / shift-tab to select each thumbnail, use enter or spacebar as mouse left-click, substitute the forward and back buttons using arrow keys, etc.

Create and deploy various sized of the images so that they can be viewed well on different size screens, e.g. desktop, laptop, tablet, phone, etc. This would involve using SRCSET to access a 'gallery' of images each with versions of different sizes.

I recognise that some of the above is outlined in the assignment description, but I have not copied it; I'm trying to show how far I understand the principles as well as acknowledging that I am not yet able to realise them in code.

