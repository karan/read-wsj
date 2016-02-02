titleEle = document.getElementsByClassName('wsj-article-headline')[0];
subHeadEle = document.getElementsByClassName('sub-head')[0];
title = titleEle.textContent;

// var a = document.createElement('a');
// var linkText = document.createTextNode("We Know You're Just Going To Google This Headline Antway, So Here Is A Link To The Free Article, You Cheap Bastard");
// a.appendChild(linkText);
// a.title = "We Know You're Just Going To Google This Headline Antway, So Here Is A Link To The Free Article, You Cheap Bastard";
// a.href = "http://example.com";

var buttonnode = document.createElement('input');
buttonnode.setAttribute('type', 'button');
buttonnode.setAttribute('value', "We Know You're Just Going To Google This Headline Antway, So Here Is A Link To The Free Article, You Cheap Bastard");
buttonnode.onclick = function() {
  window.open('http://www.google.com/search?q=' + title, '_blank');
};

titleEle.parentNode.insertBefore(buttonnode, subHeadEle);
