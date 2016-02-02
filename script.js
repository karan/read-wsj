titleEle = document.getElementsByClassName('wsj-article-headline')[0];
subHeadEle = document.getElementsByClassName('sub-head')[0];
title = titleEle.textContent;

var buttonnode = document.createElement('input');
buttonnode.setAttribute('type', 'button');
buttonnode.setAttribute('value', "We Know You're Just Going To Google This Headline Anyway, So Here Is A Link To The Free Article, You Cheap Bastard");
buttonnode.onclick = function() {
  window.open('http://www.google.com/search?q=' + title, '_blank');
};

titleEle.parentNode.insertBefore(buttonnode, subHeadEle);
