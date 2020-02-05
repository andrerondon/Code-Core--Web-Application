
  1. What is !important property? 

  !important property is used to provide more importance than normal property. In CSS, the !important means that “this is important”, ignore all the subsequent rules.



 2. How does it work with CSS specificity? 
Gives more weight in the CSS, and CSS take this mark as a rule and make the changed marked !important property



 3. When do we might use it and how to avoid using it?
 Is good to use when you have a element which has another selector affecting it that has a higher specificity. So when you have issues is good to use but, whenever it's possible to avoid it, avoid it. Using lots of !important styles will make maintenance a bit harder, because you break the natural cascading in your stylesheets.




